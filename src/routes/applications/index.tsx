import { createFileRoute } from '@tanstack/react-router';
import type { FC, ReactElement } from 'react';
import { ApplicationsList } from '../../components/ApplicationsList/ApplicationsList';
import Title from 'antd/es/typography/Title';
import { Flex, theme } from 'antd';
import Layout, { Content, Footer, Header } from 'antd/es/layout/layout';

const Applications: FC = (): ReactElement => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ background: 'transparent', padding: '0 16px' }}>
        <Flex align="center" style={{ height: '100%' }}>
          <Flex vertical>
            <Title level={3} style={{ margin: 0 }}>Applications</Title>
          </Flex>
        </Flex>
      </Header>
      <Content style={{ padding: '0 16px' }}>
        <div
          style={{
            padding: 10,
            minHeight: 360,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <ApplicationsList />
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export const Route = createFileRoute('/applications/')({
  component: Applications,
});

export default Applications;

