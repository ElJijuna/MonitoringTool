
import { isMatch, useMatches } from '@tanstack/react-router';
import { Breadcrumb } from 'antd';
import type { FC, ReactElement } from 'react';
import { FaAnglesRight } from 'react-icons/fa6';

export const BreadcrumbNav: FC = (): ReactElement => {
  const matches = useMatches();
  const matchesWithCrumbs = matches.filter((match) =>
    isMatch(match, 'loaderData.crumb'),
  );

  const items = matchesWithCrumbs.map(({ pathname, loaderData }) => {
    return {
      href: `${import.meta.env.BASE_URL}${pathname}`,
      title: loaderData?.crumb,
    };
  });

  return (
    <Breadcrumb separator={<FaAnglesRight size={8} />} style={{ margin: '16px 0' }} items={items} />
  );
};
