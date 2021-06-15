const { I } = inject();

module.exports = {
    postFormPopup: { css: '#hook_Block_pfnull' },
    textArea: { css: "[data-module = 'postingForm/mediaText']" },
    submitPost: { xpath: "//*[@class = 'posting_footer']//*[@data-action = 'submit']" },

    doPost(text) {
        I.fillField(this.textArea, text);
        I.click(this.submitPost);
        I.waitForInvisible(this.postFormPopup);
    }
}