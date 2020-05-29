import React from 'react';
import Page from './Page';
import HomeContainer from '../containers/Home';

const Home = (props) => {
    const pageTitle = () => {
        return 'Oddle test';
    };

    const pageMeta = () => {
        return [
            { name: 'Oddle test', content: 'Oddle test' },
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
            <HomeContainer {...props} />
        </Page>
    );
};

export default Home;
