import { PieChart } from '@mui/x-charts/PieChart';
import { useMemo, type FC, type PropsWithChildren, type ReactElement } from 'react';
import { useWebAuditReport } from '../../../proxy-queries/useWebAuditReport';
import { severityText } from '../../../utils/severity/severity-text';
import { severityColor } from '../../../utils/severity/severity-color';
import { CardContainer } from '../../CardContainer/CardContainer';

export interface WebAuditPieProps extends PropsWithChildren {
  user: string;
  repository: string;
  application: string;
  commit: string;
}

export const WebAuditPie: FC<WebAuditPieProps> = ({ user, repository, commit, application }): ReactElement => {
  const { data: report, isPending } = useWebAuditReport({ user, repository, commit, application });
  const data = useMemo(() => [{ label: severityText.critical, value: report?.metadata.vulnerabilities.critical ?? 0, color: severityColor.critical }, { label: severityText.high, value: report?.metadata.vulnerabilities.high ?? 0, color: severityColor.high }, { label: severityText.moderate, value: report?.metadata.vulnerabilities.moderate ?? 0, color: severityColor.moderate }, { label: severityText.low, value: report?.metadata.vulnerabilities.low ?? 0, color: severityColor.low }, { label: severityText.info, value: report?.metadata.vulnerabilities.info ?? 0, color: severityColor.info }], [report]);

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <CardContainer>
      <PieChart
        height={200}
        series={[
          {
            paddingAngle: 5,
            innerRadius: '60%',
            outerRadius: '90%',
            data,
          },
        ]}
      />
    </CardContainer>
  );
};
