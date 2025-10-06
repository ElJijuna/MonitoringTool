import { createElement, type FC, type PropsWithChildren, type ReactElement } from 'react';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { useApplications } from '../../proxy-queries/useApplications';
import { List, Space } from 'antd';
import { Link } from '@tanstack/react-router';

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {createElement(icon)}
    {text}
  </Space>
);

export interface ApplicationsListProps extends PropsWithChildren { }

export const ApplicationsList: FC<ApplicationsListProps> = ({ children }: ApplicationsListProps): ReactElement => {
  const { data: applications, isPending } = useApplications({ application: '' });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (applications?.length === 0) {
    return <div>No applications found.</div>;
  }

  return (
    <div>
      <List
        itemLayout='vertical'
        size='large'
        pagination={{ pageSize: 10 }}
        dataSource={applications}
        renderItem={(item) => (
          <List.Item key={item.id} actions={[
            <IconText icon={StarOutlined} text='156' key='list-vertical-star-o' />,
            <IconText icon={LikeOutlined} text='156' key='list-vertical-like-o' />,
            <IconText icon={MessageOutlined} text='2' key='list-vertical-message' />,
          ]}>
            <List.Item.Meta
              title={<Link to={`/applications/${item.name}`}>{item.name}</Link>}
              description={item.name}
            />
            Application Description
          </List.Item>
        )}
      />
      {children}
    </div>
  );
}
