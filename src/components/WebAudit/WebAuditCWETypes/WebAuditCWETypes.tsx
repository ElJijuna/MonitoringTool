import { useMemo, type FC, type ReactElement } from 'react';
import { useWebAuditCWE } from '../hooks/useWebAuditCWE';
import { BarChart } from '@mui/x-charts/BarChart';
import { CardContainer } from '../../CardContainer/CardContainer';

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};


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
  const randomBarColors = useMemo(() => categories.map(() => generateRandomColor()), [categories]);

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
            colors: randomBarColors,
          },
          tickLabelInterval: () => true,
          valueFormatter: (value) => value,
          tickLabelStyle: {
            angle: -90,
            textAnchor: 'end',
            fontSize: 8,
            textOverflow: 'clip',
          },
          labelStyle: {
            textOverflow: 'clip',
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
