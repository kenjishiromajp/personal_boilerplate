import { createSelector } from 'reselect';

export const selectTapeteVermelhos = (state) => state.get('tapeteVermelhos');
export const makeSelectTapeteVermelhos = () => createSelector(
  selectTapeteVermelhos,
  (tapeteVermelhoState) => tapeteVermelhoState.get('tapeteVermelhos')
);
