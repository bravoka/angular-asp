import { AngularAspcorePage } from './app.po';

describe('angular-aspcore App', () => {
  let page: AngularAspcorePage;

  beforeEach(() => {
    page = new AngularAspcorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
