import { createSelector } from 'reselect';
import transformObjectToArray from '../../utils/transformObjectToArray';

export const selectComments = (state) => state.get('comments');

export const makeSelectCommentsLoading = () =>
  createSelector(selectComments, (commentState) => commentState.get('loading'));

export const makeSelectError = () =>
  createSelector(selectComments, (commentState) => commentState.get('error'));

export const makeSelectComments = () =>
  createSelector(selectComments, (commentState) => {
    const comments = commentState.get('comments');
    return comments ? transformObjectToArray(comments) : null;
  });
