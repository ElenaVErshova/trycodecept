const { I } = inject();

module.exports = {
    prepare() {
        I.clearCookie();
        I.openNewTab();
        I.closeOtherTabs();
    }
}