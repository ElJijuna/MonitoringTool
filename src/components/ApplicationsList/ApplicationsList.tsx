import { createElement, type FC, type PropsWithChildren, type ReactElement } from 'react';
import { EyeOutlined, ForkOutlined, IssuesCloseOutlined, StarOutlined } from '@ant-design/icons';
import { List, Space } from 'antd';
import { Link } from '@tanstack/react-router';
import { useRepositories } from '../../proxy-queries/useRepositories';
import { LanguageIcon } from '../LanguageIcon/LanguageIcon';
import { CardContainer } from '../CardContainer/CardContainer';

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {createElement(icon)}
    {text}
  </Space>
);

export interface ApplicationsListProps extends PropsWithChildren {
  filter?: string;
}

export const ApplicationsList: FC<ApplicationsListProps> = ({ children, filter }: ApplicationsListProps): ReactElement => {
  const { data: applications, isPending } = useRepositories({ user: 'ElJijuna', filter });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (applications?.length === 0) {
    return <div>No applications found.</div>;
  }

  return (
    <CardContainer>
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
              avatar={<LanguageIcon language={item.language} size={32} />}
              title={<Link to={`/applications/${item.name}`}>{item.name}</Link>}
            />
            {item.description}
          </List.Item>
        )}
      />
      {children}
    </CardContainer>
  );
}
