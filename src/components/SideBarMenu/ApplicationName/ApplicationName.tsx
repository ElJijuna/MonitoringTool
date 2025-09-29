import type { PropsWithChildren } from 'react';

export interface ApplicationNameProps extends PropsWithChildren {
  collapsed?: boolean;
}

export const ApplicationName = ({ collapsed }: ApplicationNameProps) => {
  return (
    <div className="demo-logo-vertical" style={{ padding: '16px', color: 'white', display: 'inline-flex', gap: '1rem' }}>
      <div style={{ fontSize: '2rem' }}>MT</div>
      <div style={{ display: collapsed ? 'none' : 'flex', flexDirection: 'column', lineHeight: 1, gap: '0.2rem', alignItems: 'flex-end', justifyContent: 'center' }}>
        {!collapsed && <div style={{ textWrap: 'nowrap' }}>Monitoring Tool</div>}
        <div style={{ fontSize: '0.7rem', color: '#ccc' }}>v0.0.0</div>
      </div>
    </div>
  );
}
