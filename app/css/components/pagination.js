import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const PaginationStyle = styled.div`
    display: flex;
    flex-justify: center;
    margin-bottom: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
`;

export const PaginationInner = styled.div`
    margin: 0 auto;
    width: 50%;
    align-items: center;
    display: flex;
`;

export const PaginationButton = styled(Link)`
  display: flex;
  align-items: center;
  color: inherit;
  flex-row: reverse;
  width: 33%;
  justify-content: center;
`;

export const DisablePaginationButton = styled(Link)`
  display: flex;
  align-items: center;
  color: inherit;
  flex-row: reverse;
  width: 33%;
  justify-content: center;
  pointer-events: none;
  opacity: 0;
`;

export const StatusPage = styled.span`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  flex-row: reverse;
  width: 33%;
  justify-content: center;
`;
