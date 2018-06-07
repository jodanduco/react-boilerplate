import React from 'react';
import { Helmet } from 'react-helmet';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import List from 'components/List';
import messages from '../messages';
import FeaturePage from '../index';

describe('<FeaturePage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(
      <FeaturePage />
    );
    expect(renderedComponent.contains(
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
    )).toBe(true);
  });

  it('should render <Helmet> with correct title and meta', () => {
    const helmetTitle = 'Feature Page';
    const metaHelmet = {
      name: 'description',
      content: 'Feature page of React.js Boilerplate application',
    };
    const renderedComponent = shallow(
      <FeaturePage />
    );
    expect(renderedComponent.contains(
      <Helmet>
        <title>{helmetTitle}</title>
        <meta name={metaHelmet.name} content={metaHelmet.content} />
      </Helmet>
    )).toBe(true);
  });

  it('should cointains a <List> component', () => {
    const renderedComponent = shallow(
      <FeaturePage />
    );
    expect(renderedComponent.contains(
      <List>
      </List>
    )).toBe(true);
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(
      <FeaturePage />
    );
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
