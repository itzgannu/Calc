const DataList = require("../data/dataList");
const CalcScreen = require("../pageObjects/android/calc.screen");

describe('DotDash Task', () => {
    it('Add two numbers and Verify the result', async() => {
        const resultField =  $('~No result');

        //getting data from dataList.js
        var firstNumber = DataList.firstNumber;
        var secondNumber = DataList.secondNumber;

        //adding the two number, first converting string to int & then converting result to string to compare with textfield value
        var result = parseInt(firstNumber) + parseInt(secondNumber);
        const resultNumber =  result.toString();

        //logic to enter every digit of the number
        for (var i = 0; i < firstNumber.length; i++) {
            let j = firstNumber.charAt(i);
            let path = "//android.widget.ImageButton[@content-desc='".concat(j).concat("']");
            await $(path).click();
        }
        //getting from pageObjects
        await CalcScreen.plusButton.click();

        //logic to enter every digit of the number
        for (var i = 0; i < secondNumber.length; i++) {
            let j = secondNumber.charAt(i);
            let path = "//android.widget.ImageButton[@content-desc='".concat(j).concat("']");
            await $(path).click();
        }
        // await driver.setImplicitTimeout(50000);
        await expect(resultField).toHaveText(resultNumber);
    });
});