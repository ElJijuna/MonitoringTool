import { type FC, type PropsWithChildren, type ReactElement } from "react";
import { useWebAuditCWE } from "../hooks/useWebAuditCWE";

export const WebAuditCWETypes: FC = (): ReactElement => {
  const [data] = useWebAuditCWE();

  return <div>{JSON.stringify(data)}</div>;
}
