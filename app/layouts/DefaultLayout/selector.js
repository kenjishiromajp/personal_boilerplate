import { createSelector } from 'reselect';
import { selectGlobal } from '../../containers/App/selectors';

export const makeSelectSidebarOpened = () =>
  createSelector(selectGlobal, (globalState) =>
    globalState.get('sidebarOpened'));
