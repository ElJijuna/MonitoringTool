import { createElement, type FC, type PropsWithChildren, type ReactElement } from 'react';
import { EyeOutlined, ForkOutlined, IssuesCloseOutlined, StarOutlined } from '@ant-design/icons';
import { List, Space } from 'antd';
import { Link } from '@tanstack/react-router';
import { useRepositories } from '../../proxy-queries/useRepositories';

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {createElement(icon)}
    {text}
  </Space>
);

export interface ApplicationsListProps extends PropsWithChildren { }

export const ApplicationsList: FC<ApplicationsListProps> = ({ children }: ApplicationsListProps): ReactElement => {
  const { data: applications, isPending } = useRepositories({ user: 'ElJijuna' });

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
            <IconText icon={StarOutlined} text={item.stargazers_count.toString()} key='list-vertical-star-o' />,
            <IconText icon={ForkOutlined} text={item.forks_count.toString()} key='list-vertical-like-o' />,
            <IconText icon={IssuesCloseOutlined} text={item.open_issues_count.toString()} key='list-vertical-message' />,
            <IconText icon={EyeOutlined} text={item.watchers_count.toString()} key='list-vertical-message' />,
          ]}>
            <List.Item.Meta
              title={<Link to={`/applications/${item.name}`}>{item.name}</Link>}
            />
            {item.description}
          </List.Item>
        )}
      />
      {children}
    </div>
  );
}
