import { fromJS } from 'immutable';
import {
  LOAD_TAPETE_VERMELHOS,
  LOAD_TAPETE_VERMELHOS_SUCCESS,
  LOAD_TAPETE_VERMELHOS_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: null,
  tapeteVermelho: [],
});

function tapeteVermelhoReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TAPETE_VERMELHOS:
      return state
        .set('loading',true);
    case LOAD_TAPETE_VERMELHOS_SUCCESS:
      return state
        .set('loading',false)
        .set('tapeteVermelhos', action.tapeteVermelho);
    case LOAD_TAPETE_VERMELHOS_ERROR:
      return state
        .set('loading',false)
        .set('error',action.error);
    default:
      return state;
  }
}

export default tapeteVermelhoReducer;
