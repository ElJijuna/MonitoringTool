import { Modal } from 'antd';
import { useRegisterSW } from 'virtual:pwa-register/react';

function ReloadPrompt() {
    const {
        needRefresh: [needRefresh],
        updateServiceWorker,
    } = useRegisterSW({
        onRegisteredSW(swUrl: string, r) {
            console.log('SW Registered: ' + swUrl, r);
        },
        onRegisterError(error) {
            console.log('SW registration error', error);
        },
    });

    const handleOk = () => {
        updateServiceWorker(true);
    };

    return (
        <Modal
            title="New content available"
            open={needRefresh}
            onOk={handleOk}
            okText="Reload"
            cancelButtonProps={{ style: { display: 'none' } }}
            closable={false}
        >
            <p>New content is available, click on reload button to update.</p>
        </Modal>
    );
}

export default ReloadPrompt;
