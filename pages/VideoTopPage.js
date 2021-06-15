const { I, videolayer } = inject();

module.exports = {
    videoLeftMenuBlock: { css: '#hook_Block_VideoLeftMenuBlock' },
    videoCard: { css: "[id *= 'video-card_img_']" },
    videoCardTitle: { css: '.video-card_n.ellip' },

    openVideo() {
        I.click(this.videoCard);
        I.waitForVisible(videolayer.videolayer);
    },

    async getTitle() {
        const title = await I.grabTextFrom(this.videoCardTitle);
        return title;
    }
}
