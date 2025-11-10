import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { type FC, type ReactElement } from 'react';
import { Card, Avatar, Layout, Row, Col, Typography, Space, Statistic } from 'antd';
import { useOwnersStore } from '../stores/owners.store';
import { useOwner } from '../proxy-queries/useOwner';
import { GithubOutlined, GlobalOutlined, AppstoreOutlined } from '@ant-design/icons';

const OwnerCard: FC<{ username: string }> = ({ username }): ReactElement => {
  const navigate = useNavigate();
  const { setSelectedOwner } = useOwnersStore();
  const { data: owner, isLoading } = useOwner({ username });

  const handleApplicationsClick = () => {
    setSelectedOwner(username);
    navigate({ to: '/applications' });
  };

  if (isLoading || !owner) {
    return <Card loading={true} />;
  }

  return (
    <Card
      style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}
      bodyStyle={{ flex: 1 }}
      hoverable
      actions={[
        <AppstoreOutlined key="apps" onClick={handleApplicationsClick} />,
        <GithubOutlined key="github" onClick={() => window.open(`https://github.com/${username}`, '_blank')} />,
        owner.blog && <GlobalOutlined key="website" onClick={() => window.open(owner.blog!, '_blank')} />
      ].filter(Boolean)}
    >
      <Card.Meta
        avatar={<Avatar size={64} src={owner.avatar_url} />}
        title={
          <Typography.Link onClick={handleApplicationsClick}>
            <Typography.Title level={4} style={{ margin: 0 }}>{owner.name || owner.login}</Typography.Title>
          </Typography.Link>
        }
        description={
          <Space direction="vertical">
            {owner.bio && <Typography.Text type="secondary">{owner.bio}</Typography.Text>}
            {owner.location && <Typography.Text type="secondary">{owner.location}</Typography.Text>}
            <Row gutter={16}>
              <Col span={8}>
                <Statistic title="Repos" value={owner.public_repos} />
              </Col>
              <Col span={8}>
                <Statistic title="Followers" value={owner.followers} />
              </Col>
              <Col span={8}>
                <Statistic title="Following" value={owner.following} />
              </Col>
            </Row>
          </Space>
        }
      />
    </Card>
  );
};

const Index: FC = (): ReactElement => {
  const { owners } = useOwnersStore();

  return (
    <Layout style={{ padding: '24px' }}>
      <Row
        gutter={[16, 16]}
        justify="start"
        align="stretch"
      >
        {owners.map((username) => (
          <Col
            key={username}
            xs={24}    // Móvil: 1 card por fila
            sm={12}    // Tablet pequeña: 2 cards por fila
            md={12}    // Tablet: 2 cards por fila
            lg={8}     // Desktop: 3 cards por fila
            xl={6}     // Desktop grande: 4 cards por fila
            xxl={4}    // Pantallas muy grandes: 6 cards por fila
            style={{ display: 'flex' }}
          >
            <OwnerCard username={username} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export const Route = createFileRoute('/')({
  component: Index,
});

export default Index;
