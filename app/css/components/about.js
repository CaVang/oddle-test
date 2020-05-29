import styled from '@emotion/styled';

import { heading, normal, small } from '../common/typography';

export const Content = styled.div`
    margin: 0 auto;
    max-width: 1020px;
`;

export const MetaData = styled.div`
    padding-top: 20px;
    margin: 0 -17.5px;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-flow: row wrap;
    margin: 0;
    padding: 0;
`;

export const GridItemRepos = styled.div`
    padding: 0 17.5px;
    margin-bottom: 0px;
    box-sizing: inherit;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    min-width: 0;
    flex-basis: auto!important;
    width: 50%!important;
`;

export const GridItemFollowers = styled.div`
    padding: 0 17.5px;
    box-sizing: inherit;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    min-width: 0;
    flex-basis: auto!important;
    width: 50%!important;
`;

export const GridItemTitle = styled.h2`
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 25px;
    padding-left: 40px;
`;

export const ListData = styled.ul`
    list-style: none;
`;

export const ListItem = styled.li`
    border-bottom: 1px solid #ddd;
    margin-bottom: 20px;
    padding-bottom: 20px;
`;

export const RepoHeader = styled.p`
    margin-bottom: 10px;
    font-size: 18px;
    align-items: baseline!important;
    display: flex!important;
`;

export const RepoName = styled.a`
    color: #269930;
    text-decoration: none;
    transition: color .2s ease;
    background-color: transparent;
`;

export const RepoFork = styled.a`
    font-size: 12px;
    margin-left: 5px;
    color: #666;
`;

export const RepoBody = styled.p`
    font-size: 14px;
    line-height: 1.4;
`;

export const RepoFooter = styled.div`
    color: #666;
    font-size: 13px;
    align-items: center!important;
    flex-wrap: wrap!important;
    display: flex!important;
`;

export const RepoFooterStar = styled.div`
    margin-right: 12px;
    align-items: center!important;
    display: flex!important;
`;

export const RepoFooterFork = styled.div`
    margin: 0 12px;
    align-items: center!important;
    display: flex!important;
`;

export const RepoLastPush = styled.p`
    margin-left: auto!important;
`;

export const FollowerItem = styled.a`
    color: inherit;
    display: flex!important;
    text-decoration: none;
    transition: color .2s ease;
    background-color: transparent;
    &:hover {
        color: #269930;
    }
`;

export const FollowerAvatar = styled.div`
    margin-right: 15px;
    min-height: 60px;
    position: relative;
`;

export const Avatar = styled.img`
    border-radius: 8px;
    display: block;
    min-width: 100%;
    height: auto;
`;
