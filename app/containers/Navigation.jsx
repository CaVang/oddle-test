import React from 'react';
import { NavigationStyle, Logo, NavigationInner } from '../css/components/navigation';
import { redirectPage } from "../actions/redirectPage";
import EntryBox from "../components/EntryBox";
import { connect, } from "react-redux";
import * as types from "../types";

class Navigation extends React.Component {
    render() {
        const { searchString } = this.props;

        return (
            <NavigationStyle>
                <NavigationInner role="navigation">
                    <Logo to="/" activeClassName="active">Home</Logo>
                    <EntryBox
                        searchString={searchString}
                        onEntryChange={data => this.props.typing(data)}
                        onEntrySave={q => this.props.redirect({ q })}
                    />
                </NavigationInner>
            </NavigationStyle>
        );
    }
}

const mapState = state => ({
    searchString: state.user.searchString.data,
});

const mapDispatch = (dispatch) => ({
    typing(searchString) {
        dispatch({
            type: types.TYPING_ASYNC.PENDING,
            searchString,
        });
    },
    redirect(params) {
        dispatch(redirectPage(params));
    },
});

export default (connect(mapState, mapDispatch)(Navigation));
