import React from 'react';
import { PaginationStyle, PaginationInner, PaginationButton, DisablePaginationButton, StatusPage } from '../css/components/pagination';
import first from 'lodash/fp/first';
import flow from 'lodash/fp/flow';
import { perPage } from '../../config/app';

const getSearchQuery = flow(
    url => url.match(/(\?.+)/),
    first
);

function renderLinkRight(data) {
    if (!data) {
        return (
            <DisablePaginationButton
                to={{search: '#'}}
                rel={'next'}
            >
                <span>Next</span>
            </DisablePaginationButton>
        )
    }
    const search = getSearchQuery(data.url);

    return (
        <PaginationButton
            to={{search}}
            rel={'next'}
        >
            <span>Next</span>
        </PaginationButton>
    );
}

function renderLinkLeft(data) {
    if (!data) {
        return (
            <DisablePaginationButton
                to={{search: '#'}}
                rel={'prev'}
            >
                <span>Previous</span>
            </DisablePaginationButton>
        )
    }
    const search = getSearchQuery(data.url);

    return (
        <PaginationButton
            to={{search}}
            rel={'prev'}
        >
            <span>Previous</span>
        </PaginationButton>
    );
}

class Pagination extends React.Component {
    render() {
        const { prev, next, currentPage, totalCount } = this.props;
        const totalPage = Math.ceil(totalCount / perPage);
        return (
            <PaginationStyle>
                <PaginationInner>
                    {renderLinkLeft(prev)}
                    {
                        (isNaN(currentPage) || isNaN(totalPage)) && <StatusPage> 0 / 0 page</StatusPage>
                    }
                    {
                        !(isNaN(currentPage) || isNaN(totalPage)) && <StatusPage> {currentPage} / {totalPage} page{totalPage > 0 && 's'}</StatusPage>
                    }
                    {renderLinkRight(next)}
                </PaginationInner>
            </PaginationStyle>
        );
    }
}

export default Pagination;
