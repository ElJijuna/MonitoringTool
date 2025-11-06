import { Select } from 'antd';
import { useOwner } from '../../domain/owner/owner.store';

export const OwnerSelector = () => {
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
                // Add more options here as needed
            ]}
        />
    );
};
