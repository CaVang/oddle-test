import "regenerator-runtime/runtime";
import { all, call, put, takeLatest } from 'redux-saga/effects'
import * as types from '../../types';
import api from '../apiGithub';
import { createAction } from '../utilities'

const actions = {
    pending: () => createAction(types.SEARCH_USER_ASYNC.PENDING),
    success: (resp) => createAction(types.SEARCH_USER_ASYNC.SUCCESS, { payload: resp }),
    error: (error) => createAction(types.SEARCH_USER_ASYNC.ERROR, { error })
}

function* searchUsers(action) {
    const { payload: { search } } = action;

    try {
        const resp = yield call(api.searchUsers, search)
        yield put(actions.success(resp))
    } catch (e) {
        yield put(actions.error(e))
    }
}

export default function* () {
    yield all([
        takeLatest(types.SEARCH_USER_ASYNC.PENDING, searchUsers)
    ])
}
