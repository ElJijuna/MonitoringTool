import { useCallback, useEffect, useMemo, useState, type FC, type ReactElement } from 'react';
import { usePathCommits } from '../../proxy-queries/usePathCommits';
import DropdownButton from 'antd/es/dropdown/dropdown-button';
import { FaCodeCommit } from 'react-icons/fa6';

export interface PathCommitsDropdownProps {
  defaultSelected?: string;
  user: string;
  repository: string;
  path: string;
  onChange?: (value: string) => void;
}

export const PathCommitsDropdown: FC<PathCommitsDropdownProps> = ({ user, repository, path, defaultSelected, onChange }): ReactElement => {
  const { data = [], isPending } = usePathCommits({ user, repository, path });
  const [selected, setSelected] = useState<string | undefined>(defaultSelected);
  const items = useMemo(() => data.map(({ sha, commit: { author: { date } } }) => ({ label: sha.slice(0, 7) + '\t\t-\t\t' + new Date(date), key: sha, icon: <FaCodeCommit size={16} />, disabled: selected === sha })), [data, selected]);

  const onClickCallback = useCallback((value: string) => {
      setSelected(value);
      onChange?.(value);
    }, []);
  
    useEffect(() => {
      if (!defaultSelected && items.length > 0) {
        setSelected(items[0].key);
        onChange?.(items[0].key)
      }
    }, [items]);
  
  return (
    <DropdownButton className="FontVariantTabular" menu={{ items, onClick: (e) => onClickCallback(e.key) }} placement="bottom" icon={<FaCodeCommit size={16} />} loading={isPending}>
      Version: <strong>{selected?.slice(0, 7)}</strong>
    </DropdownButton>
  );
}
