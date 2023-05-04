## CI

The tests are executed on [CircleCI](https://app.circleci.com/pipelines/github/Benedicttt/cypress), see configuration file [circle.yml](.circleci/config.yml). One job generates Mochawesome report, while the second one stores JUnit test results. Both jobs store automatic screenshots and videos.

### Demo project framework with allure and cypress 12 

***
#### How run?

if you have *ntl*, that runn ntl end select from menu commands, or



$ `npx cypress run -b chrome` - simple run test

$ `npx cypress run --headless --browser chrome --headless  --env allure=true` - run test with charm reports and Chrome browser has been assigned, headless mode 

$ `npx cypress run --headless --browser electron --headless  --env allure=true` - run test with charm reports and Electron  has been assigned, headless mode

$ `npx cypress-parallel --browser chrome -s cypress:run -t 10 -d 'tests/spec/**/**.js' --weightsJson 'tests/parallel-weights.json' --env allure=true  --headed` - run test with 3 threads and allure report. This  command need if you want to run many tests at once.


***Creator project Serhii Kyivskyi***