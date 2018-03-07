import { createSelector } from 'reselect';

export const selectPosts = (state) => state.get('posts');
export const makeSelectPosts = () => createSelector(
  selectPosts,
  (postState) => postState.get('posts')
);
