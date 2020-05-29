import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationStyle = styled.div`
  display: flex;
  background-color: #f4f4f4;
  border-bottom: 1px solid #aaa;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, .2);
  margin-bottom: 20px;
`;

export const NavigationInner = styled.nav`
  margin: 0 auto;
  width: 50%;
  align-items: center;
`;

export const Item = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 16px 32px;
  color: var(--colorBlack);
  background: transparent;
  border: none;
  font-family: var(--fontMontserrat);
  font-size: 16px;
  cursor: pointer;
  
  &.active {
    color: var(--colorDodgerBlue);
  }
`;

export const Logo = styled(Item)`
  font-size: var(--fontHuge);
`;
