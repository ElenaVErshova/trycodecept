Feature('odnoklassniki');

const USERNAME = 'TestOTUS1';
const PASSWORD = 'testQA1';
const ID = '582953616009';
const FULLNAME = 'TestOTUS1 TestOTUS1';
const DESCRIPTION = 'Моя крутая аватарка';

Before(({ prepareStep }) => {
    prepareStep.prepare();
});

Scenario('Test login', ({ I, loginStep, userMainPage }) => {
    loginStep.doLogin(USERNAME, PASSWORD);
    I.waitForText(FULLNAME, userMainPage);
    I.see(`${FULLNAME}`);
});

Scenario('Test opening avatar', ({ I, loginStep, userMainPage, photolayer }) => {
    loginStep.doLogin(USERNAME, PASSWORD);
    userMainPage.openAvatar();
    I.waitForVisible(photolayer.photolayer, 5);
    I.waitForText(DESCRIPTION, photolayer.description);
});

Scenario('Test opening own profile page', ({ I, loginStep, userMainPage, userOwnPage }) => {
    loginStep.doLogin(USERNAME, PASSWORD);
    userMainPage.gotoOwnPage();
    I.waitForText(FULLNAME, userOwnPage.profileName);
});

Scenario('Test posting text to status', ({ I, loginStep, userMainPage, postForm, userTopicsPage }) => {
    const text = `qwerty${Math.random()}`;
    loginStep.doLogin(USERNAME, PASSWORD);
    userMainPage.openPostingForm();
    postForm.doPost(text);
    userMainPage.gotoTopics(ID);
    I.waitForText(text, userTopicsPage.feedTopicText);
});

Scenario('Test open video', async ({ I, loginStep, userMainPage, videoTopPage, videolayer }) => {
    loginStep.doLogin(USERNAME, PASSWORD);
    userMainPage.gotoVideosPage();
    const cardTitle = await videoTopPage.getTitle();
    videoTopPage.openVideo();
    I.seeTextEquals(cardTitle, videolayer.videoTitle);
});
