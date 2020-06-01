import "regenerator-runtime/runtime";
import { all, call, put, takeLatest } from 'redux-saga/effects'
import * as types from '../../types';
import api from '../apiGithub';
import { createAction } from '../utilities'

const actions = {
    pending: () => createAction(types.USER_DETAIL_ASYNC.PENDING),
    success: (resp) => createAction(types.USER_DETAIL_ASYNC.SUCCESS, { payload: resp }),
    error: (error) => createAction(types.USER_DETAIL_ASYNC.ERROR, { error })
}

function* searchUsers(action) {
    const { userName } = action;
    try {
        const profile = yield call(api.getProfile, { userName })
        const repos = yield call(api.getProfile, { userName, uri: 'repos' })
        const followersList = yield call(api.getProfile, { userName, uri: 'followers' })
        console.log({ ...profile, repos, followersList })
        yield put(actions.success({ ...profile, repos, followersList }))
    } catch (e) {
        yield put(actions.error(e))
    }
}

export default function* () {
    yield all([
        takeLatest(types.USER_DETAIL_ASYNC.PENDING, searchUsers)
    ])
}
