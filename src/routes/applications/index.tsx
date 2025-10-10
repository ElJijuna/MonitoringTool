import { createFileRoute, Outlet } from '@tanstack/react-router';
import type { FC, ReactElement } from 'react';
import { ApplicationsList } from '../../components/ApplicationsList/ApplicationsList';
import Title from 'antd/es/typography/Title';
import { Flex } from 'antd';
import Layout, { Content, Footer, Header } from 'antd/es/layout/layout';
import { CardContainer } from '../../components/CardContainer/CardContainer';

const Applications: FC = (): ReactElement => {
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
        <CardContainer>
          <ApplicationsList />
        </CardContainer>
      </Content>
      <Footer />
    </Layout>
  );
};

export const Route = createFileRoute('/applications/')({
  component: Applications,
});

export default Applications;

