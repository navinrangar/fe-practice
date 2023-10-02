import { getUsers } from '../apis/apis';
import { call } from 'redux-saga/effects'

export function* getUsersSaga(): Generator {
        yield call(getUsers)
}