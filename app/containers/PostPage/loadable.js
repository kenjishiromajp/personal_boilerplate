import React from 'react';
import Loadable from 'react-loadable';
import LoadingFullPage from '../../components/LoadingFullPage/index';

export default Loadable({
  loader: () => import('./index'),
  loading: () => <LoadingFullPage />,
});
