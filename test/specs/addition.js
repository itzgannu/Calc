const DataList = require("../data/dataList");
const CalcScreen = require("../pageObjects/android/calc.screen");

describe('DotDash Task', () => {
    it('Add two numbers and Verify the result', async() => {

        //getting data from dataList.js
        var firstNumber = DataList.firstNumber;
        var secondNumber = DataList.secondNumber;

        //adding the two number, first converting string to int & then converting result to string to compare with textfield value
        var result = parseInt(firstNumber) + parseInt(secondNumber);
        const resultNumber =  result.toString();

        //logic to enter every digit of the number
        await CalcScreen.enterNumber(firstNumber);

        //clicking on plus button to perform the addition
        await CalcScreen.plusButton.click();

        //logic to enter every digit of the number
        await CalcScreen.enterNumber(secondNumber);

        //verify result of the addition of two numbers
        var actualNumber = await CalcScreen.resultField.getText();
        await expect(actualNumber).toEqual(resultNumber);
    });
});
