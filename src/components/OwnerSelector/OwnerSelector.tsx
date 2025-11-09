import { Select, Space, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState, type FC, type ReactElement } from 'react';
import { useOwnersStore } from '../../stores/owners.store';
import { OwnerManager } from '../OwnerManager/OwnerManager';

export const OwnerSelector: FC = (): ReactElement => {
    const { owners, selectedOwner, setSelectedOwner } = useOwnersStore();
    const [isManagerOpen, setIsManagerOpen] = useState(false);

    const handleChange = (username: string) => {
        setSelectedOwner(username);
    };

    return (
        <Space.Compact style={{ width: '100%' }}>
            <Select
                style={{ width: 'calc(100% - 32px)' }}
                value={selectedOwner}
                onChange={handleChange}
                optionLabelProp="label"
                optionFilterProp="label"
                showSearch
                options={owners.map(owner => ({
                    value: owner,
                    label: owner,
                }))}
                listHeight={256}
                maxTagCount={1}
                placement="bottomLeft"
                popupMatchSelectWidth={false}
                dropdownStyle={{
                    minWidth: '200px',
                    maxWidth: '300px'
                }}
            />
            <Button
                icon={<PlusOutlined />}
                onClick={() => setIsManagerOpen(true)}
            />
            <OwnerManager
                open={isManagerOpen}
                onClose={() => setIsManagerOpen(false)}
            />
        </Space.Compact>);
};
