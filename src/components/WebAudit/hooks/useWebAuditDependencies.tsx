import { useWebAuditReport } from '../../../proxy-queries/useWebAuditReport';

export interface UseWebAuditDependenciesProps {
  user: string;
  repository: string;
  application: string;
  commit: string;
}

export const useWebAuditDependencies = ({ user, repository, application, commit }: UseWebAuditDependenciesProps) => {
  const { data: report } = useWebAuditReport({ user, repository, application, commit });
  const data = report?.dependencies;

  return [data] as const
}
