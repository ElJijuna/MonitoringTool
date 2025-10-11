import { createFileRoute } from '@tanstack/react-router';
import { useCallback, type ChangeEvent, type FC, type ReactElement } from 'react';
import { ApplicationsList } from '../../components/ApplicationsList/ApplicationsList';
import Title from 'antd/es/typography/Title';
import { Flex, Input } from 'antd';
import Layout, { Content, Footer, Header } from 'antd/es/layout/layout';
import { parseAsString, useQueryStates } from 'nuqs';

const Applications: FC = (): ReactElement => {
  const [filters, setFilters] = useQueryStates({ search: parseAsString.withDefault('') });
  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFilters({ search: e.target.value });
  }, []);

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
        <Flex vertical gap={10}>
          <Input.Search placeholder="Search application..." allowClear onChange={handleSearch} />
          <ApplicationsList filter={filters.search} />
        </Flex>
      </Content>
      <Footer />
    </Layout>
  );
};

export const Route = createFileRoute('/applications/')({
  component: Applications,
});

export default Applications;

