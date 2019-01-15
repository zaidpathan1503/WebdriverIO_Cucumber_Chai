# OpenWeatherMap
WebdriverIO + Cucumber + Chai

Run these in separate terminal window

1) selenium-standalone install --version 2.45.0 --baseURL=https://selenium-release.storage.googleapis.com --drivers.chrome.version=2.15 --drive
rs.chrome.baseURL=https://chromedriver.storage.googleapis.com
2) selenium-standalone start

3) remove "path":'/' from wdio.conf.js & all chrome options

4) In separate window execute wdio wdio.conf.js

Also runs on firefox