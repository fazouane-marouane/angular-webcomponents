import { AngularWebcomponentsPage } from './app.po';

describe('angular-webcomponents App', () => {
  let page: AngularWebcomponentsPage;

  beforeEach(() => {
    page = new AngularWebcomponentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
