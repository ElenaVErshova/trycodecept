const { I } = inject();

module.exports = {

  fields: {
    username: '#field_email',
    password: '#field_password',
  },
  loginButton: { xpath: "//*[@data-l = 't,sign_in']" },
  mainBlock: { css: '#hook_Block_AnonymMain' },

  // methods
  login(username, password) {
    I.fillField(this.fields.username, username);
    I.fillField(this.fields.password, password);
    I.click(this.loginButton);
  },

}
