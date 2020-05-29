import React from 'react';
import { NavigationStyle, Logo, NavigationInner } from '../css/components/navigation';
import { redirectPage, typing } from "../actions/users";
import EntryBox from "../components/EntryBox";
import { useDispatch, useSelector } from "react-redux";

const Navigation = () => {
    const { searchString } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const dispatchTyping = (data) => dispatch(typing(data));
    const dispatchCreateTopic = (q) => dispatch(redirectPage({ q }));

    return (
        <NavigationStyle>
            <NavigationInner role="navigation">
                <Logo to="/" activeClassName="active">Home</Logo>
                <EntryBox
                    topic={searchString}
                    onEntryChange={dispatchTyping}
                    onEntrySave={dispatchCreateTopic}
                />
            </NavigationInner>
        </NavigationStyle>
    );
};

export default Navigation;
