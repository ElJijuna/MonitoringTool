import { createFileRoute, Outlet, useParams } from '@tanstack/react-router';
import { Flex, Layout } from 'antd';
import Breadcrumb from 'antd/es/breadcrumb';
import { Content, Header, Footer } from 'antd/es/layout/layout';
import theme from 'antd/es/theme';
import Title from 'antd/es/typography/Title';
import Text from 'antd/es/typography/Text';
import type { FC, ReactElement } from 'react';

const Application: FC = (): ReactElement => {
  const { appId } = useParams({
    strict: true,
    from: undefined
  });
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ background: colorBgContainer, padding: '0 16px' }}>
        <Flex align="center" style={{ height: '100%' }}>
          <Flex vertical>
            <Title level={3} style={{ margin: 0 }}>{appId}</Title>
            <Text>Description app</Text>
          </Flex>
        </Flex>
      </Header>
      <Content style={{ padding: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }} items={[{ title: 'Parent' }, { title: 'Child' }]} />
        <div
          style={{
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export const Route = createFileRoute('/applications/$appId')({
  component: Application,
});

export default Application;

