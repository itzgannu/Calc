class CalcScreen {
    get plusButton() {
        return $('~plus');
    }

    get resultField() {
        return $('//android.widget.TextView[@resource-id="com.google.android.calculator:id/result_preview"]');
    }

    async enterNumber(number) {
        for (var i = 0; i < number.length; i++) {
            let j = number.charAt(i);
            switch (j) {
                case "0":
                    await $('//android.widget.ImageButton[@resource-id="com.google.android.calculator:id/digit_0"]').click();
                    break;
                case "1":
                    await $('//android.widget.ImageButton[@resource-id="com.google.android.calculator:id/digit_1"]').click();
                    break;
                case "2":
                    await $('//android.widget.ImageButton[@resource-id="com.google.android.calculator:id/digit_2"]').click();
                    break;
                case "3":
                    await $('//android.widget.ImageButton[@resource-id="com.google.android.calculator:id/digit_3"]').click();
                    break;
                case "4":
                    await $('//android.widget.ImageButton[@resource-id="com.google.android.calculator:id/digit_4"]').click();
                    break;
                case "5":
                    await $('//android.widget.ImageButton[@resource-id="com.google.android.calculator:id/digit_5"]').click();
                    break;
                case "6":
                    await $('//android.widget.ImageButton[@resource-id="com.google.android.calculator:id/digit_6"]').click();
                    break;
                case "7":
                    await $('//android.widget.ImageButton[@resource-id="com.google.android.calculator:id/digit_7"]').click();
                    break;
                case "8":
                    await $('//android.widget.ImageButton[@resource-id="com.google.android.calculator:id/digit_8"]').click();
                    break;
                case "9":
                    await $('//android.widget.ImageButton[@resource-id="com.google.android.calculator:id/digit_9"]').click();
                    break;
            
                default:
                    break;
            }
        }
    }
}

module.exports = new CalcScreen();
