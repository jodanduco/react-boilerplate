import React from 'react';
import { shallow } from 'enzyme';

import { NavTabItem } from '../index';
import ItemLink from '../ItemLink';

describe('<NavTabItem />', () => {
  it('renders an ItemLink', () => {
    const renderedComponent = shallow(<NavTabItem />);
    expect(renderedComponent.find(ItemLink).node).toBeDefined();
  });

  it('handles selectTab ', () => {
    const onClickSpy = jest.fn();
    const renderedComponent = shallow(<NavTabItem onSelectTab={onClickSpy} />);
    renderedComponent.find(ItemLink).simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
});
