import { Footer } from 'antd/es/layout/layout';
import type { FC } from 'react';

export const ApplicationFooter: FC = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      Monitoring Tool ©{new Date().getFullYear()}
    </Footer>
  );
}
