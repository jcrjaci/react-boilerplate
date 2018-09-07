import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

configure({ adapter: new Adapter() });

describe('<Pagination />', () => {
  const wrapper = shallow(<Pagination currentPage={10} totalPages={100} />);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should only render "1"', () => {
    wrapper.setProps({ currentPage: 1, totalPages: 1 });
    const link = wrapper.find(Link);

    expect(link).toHaveLength(1);

    expect(link.get(0).props.children).toBe(1);
    expect(link.get(0).props.className).toBe('active');
    expect(link.get(0).props.to).toBe('/coins/1');
  });

  it('should only render "1 2 >" with 1 as active', () => {
    wrapper.setProps({ currentPage: 1, totalPages: 2 });
    const link = wrapper.find(Link);

    expect(link).toHaveLength(3);

    expect(link.get(0).props.children).toBe(1);
    expect(link.get(0).props.className).toBe('active');
    expect(link.get(0).props.to).toBe('/coins/1');

    expect(link.get(1).props.children).toBe(2);
    expect(link.get(1).props.to).toBe('/coins/2');

    expect(link.get(2).props.children).toBe('\u276F');
    expect(link.get(2).props.className).toBe('next');
    expect(link.get(2).props.to).toBe('/coins/2');
  });

  it('should only render "< 1 2" with 2 as active', () => {
    wrapper.setProps({ currentPage: 2, totalPages: 2 });
    const link = wrapper.find(Link);

    expect(link).toHaveLength(3);
    expect(link.get(0).props.to).toBe('/coins/1');
    expect(link.get(0).props.children).toBe('\u276E');
    expect(link.get(0).props.className).toBe('prev');

    expect(link.get(1).props.children).toBe(1);
    expect(link.get(1).props.to).toBe('/coins/1');

    expect(link.get(2).props.children).toBe(2);
    expect(link.get(2).props.to).toBe('/coins/2');
    expect(link.get(2).props.className).toBe('active');
  });

  it('should only render "< 1 2 3 >" with 2 as active', () => {
    wrapper.setProps({ currentPage: 2, totalPages: 3 });
    const link = wrapper.find(Link);

    expect(link).toHaveLength(5);

    expect(link.get(0).props.to).toBe('/coins/1');
    expect(link.get(0).props.children).toBe('\u276E');
    expect(link.get(0).props.className).toBe('prev');

    expect(link.get(1).props.children).toBe(1);
    expect(link.get(1).props.to).toBe('/coins/1');

    expect(link.get(2).props.children).toBe(2);
    expect(link.get(2).props.to).toBe('/coins/2');
    expect(link.get(2).props.className).toBe('active');

    expect(link.get(3).props.children).toBe(3);
    expect(link.get(3).props.to).toBe('/coins/3');

    expect(link.get(4).props.children).toBe('\u276F');
    expect(link.get(4).props.className).toBe('next');
    expect(link.get(4).props.to).toBe('/coins/3');
  });

  it('should only render "1 2 3 >" with 1 as active', () => {
    wrapper.setProps({ currentPage: 1, totalPages: 3 });
    const link = wrapper.find(Link);

    expect(link).toHaveLength(4);

    expect(link.get(0).props.children).toBe(1);
    expect(link.get(0).props.to).toBe('/coins/1');
    expect(link.get(0).props.className).toBe('active');

    expect(link.get(1).props.children).toBe(2);
    expect(link.get(1).props.to).toBe('/coins/2');

    expect(link.get(2).props.children).toBe(3);
    expect(link.get(2).props.to).toBe('/coins/3');

    expect(link.get(3).props.children).toBe('\u276F');
    expect(link.get(3).props.className).toBe('next');
    expect(link.get(3).props.to).toBe('/coins/2');
  });

  it('should only render "< 1 2 3" with 3 as active', () => {
    wrapper.setProps({ currentPage: 3, totalPages: 3 });
    const link = wrapper.find(Link);

    expect(link).toHaveLength(4);

    expect(link.get(0).props.to).toBe('/coins/2');
    expect(link.get(0).props.children).toBe('\u276E');
    expect(link.get(0).props.className).toBe('prev');

    expect(link.get(1).props.children).toBe(1);
    expect(link.get(1).props.to).toBe('/coins/1');

    expect(link.get(2).props.children).toBe(2);
    expect(link.get(2).props.to).toBe('/coins/2');

    expect(link.get(3).props.children).toBe(3);
    expect(link.get(3).props.to).toBe('/coins/3');
    expect(link.get(3).props.className).toBe('active');
  });

  it('should only render "< 1 2 3 4 >" with 3 as active', () => {
    wrapper.setProps({ currentPage: 3, totalPages: 4 });
    const link = wrapper.find(Link);

    expect(link).toHaveLength(6);

    expect(link.get(0).props.to).toBe('/coins/2');
    expect(link.get(0).props.children).toBe('\u276E');
    expect(link.get(0).props.className).toBe('prev');

    expect(link.get(1).props.children).toBe(1);
    expect(link.get(1).props.to).toBe('/coins/1');

    expect(link.get(2).props.children).toBe(2);
    expect(link.get(2).props.to).toBe('/coins/2');

    expect(link.get(3).props.children).toBe(3);
    expect(link.get(3).props.to).toBe('/coins/3');
    expect(link.get(3).props.className).toBe('active');

    expect(link.get(4).props.children).toBe(4);
    expect(link.get(4).props.to).toBe('/coins/4');

    expect(link.get(5).props.children).toBe('\u276F');
    expect(link.get(5).props.className).toBe('next');
    expect(link.get(5).props.to).toBe('/coins/4');
  });

  it('should only render "< 1 2 3 4 >" with 2 as active', () => {
    wrapper.setProps({ currentPage: 2, totalPages: 4 });
    const link = wrapper.find(Link);

    expect(link).toHaveLength(6);

    expect(link.get(0).props.to).toBe('/coins/1');
    expect(link.get(0).props.children).toBe('\u276E');
    expect(link.get(0).props.className).toBe('prev');

    expect(link.get(1).props.children).toBe(1);
    expect(link.get(1).props.to).toBe('/coins/1');

    expect(link.get(2).props.children).toBe(2);
    expect(link.get(2).props.to).toBe('/coins/2');
    expect(link.get(2).props.className).toBe('active');

    expect(link.get(3).props.children).toBe(3);
    expect(link.get(3).props.to).toBe('/coins/3');

    expect(link.get(4).props.children).toBe(4);
    expect(link.get(4).props.to).toBe('/coins/4');

    expect(link.get(5).props.children).toBe('\u276F');
    expect(link.get(5).props.className).toBe('next');
    expect(link.get(5).props.to).toBe('/coins/3');
  });

  it('should only render "< 1 ...  3 4 5 >" with 4 as active', () => {
    wrapper.setProps({ currentPage: 4, totalPages: 5 });
    const link = wrapper.find(Link);
    const span = wrapper.find('span');

    expect(link).toHaveLength(6);
    expect(span).toHaveLength(1);

    expect(link.get(0).props.to).toBe('/coins/3');
    expect(link.get(0).props.children).toBe('\u276E');
    expect(link.get(0).props.className).toBe('prev');

    expect(link.get(1).props.children).toBe(1);
    expect(link.get(1).props.to).toBe('/coins/1');

    expect(link.get(2).props.children).toBe(3);
    expect(link.get(2).props.to).toBe('/coins/3');

    expect(link.get(3).props.children).toBe(4);
    expect(link.get(3).props.to).toBe('/coins/4');
    expect(link.get(3).props.className).toBe('active');

    expect(link.get(4).props.children).toBe(5);
    expect(link.get(4).props.to).toBe('/coins/5');

    expect(link.get(5).props.children).toBe('\u276F');
    expect(link.get(5).props.className).toBe('next');
    expect(link.get(5).props.to).toBe('/coins/5');
  });

  it('should only render "< 1 2 3 4 ... 6 >" with 3 as active', () => {
    wrapper.setProps({ currentPage: 3, totalPages: 6 });
    const link = wrapper.find(Link);
    const span = wrapper.find('span');

    expect(link).toHaveLength(7);
    expect(span).toHaveLength(1);

    expect(link.get(0).props.to).toBe('/coins/2');
    expect(link.get(0).props.children).toBe('\u276E');
    expect(link.get(0).props.className).toBe('prev');

    expect(link.get(1).props.children).toBe(1);
    expect(link.get(1).props.to).toBe('/coins/1');

    expect(link.get(2).props.children).toBe(2);
    expect(link.get(2).props.to).toBe('/coins/2');

    expect(link.get(3).props.children).toBe(3);
    expect(link.get(3).props.to).toBe('/coins/3');
    expect(link.get(3).props.className).toBe('active');

    expect(link.get(4).props.children).toBe(4);
    expect(link.get(4).props.to).toBe('/coins/4');

    expect(link.get(5).props.children).toBe(6);
    expect(link.get(5).props.to).toBe('/coins/6');

    expect(link.get(6).props.children).toBe('\u276F');
    expect(link.get(6).props.className).toBe('next');
    expect(link.get(6).props.to).toBe('/coins/4');
  });

  it('should only render "< 1 ... 3 4 5 ... 7 >" with 4 as active', () => {
    wrapper.setProps({ currentPage: 4, totalPages: 7 });
    const link = wrapper.find(Link);
    const span = wrapper.find('span');

    expect(link).toHaveLength(7);
    expect(span).toHaveLength(2);

    expect(link.get(0).props.to).toBe('/coins/3');
    expect(link.get(0).props.children).toBe('\u276E');
    expect(link.get(0).props.className).toBe('prev');

    expect(link.get(1).props.children).toBe(1);
    expect(link.get(1).props.to).toBe('/coins/1');

    expect(link.get(2).props.children).toBe(3);
    expect(link.get(2).props.to).toBe('/coins/3');

    expect(link.get(3).props.children).toBe(4);
    expect(link.get(3).props.to).toBe('/coins/4');
    expect(link.get(3).props.className).toBe('active');

    expect(link.get(4).props.children).toBe(5);
    expect(link.get(4).props.to).toBe('/coins/5');

    expect(link.get(5).props.children).toBe(7);
    expect(link.get(5).props.to).toBe('/coins/7');

    expect(link.get(6).props.children).toBe('\u276F');
    expect(link.get(6).props.className).toBe('next');
    expect(link.get(6).props.to).toBe('/coins/5');
  });
});
