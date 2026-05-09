import React from 'react';

export const Link = React.forwardRef(function Link({ to, ...props }, ref) {
  return <a href={to} ref={ref} {...props} />;
});

export const useStaticQuery = () => ({
  site: { siteMetadata: { title: '', description: '', siteUrl: '' } },
});

export const graphql = () => '';

export const StaticQuery = ({ render }) => (render ? render({}) : null);

export const navigate = () => {};

export const withPrefix = (p) => p;

export const withAssetPrefix = (p) => p;
