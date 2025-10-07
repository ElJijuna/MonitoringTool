import { createFileRoute, Outlet, useParams } from '@tanstack/react-router';
import { Flex, Layout } from 'antd';
import Breadcrumb from 'antd/es/breadcrumb';
import { Content, Header, Footer } from 'antd/es/layout/layout';
import theme from 'antd/es/theme';
import Title from 'antd/es/typography/Title';
import Text from 'antd/es/typography/Text';
import { FaReact } from 'react-icons/fa6';
import type { FC, ReactElement } from 'react';

const Application: FC = (): ReactElement => {
  const { appId } = useParams({
    strict: true,
    from: undefined
  });
  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
            <Text>Description app</Text>
          </Flex>
        </Flex>
      </Header>
      <Content style={{ padding: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }} items={[{ title: 'Parent' }, { title: 'Child' }]} />
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
};

export const Route = createFileRoute('/applications/$appId')({
  component: Application,
});

export default Application;

