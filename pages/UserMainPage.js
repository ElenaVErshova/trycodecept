const {
    I,
    photolayer,
    userOwnPage,
    postForm,
    userTopicsPage,
    videoTopPage,
} = inject();

module.exports = {
    userMenuDropdown: { xpath: "//*[@id = 'hook_Block_ToolbarUserDropdown']/div" },
    userMenuDropdownImg: { xpath: "//*[contains(@class, 'js-toolbar-menu')]//img" },
    sideNavUserLink: { css: "a[data-l='t,userPage']" },
    avatar: { css: "a.card_wrp" },
    postFormInFeed: { xpath: "//*[contains(@hrefattrs, 'PopLayerMediaTopic')]" },
    toolbarVideo: { css: '#hook_Block_TopMenuVideo' },

    openAvatar() {
        I.click(this.avatar);
        I.waitForVisible(photolayer.photolayer);
    },

    gotoOwnPage() {
        I.click(this.sideNavUserLink);
        I.waitForVisible(userOwnPage.profileName);
    },

    openPostingForm() {
        I.click(this.postFormInFeed);
        I.waitForVisible(postForm.postFormPopup);
    },

    gotoTopics(id) {
        I.amOnPage(`/profile/${id}/statuses`);
        I.waitForVisible(userTopicsPage.topicTypeFilter);
    },

    gotoVideosPage() {
        I.click(this.toolbarVideo);
        I.waitForVisible(videoTopPage.videoLeftMenuBlock);
    }

}