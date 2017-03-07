import { ProyectoPage } from './app.po';

describe('proyecto App', () => {
  let page: ProyectoPage;

  beforeEach(() => {
    page = new ProyectoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
