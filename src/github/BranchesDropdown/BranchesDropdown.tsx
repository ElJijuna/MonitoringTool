import { useCallback, useEffect, useMemo, useState, type FC, type ReactElement } from 'react';
import { useBranches } from '../proxy-queries/useBranches';
import DropdownButton from 'antd/es/dropdown/dropdown-button';
import { FaCodeBranch } from 'react-icons/fa6';

export interface BranchesDropdownPops {
  defaultSelected?: string;
  user: string;
  repository: string;
  onChange?: (value: string) => void;
}

export const BranchesDropdown: FC<BranchesDropdownPops> = ({ user, repository, defaultSelected, onChange }): ReactElement => {
  const { data = [], isPending } = useBranches({ user, repository });
  const [selected, setSelected] = useState<string | undefined>(defaultSelected);
  const items = useMemo(() => data.map(({ name }) => ({ label: name, key: name, icon: <FaCodeBranch size={16} />, disabled: selected === name })), [data, selected]);

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
    <DropdownButton className="FontVariantTabular" menu={{ items, onClick: (e) => onClickCallback(e.key) }} placement="bottom" icon={<FaCodeBranch size={16} />} loading={isPending}>
      Branch: <strong>{selected?.slice(0, 7)}</strong>
    </DropdownButton>
  );
}
