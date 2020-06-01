import { all, put, takeLatest } from 'redux-saga/effects'
import * as types from '../../types';
import { createAction } from '../utilities'

const actions = {
    pending: () => createAction(types.TYPING_ASYNC.PENDING),
    success: (searchString) => createAction(types.TYPING_ASYNC.SUCCESS, { searchString }),
}

function* typing(action) {
    const { searchString } = action;

    yield put(actions.success(searchString))
}

export default function* () {
    yield all([
        takeLatest(types.TYPING_ASYNC.PENDING, typing)
    ])
}
