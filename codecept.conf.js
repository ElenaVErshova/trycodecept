const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://ok.ru',
      show: true,
      browser: 'chromium',
      waitForNavigation: "load"
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/LoginPage.js',
    userMainPage: './pages/UserMainPage.js',
    userOwnPage: './pages/UserOwnPage.js',
    photolayer: './pages/Photolayer.js',
    postForm: './pages/PostForm.js',
    userTopicsPage: './pages/UserTopicsPage.js',
    videoTopPage: './pages/VideoTopPage.js',
    videolayer: './pages/Videolayer.js',
    loginStep: './steps/Login.js',
    prepareStep: './steps/Prepare.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'trycodecept',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}