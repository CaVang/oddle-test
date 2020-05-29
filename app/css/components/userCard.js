import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const UserCardWrapper = styled(Link)`
  color: inherit;
  display: flex;
  justify-content: left;
  text-decoration: none;
  transition: color .2s ease;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: #269930;
  }
`;

export const UserCardInner = styled.div`
  margin-right: 15px;
  display: block;
`;

export const UserCardName = styled.p`
  font-size: 20px;
`;

export const UserCardAvatar = styled.div`
  color: 'inherit';
  display: 'flex';
  margin-right: 15px;
`;

export const UserCardAvatarInner = styled.div`
  position: 'relative';
  min-height: 60px;
  display: block;
`;

export const Image = styled.img`
  display: block;
  min-width: 100%;
  height: auto;
  border-radius: 8px;
`;
