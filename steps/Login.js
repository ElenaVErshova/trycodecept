const { I, loginPage, userMainPage } = inject();

module.exports = {
  doLogin(username, password) {
    I.amOnPage('/')
    loginPage.login(username, password);
    I.waitForVisible(userMainPage.avatar);
  }
}
