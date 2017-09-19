import { GuardianCarePortalPage } from './app.po';

describe('guardian-care-portal App', () => {
  let page: GuardianCarePortalPage;

  beforeEach(() => {
    page = new GuardianCarePortalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
