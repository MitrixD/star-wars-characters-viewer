import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const withRouter = (component: () => React.ReactNode) => {
  const WrappedComponent = () => <BrowserRouter>{component()}</BrowserRouter>;

  WrappedComponent.displayName = `withRouter(${getDisplayName(component)})`;

  return WrappedComponent;
};

const getDisplayName = (component: () => React.ReactNode) => {
  return component.name || 'Component';
};
