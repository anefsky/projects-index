import { ProjectsIndexPage } from './app.po';

describe('projects-index App', () => {
  let page: ProjectsIndexPage;

  beforeEach(() => {
    page = new ProjectsIndexPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
