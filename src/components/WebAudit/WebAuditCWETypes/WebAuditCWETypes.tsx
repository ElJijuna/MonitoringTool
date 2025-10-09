import { useMemo, type FC, type ReactElement } from 'react';
import { useWebAuditCWE } from '../hooks/useWebAuditCWE';
import { theme } from 'antd';
import { BarChart } from '@mui/x-charts/BarChart';

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};


export interface WebAuditCWETypesProps {
  application: string;
}

export const WebAuditCWETypes: FC<WebAuditCWETypesProps> = ({ application }: WebAuditCWETypesProps): ReactElement => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [data] = useWebAuditCWE({ application });
  const values = useMemo<number[]>(() => Object.values(data.map(({ total }) => total)), [data]);
  const categories = useMemo(() => data.map(({ code }) => code), [data]);
  const randomBarColors = useMemo(() => categories.map(() => generateRandomColor()), [categories]);

  return (
    <div
      style={{
        padding: 10,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
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
    </div>
  );
};
