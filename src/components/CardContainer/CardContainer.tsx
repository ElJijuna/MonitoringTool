import { theme } from 'antd';
import type { FC, PropsWithChildren, ReactElement } from 'react';

export interface CardContainerProps extends PropsWithChildren {
  minHeight?: string | number,
}

export const CardContainer: FC<CardContainerProps> = ({ children, minHeight = 100 }): ReactElement => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  return (
    <div
      className="CardContainer"
      style={{
        minHeight,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >{children}</div>
  )
}
