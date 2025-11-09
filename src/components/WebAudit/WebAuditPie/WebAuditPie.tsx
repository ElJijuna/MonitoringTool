import { ResponsivePie } from '@nivo/pie';
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

export const WebAuditPie: FC<Partial<WebAuditPieProps>> = ({ user, repository, commit, application }): ReactElement => {
  const { data: report, isPending } = useWebAuditReport({ user, repository, commit, application });
  const data = useMemo(() => [
    { id: 'critical', label: severityText.critical, value: report?.metadata.vulnerabilities.critical ?? 0, color: severityColor.critical },
    { id: 'high', label: severityText.high, value: report?.metadata.vulnerabilities.high ?? 0, color: severityColor.high },
    { id: 'moderate', label: severityText.moderate, value: report?.metadata.vulnerabilities.moderate ?? 0, color: severityColor.moderate },
    { id: 'low', label: severityText.low, value: report?.metadata.vulnerabilities.low ?? 0, color: severityColor.low },
    { id: 'info', label: severityText.info, value: report?.metadata.vulnerabilities.info ?? 0, color: severityColor.info }
  ], [report]);

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <CardContainer>
      <div style={{ height: 280 }}>
        <ResponsivePie
          data={data}
          margin={{ top: 10, right: 140, bottom: 10, left: 10 }}
          innerRadius={0.65}
          padAngle={2}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
          enableArcLinkLabels={false}
          arcLabelsSkipAngle={15}
          arcLabelsTextColor="#ffffff"
          colors={{ datum: 'data.color' }}
          legends={[
            {
              anchor: 'right',
              direction: 'column',
              justify: false,
              translateX: 50,
              translateY: 0,
              itemsSpacing: 4,
              itemWidth: 100,
              itemHeight: 20,
              itemTextColor: '#999',
              itemDirection: 'left-to-right',
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: 'circle',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemTextColor: '#000'
                  }
                }
              ]
            }
          ]}
        />
      </div>
    </CardContainer>
  );
};
