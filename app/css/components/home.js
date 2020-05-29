import styled from "@emotion/styled";

export const Results = styled.ul`
    list-style: none;
    margin: 0 auto;
    padding: 0;
    display: flex!important;
    flex-wrap: wrap!important;
    padding-left: 3px;
    max-width: 1020px;
`

export const Item = styled.li`
    flex-basis: calc(100% / 3);
    margin-bottom: 15px;
    display: list-item;
    text-align: -webkit-match-parent;
`
