import { useMemo, type FC, type ReactElement } from 'react';
import { useWebAuditCWE } from '../hooks/useWebAuditCWE';
import { BarChart } from '@mui/x-charts/BarChart';
import { CardContainer } from '../../CardContainer/CardContainer';
import { severityColor } from '../../../utils/severity/severity-color';

export interface WebAuditCWETypesProps {
  user: string;
  repository: string;
  application: string;
  commit: string;
}

export const WebAuditCWETypes: FC<WebAuditCWETypesProps> = ({ user, repository, application, commit }: WebAuditCWETypesProps): ReactElement => {
  const [data] = useWebAuditCWE({ user, repository, application, commit });
  const values = useMemo<number[]>(() => Object.values(data.map(({ total }) => total)), [data]);
  const categories = useMemo(() => data.map(({ code }) => code), [data]);
  const colors = useMemo(() => data.map(({ severity }) => severityColor[severity]), [data]);

  return (
    <CardContainer>
      <BarChart
        hideLegend
        borderRadius={4}
        height={200}
        series={[
          {
            data: values,
            label: 'CWE',
            type: 'bar',
          },
        ]}
        yAxis={[{
          offset: 4,
          max: Math.max(...values),
          domainLimit: 'strict',
        }]}
        xAxis={[{
          scaleType: 'band',
          data: categories,
          colorMap: {
            type: 'ordinal',
            values: categories,
            colors,
          },
          
          offset: 4,
        }]}
        margin={{ bottom: 4 }}
        sx={{
          '.MuiChartsAxis-root .MuiChartsAxis-line': {
            stroke: '#ccc',
          },
        }}
      />
    </CardContainer>
  );
};
