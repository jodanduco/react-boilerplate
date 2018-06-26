import React from 'react';
import { shallow } from 'enzyme';
import { NavBar } from '../index';

describe('<NavBar />', () => {
  it('should render a render a NavBarContainer', () => {
    const renderedComponent = shallow(
      <NavBar />
    );
    expect(renderedComponent.find('NavBarContainer').length).toEqual(1);
  });
  it('should render at least one ItemLink', () => {
    const renderedComponent = shallow(
      <NavBar />
    );
    expect(renderedComponent.find('ItemLink').length).toBeGreaterThan(0);
  });
});
