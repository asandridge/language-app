import React, { lazy, Suspense } from 'react';

const LazyLanguageSelection = lazy(() => import('./LanguageSelection'));

const LanguageSelection = (props) => (
  <Suspense fallback={null}>
    <LazyLanguageSelection {...props} />
  </Suspense>
);

export default LanguageSelection;
