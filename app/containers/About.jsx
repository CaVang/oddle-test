import React from 'react';
import { Content, MetaData, GridItemRepos, ListData, GridItemTitle, ListItem, RepoHeader, RepoName, RepoFork, RepoBody, RepoFooter, RepoFooterStar, RepoFooterFork, RepoLastPush, GridItemFollowers, FollowerItem, FollowerAvatar, Avatar } from '../css/components/about';
import qs from 'query-string';
import { connect } from "react-redux";
import Loader from "../components/Loader";
import * as types from "../types";

function treatAsUTC(date) {
    const result = new Date(date);
    result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
    return result;
}

function daysBetween(startDate, endDate) {
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    return Math.round((treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay);
}

class About extends React.Component {
    componentDidMount() {
        const queryParams = qs.parse(this.props.location.search);
        this.props.getUserDetails(queryParams.username);
    }

    render() {
        const { user } = this.props;
        if (user.detail) {
            const { searching, avatar_url, login, name, location, followers, following, repos, followersList } = user.detail;
            if (searching) {
                return <Loader/>
            }
            return (<Content>
                <table cellSpacing="10">
                    <tr>
                        <td>
                            <img height="300"
                                 src={avatar_url}
                                 alt=""/>
                        </td>
                        <td>
                            <h1>{login} - {name}</h1>
                            <p>{location}</p>
                            <p>{followers} followers - {following} following</p>
                        </td>
                    </tr>
                </table>
                <hr/>
                <MetaData>
                    <GridItemRepos>
                        <GridItemTitle>Repositories</GridItemTitle>
                        <ListData>
                            {
                                repos && repos.map((repo, key) => <ListItem key={key}>
                                    <RepoHeader>
                                        <RepoName>{repo.name}</RepoName>
                                        {
                                            repo.fork && <RepoFork>(fork)</RepoFork>
                                        }
                                    </RepoHeader>
                                    <RepoBody>{repo.description}</RepoBody>
                                    <RepoFooter>
                                        <RepoFooterStar>
                                            <p>{repo['stargazers_count']} star</p>
                                        </RepoFooterStar>-
                                        <RepoFooterFork>
                                            <p>{repo['forks_count']} fork</p>
                                        </RepoFooterFork>
                                        <RepoLastPush>last push {daysBetween(repo['pushed_at'], new Date())} days ago</RepoLastPush>
                                    </RepoFooter>
                                </ListItem>)
                            }
                        </ListData>
                    </GridItemRepos>
                    <GridItemFollowers>
                        <GridItemTitle>Followers</GridItemTitle>
                        <ListData>
                            {
                                followersList && followersList.map((follower, key) => <ListItem key={key}>
                                    <FollowerItem href={follower.url}>
                                        <FollowerAvatar>
                                            <Avatar src={follower['avatar_url']} width={90}/>
                                        </FollowerAvatar>
                                        {follower.login}
                                    </FollowerItem>
                                </ListItem>)
                            }
                        </ListData>
                    </GridItemFollowers>
                </MetaData>
            </Content>)
        }
        return <div />
    }
}

const mapState = state => ({
    user: state.user,
});

const mapDispatch = (dispatch) => ({
    getUserDetails(userName) {
        dispatch({
            type: types.USER_DETAIL_ASYNC.PENDING,
            userName,
        });
    },
});

export default (connect(mapState, mapDispatch)(About));
