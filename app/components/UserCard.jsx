import React from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';

import { UserCardWrapper, UserCardInner, UserCardName, UserCardAvatar, UserCardAvatarInner, Image } from '../css/components/userCard';

class UserCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        };
    }
    render() {
        const { login, avatar_url } = this.props;

        return (
            <UserCardWrapper to={`user?username=${login}`}>
                <UserCardInner>
                    <UserCardAvatar>
                        <UserCardAvatarInner>
                            <Image
                                alt=""
                                width={90}
                                onLoad={() => (this.setState({ loaded: true }))}
                                src={`${avatar_url}&s=${180}`}
                            />
                            {
                                !this.state.loaded && <Loader />
                            }
                        </UserCardAvatarInner>
                    </UserCardAvatar>
                </UserCardInner>
                <UserCardName>{login}</UserCardName>
            </UserCardWrapper>
        );
    }
}

UserCard.propTypes = {
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
};

export default UserCard;
