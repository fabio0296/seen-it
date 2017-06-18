import { SeenItPage } from './app.po';

describe('seen-it App', () => {
  let page: SeenItPage;

  beforeEach(() => {
    page = new SeenItPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
