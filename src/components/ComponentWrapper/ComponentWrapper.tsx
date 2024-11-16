import { Suspense, memo, ComponentType } from 'react';
import { Loader } from '@ui';

export const CW = <P extends object>(Component: ComponentType<P>) => {
  const WrappedComponent = memo((props: P) => (
    <Suspense
      fallback={
        <Loader
          className='min-h-[100vh] loading-lg'
        />
      }
    >
      <Component {...props} />
    </Suspense>
  ));

  WrappedComponent.displayName = `withSuspense(${Component.displayName || Component.name})`;
  return WrappedComponent;
};
