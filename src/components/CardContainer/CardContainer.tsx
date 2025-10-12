import { theme } from 'antd';
import type { FC, PropsWithChildren, ReactElement } from 'react';

export interface CardContainerProps extends PropsWithChildren {
  style?: React.CSSProperties;
}

export const CardContainer: FC<CardContainerProps> = ({ children, style = { minHeight: 'auto' } }): ReactElement => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  return (
    <div
      className="CardContainer"
      style={{
        ...style,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >{children}</div>
  )
}
