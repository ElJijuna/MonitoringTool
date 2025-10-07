import { type FC, type ReactElement } from "react";
import { useWebAuditCWE } from "../hooks/useWebAuditCWE";

export interface WebAuditCWETypesProps {
  application: string;
}

export const WebAuditCWETypes: FC<WebAuditCWETypesProps> = ({ application }: WebAuditCWETypesProps): ReactElement => {
  const [data] = useWebAuditCWE({ application });

  return <div>{JSON.stringify(data)}</div>;
}
