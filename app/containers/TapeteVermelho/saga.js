import { takeLatest, call, put } from 'redux-saga/effects';
import request from '../../utils/request';
import { LOAD_TAPETE_VERMELHOS } from './constants';
import { loadTapeteVermelhosError, tapeteVermelhosLoaded } from './actions';

export default function* tapeteVermelhoData() {
  yield takeLatest(LOAD_TAPETE_VERMELHOS, getAllTapeteVermelho);
}
export function* getAllTapeteVermelho() {
  try {
    const tapeteVermelhos = yield call(request, 'http://localhost:3004/tapetevermelho');
    yield put(tapeteVermelhosLoaded(tapeteVermelhos));
  } catch (error) {
    yield put(loadTapeteVermelhosError(error));
  }
}