import { type FC } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { useOwnersStore } from '../../stores/owners.store';

interface AddOwnerFormData {
    username: string;
}

export interface OwnerManagerProps {
    open: boolean;
    onClose: () => void;
}

export const OwnerManager: FC<OwnerManagerProps> = ({ open, onClose }) => {
    const { owners, setOwners } = useOwnersStore();
    const [form] = Form.useForm<AddOwnerFormData>();

    const handleSubmit = (values: AddOwnerFormData) => {
        const newOwners = [...owners];
        if (!newOwners.includes(values.username)) {
            newOwners.push(values.username);
            setOwners(newOwners);
        }
        form.resetFields();
        onClose();
    };

    return (
        <Modal
            title="Manage Owners"
            open={open}
            onCancel={onClose}
            footer={null}
        >
            <Form
                form={form}
                onFinish={handleSubmit}
                layout="vertical"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        { required: true, message: 'Please input the username!' },
                        { pattern: /^[a-zA-Z0-9-]+$/, message: 'Username can only contain letters, numbers, and hyphens!' }
                    ]}
                >
                    <Input placeholder="Enter GitHub username" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Add Owner
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};
