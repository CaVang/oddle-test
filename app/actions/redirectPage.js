import { push } from 'connected-react-router';
import { perPage } from '../../config/app';

export function redirectPage({ q = '', page = 1 }) {
    return (dispatch) => {
        dispatch(push(`/search?per_page=${perPage}&q=${q}&page=${page}`));
    };
}
