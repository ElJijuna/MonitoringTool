import { useMemo, type FC, type ReactElement } from 'react';
import { useWebAuditCWE } from '../hooks/useWebAuditCWE';
import { ResponsiveBar } from '@nivo/bar';
import { CardContainer } from '../../CardContainer/CardContainer';
import { severityColor } from '../../../utils/severity/severity-color';

export interface WebAuditCWETypesProps {
  user: string;
  repository: string;
  application: string;
  commit: string;
}

export const WebAuditCWETypes: FC<Partial<WebAuditCWETypesProps>> = ({ user, repository, application, commit }: Partial<WebAuditCWETypesProps>): ReactElement => {
  const [data] = useWebAuditCWE({ user, repository, application, commit });
  
  const chartData = useMemo(() => 
    data.map(({ code, total, severity }) => ({
      code,
      total,
      severity,
      color: severityColor[severity]
    })), 
    [data]
  );

  return (
    <CardContainer>
      <div style={{ height: '280px' }}>
        <ResponsiveBar
          data={chartData}
          keys={['total']}
          indexBy="code"
          margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
          padding={0.1}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={({ data }) => data.color}
          borderRadius={4}
          axisBottom={{
            tickSize: 0,
            tickPadding: 4,
            tickRotation: 0,
          }}
          axisLeft={{
            tickSize: 0,
            tickPadding: 4,
            tickRotation: 0,
          }}
          enableGridY={false}
          enableLabel={false}
          role="application"
          ariaLabel="CWE vulnerability chart"
          theme={{
            axis: {
              ticks: {
                text: {
                  fontSize: 8,
                }
              }
            }
          }}
        />
      </div>
    </CardContainer>
  );
};
