class CalcScreen {
    get plusButton() {
        return $('~plus');
    }

    get resultField() {
        return $('~No result');
    }
}

module.exports = new CalcScreen();