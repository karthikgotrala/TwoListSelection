import { TwoListSelectionPage } from './app.po';

describe('two-list-selection App', () => {
  let page: TwoListSelectionPage;

  beforeEach(() => {
    page = new TwoListSelectionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
