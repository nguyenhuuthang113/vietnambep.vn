const user = USER;
const webConfig = WEB;
SetTitleAndIcon(webConfig.title, webConfig.favicon);
RenderProfileHeader(user.username, user.avatar, user.skills, user.blueTick);
RenderBanks(user.banks);
ShowModalEvent();
CloseModalEvent();
CopyEvent();
MouseLeaveEvent();