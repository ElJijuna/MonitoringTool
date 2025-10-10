import { createFileRoute, Link, Outlet, useParams } from '@tanstack/react-router';
import { Flex, Layout } from 'antd';
import { Content, Header, Footer } from 'antd/es/layout/layout';
import theme from 'antd/es/theme';
import Title from 'antd/es/typography/Title';
import Text from 'antd/es/typography/Text';
import { FaReact } from 'react-icons/fa6';
import type { FC, ReactElement } from 'react';
import { BreadcrumbNav } from '../../../components/BreadcrumbNav/BreadcrumbNav';
import { useRepository } from '../../../github/proxy-queries/useRepository';

export const ApplicationRoute: FC = (): ReactElement => {
  const { appId } = useParams({
    strict: true,
    from: undefined
  });
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { data, } = useRepository({ user: 'ElJijuna', repository: appId });

  return (
    <Layout>
      <Header style={{
        background: colorBgContainer, padding: '0 16px', position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}>
        <Flex align='center' style={{ height: '100%', gap: 10 }}>
          <FaReact size={46} />
          <Flex vertical>
            <Title level={3} style={{ margin: 0 }}>{appId}</Title>
            <Text>{data?.description}</Text>
          </Flex>
        </Flex>
      </Header>
      <Content style={{ padding: '0 16px' }}>
        <BreadcrumbNav />
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
}

export const Route = createFileRoute('/applications/$appId')({
  component: () => <ApplicationRoute />,
  loader: ({ params }) => {
    const { appId } = params;

    return {
      crumb: appId,
    }
  },
});
