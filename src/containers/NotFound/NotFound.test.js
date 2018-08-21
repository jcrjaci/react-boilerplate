import NotFound from './NotFound';

describe('Loading component', () => {
  it('should render Not found component', () => {
    expect(NotFound()).toMatchSnapshot();
  });
});
