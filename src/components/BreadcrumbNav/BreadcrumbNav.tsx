
import { isMatch, Link, useMatches } from '@tanstack/react-router';
import { Breadcrumb } from 'antd';
import type { FC, ReactElement } from 'react';

export const BreadcrumbNav: FC = (): ReactElement => {
  const matches = useMatches();
  const matchesWithCrumbs = matches.filter((match) =>
    isMatch(match, 'loaderData.crumb'),
  );

  const items = matchesWithCrumbs.map(({ pathname, loaderData }) => {
    return {
      href: pathname,
      label: loaderData?.crumb,
    };
  });

  return (
    <Breadcrumb separator=">" style={{ margin: '16px 0' }}>
      {items.map(({ label, href }) => (<Breadcrumb.Item href={`${import.meta.env.BASE_URL}${href}`}>{label}</Breadcrumb.Item>))}
    </Breadcrumb>
  );
};
