import { Sfm1Page } from './app.po';

describe('sfm1 App', () => {
  let page: Sfm1Page;

  beforeEach(() => {
    page = new Sfm1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
