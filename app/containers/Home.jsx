import React from 'react';
import { connect } from "react-redux";
import { Results, Item } from '../css/components/home';
import * as types from '../types';
import qs from 'query-string';

import UserCard from "../components/UserCard";
import Loader from '../components/Loader';
import Pagination from "../components/Pagination";

class Home extends React.Component {
    componentDidMount() {
        if (this.props.location.search) {
            this.props.searchForUser(qs.parse(this.props.location.search));
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.location.search !== nextProps.location.search) {
            this.props.searchForUser(qs.parse(nextProps.location.search));
        }
    }

    render() {
        const { user: { users } } = this.props;
        const queryParams = qs.parse(this.props.location.search);

        if (users.searching) {
            if (queryParams.q) {
                return (
                    <div>
                        <Pagination {...users.pagination} totalCount={users['total_count']} currentPage={queryParams.page}/>
                        <Loader />
                    </div>
                );
            }
            return <Loader />
        }
        if (queryParams.q && users.items) {
            return (
                <div>
                    <Pagination {...users.pagination} totalCount={users['total_count']} currentPage={queryParams.page}/>
                    <Results>
                        {
                            users.items.map((item, key) => <Item key={key}>
                                <UserCard avatar_url={item['avatar_url']} login={item.login} />
                            </Item>)
                        }
                    </Results>
                </div>
            );
        }
        return <div/>
    }
}

const mapState = state => ({
    user: state.user,
});

const mapDispatch = (dispatch) => ({
    searchForUser(search) {
        dispatch({
            type: types.SEARCH_USER_ASYNC.PENDING,
            payload: {
                search,
            },
        });
    },
});

export default (connect(mapState, mapDispatch)(Home));
