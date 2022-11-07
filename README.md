# calc

Environment Setup -

Tools Required :
1) Visual Studio Code
2) Appium Server GUI
3) Appium Inspector (for inspecting elements)
4) Node Js
5) Android Studio
6) Emulator / Android device
7) Webdriver IO (to be installed via project setup)

Commands needs to be followed when downloaded the project for the first time -

1) Download the project
2) Open terminal
3) run the command "npm install"
4) Let everything get installed & can verify by checking the creation of "node-modules" folder in the project
5) run "npx wdio" command to run the test
6) need to update the capabilities with the device name value for the key "appium:udid"

Commands followed while creating project -
1) npm init (provided the details) else npm init -yes
2) npm install @wdio/cli (to install webdriver IO)
3) npx wdio config (to select the framework, reporter, service)
4) npm install appium@next (to install appium for the project)
5) npx appium driver install uiautomator2 (to install ui automator 2)
6) npx wdio (if "scripts": {
    "wdio": "wdio run wdio.conf.js"
  },) in package.json
  
  else
  
  npx wdio run wdio.conf.js (command to run the tests)
  
  
  Explanation of project framwork -
  1) app/android, folder consists of calculator apk (as I don't have android device & my emulator doesn't have native calculator app, used this google calculator apk)
  2) test/specs, folder consists the test case which will be running for this specific project. this is also defined in wdio.conf.js
  3) test/pageObjects, folder consists of page objects of the calculator screen (as project is small, only used to fetch a button)
  4) test/data, folder consists of a dataList class in which the user can edit the first number & second number according to his desire and also need to update the result
  5) package.json consists of the all the packages installed for this project
  
  About the project -
  
  As a user, we want to perform automation testing for the test case "addition of two numbers & then verifying the result using android calculator application in android device"
  
  Given the user is on android calculator app
  
  When the user enters the first number (if multiple units in a number, program enters all the digits one by one)
  
  And the user clicks on plus symbol on the screen
  
  Then the user enters the second number (if multiple units in a number, program enters all the digits one by one)
  
  Then the user verifies the result on the screen which is displayed 
  
 
