import React from 'react';
import { connect } from "react-redux";
import { Results, Item } from '../css/components/home';
import { searchUsers } from "../actions/users";
import qs from 'query-string';

import UserCard from "../components/UserCard";
import Loader from '../components/Loader';
import Pagination from "../components/Pagination";

class Home extends React.Component {
    componentWillReceiveProps(nextProps) {
        const queryParams = qs.parse(nextProps.location.search)
        if (this.props.location.search !== nextProps.location.search && queryParams.q) {
            this.props.searchUsers(qs.parse(nextProps.location.search));
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

const mapDispatch = {
    searchUsers,
};

export default (connect(mapState, mapDispatch)(Home));
