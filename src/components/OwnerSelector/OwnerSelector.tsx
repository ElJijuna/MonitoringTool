import { Select } from 'antd';
import { useOwner } from '../../domain/owner/owner.store';
import type { FC, ReactElement } from 'react';

export const OwnerSelector: FC = (): ReactElement => {
    const { owner, setOwner } = useOwner();

    const handleChange = (username: string) => {
        setOwner({
            username,
            repositories: {
                monitoringTool: 'MonitoringTool',
                database: 'MonitoringTool-DB'
            }
        });
    };

    return (
        <Select
            style={{ width: 200 }}
            value={owner?.username}
            onChange={handleChange}
            options={[
                { value: 'ElJijuna', label: 'ElJijuna' },
                { value: 'ismae147', label: 'ismae147' },
                { value: 'hashtagthis', label: 'hashtagthis' },
                { value: 'renatomendozac', label: 'renatomendozac' },
                // Add more options here as needed
            ]}
        />
    );
};
