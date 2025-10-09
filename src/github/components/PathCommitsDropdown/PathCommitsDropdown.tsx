import { useMemo, useState, type FC, type ReactElement } from 'react';
import { usePathCommits } from '../../proxy-queries/usePathCommits';
import DropdownButton from 'antd/es/dropdown/dropdown-button';
import { FaCodeCommit } from 'react-icons/fa6';

export interface PathCommitsDropdownProps {
  user: string;
  repository: string;
  path: string;
}

export const PathCommitsDropdown: FC<PathCommitsDropdownProps> = ({ user, repository, path }): ReactElement => {
  const { data = [], isPending } = usePathCommits({ user, repository, path });
  const [selected, setSelected] = useState<string>();
  const items = useMemo(() => data.map(({ sha, commit: { author: { date } } }) => ({ label: sha.slice(0, 7) + '\t\t-\t\t' + new Date(date), key: sha, icon: <FaCodeCommit size={16} />, disabled: selected === sha })), [data, selected]);

  if (isPending) {
    return <>Loading...</>
  }

  return (
    <DropdownButton menu={{ items, onClick: (e) => { setSelected(e.key); } }} placement="bottomCenter" icon={<FaCodeCommit size={16} />}>
      Version: {selected?.slice(0, 7)}
    </DropdownButton>
  );
}
