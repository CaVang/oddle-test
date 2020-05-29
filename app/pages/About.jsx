import React from 'react';
import Page from './Page';
import AboutContainer from '../containers/About';

const About = (props) => {
  const pageTitle = () => {
    return 'About User';
  };

  const pageMeta = () => {
    return [
      { name: 'About User', content: 'User Information' },
    ];
  };

  const pageLink = () => {
    return [];
  };

  const getMetaData = () => ({
    title: pageTitle(),
    meta: pageMeta(),
    link: pageLink(),
  });

  return (
    <Page {...getMetaData()}>
      <AboutContainer {...props} />
    </Page>
  );
};

export default About;
