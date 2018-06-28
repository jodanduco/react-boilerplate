import React from 'react';
import { shallow } from 'enzyme';
import { NavBar } from '../index';
import NavBarContainer from '../NavBarContainer';

describe('<NavBar />', () => {
  let renderedComponent;
  beforeEach(() => {
    renderedComponent = shallow(<NavBar />);
  });

  it('should have one container', () => {
    const container = renderedComponent.find(NavBarContainer).node;
    expect(container).toBeDefined();
  });
});
