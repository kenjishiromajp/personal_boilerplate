import { LOAD_TAPETE_VERMELHOS, LOAD_TAPETE_VERMELHOS_ERROR, LOAD_TAPETE_VERMELHOS_SUCCESS } from './constants';

export function loadTapeteVermelhos() {
  return {
    type: LOAD_TAPETE_VERMELHOS,
  };
}

export function tapeteVermelhosLoaded(tapeteVermelhos) {
  return {
    type: LOAD_TAPETE_VERMELHOS_SUCCESS,
    tapeteVermelhos,
  };
}


export function loadTapeteVermelhosError(error) {
  return {
    type: LOAD_TAPETE_VERMELHOS_ERROR,
    error,
  };
}
