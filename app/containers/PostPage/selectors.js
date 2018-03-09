import { createSelector } from 'reselect';
import transformObjectToArray from '../../utils/transformObjectToArray';

export const selectPosts = (state) => state.get('posts');
export const makeSelectPosts = () => createSelector(
  selectPosts,
  (postState) => {
    const posts = postState.get('posts');
    return (posts === null) ? null : transformObjectToArray(posts);
  }
);
