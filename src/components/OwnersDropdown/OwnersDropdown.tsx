import { useState, type FC, type ReactElement } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, type DropdownProps, type MenuProps } from 'antd';

export interface OwnersDropdownProps {
  defaultSelected?: string;
  onChange?: (value: string) => void;
}

export const OwnersDropdown: FC<OwnersDropdownProps> = ({ }): ReactElement => {
  const [open, setOpen] = useState(false);

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    if (e.key === '3') {
      setOpen(false);
    }
  };

  const handleOpenChange: DropdownProps['onOpenChange'] = (nextOpen, info) => {
    if (info.source === 'trigger' || nextOpen) {
      setOpen(nextOpen);
    }
  };

  const items: MenuProps['items'] = [
    {
      label: 'ElJijuna',
      key: 'ElJijuna',
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
        onClick: handleMenuClick,
      }}
      onOpenChange={handleOpenChange}
      open={open}
       overlayStyle={{ color: 'white' }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {items[0]?.key}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
}
