import React from 'react';
import { getUserDetails } from '../actions/users';
import qs from 'query-string';
import { connect } from "react-redux";
import Loader from "../components/Loader";

class About extends React.Component {
    componentDidMount() {
        const queryParams = qs.parse(this.props.location.search)
        this.props.getUserDetails(queryParams.username)
    }

    render() {
        const { user } = this.props;
        if (user.detail) {
            const { searching, avatar_url, login, name, location, followers, following } = user.detail;
            if (searching) {
                return <Loader/>
            }
            return (<div>
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
            </div>)
        }
        return <div />
    }
}

const mapState = state => ({
    user: state.user,
});

const mapDispatch = {
    getUserDetails,
};

export default (connect(mapState, mapDispatch)(About));
