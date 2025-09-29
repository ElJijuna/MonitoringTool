import { Pie } from '@ant-design/charts';
import { useMemo, type FC, type PropsWithChildren, type ReactElement } from 'react';
import { useWebAuditReport } from '../../../proxy-queries/useWebAuditReport';
import { severityText } from '../../../utils/severity/severity-text';
import { severityColor } from '../../../utils/severity/severity-color';

export interface WebAuditPieProps extends PropsWithChildren {}

export const WebAuditPie: FC<WebAuditPieProps> = ({ children }): ReactElement => {
  const { data: report, isPending } = useWebAuditReport({ application: 'react-base-app' });
  const data = useMemo(() => [{ type: severityText.critical, value: report?.metadata.vulnerabilities.critical ?? 0 }, { type: severityText.high, value: report?.metadata.vulnerabilities.high ?? 0 }, { type: severityText.moderate, value: report?.metadata.vulnerabilities.moderate ?? 0 }, { type: severityText.low, value: report?.metadata.vulnerabilities.low ?? 0 }, { type: severityText.info, value: report?.metadata.vulnerabilities.info ?? 0 }], [report]);
  const config = useMemo(() => ({
    data,
    angleField: 'value',
    colorField: 'type',
    innerRadius: 0.6,
    label: {
      text: 'value',
      style: {
        fontWeight: 'bold',
      },
    },
    legend: {
      color: {
        title: false,
        rowPadding: 5,
        align: 'center',
      },
    },
    annotations: [
      {
        type: 'text',
        style: {
          text: 'Vulnerabilities',
          x: '50%',
          y: '50%',
          textAlign: 'center',
          fontSize: 16,
          fontStyle: 'bold',
        },
      },
    ],
    scale: { 
      color: { 
        range: [
          severityColor.critical,
          severityColor.high,
          severityColor.moderate,
          severityColor.low,
          severityColor.info
        ],
      },
    },
    responsive: true,
    height: 300,
  }), [data]);

  if (isPending) {
    return <div>Loading...</div>;
  }

  return <Pie {...config} />;
};
