import { useEffect, useMemo, useRef, type FC, type ReactElement } from 'react';
import { useWebAuditCWE } from '../hooks/useWebAuditCWE';
import { CardContainer } from '../../CardContainer/CardContainer';
import { severityColor } from '../../../utils/severity/severity-color';
import { Chart } from 'chart.js';
import { WordCloudController, WordElement } from 'chartjs-chart-wordcloud';

Chart.register(WordCloudController, WordElement);


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

  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef(null); // 👉 referencia al gráfico

  useEffect(() => {
    const ctx = chartRef.current?.getContext('2d');

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: 'wordCloud',
      data: {
        labels: categories,
        datasets: [{
          label: 'Word Cloud',
          data: values
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Word Cloud Example'
        }
      }
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return <CardContainer><canvas ref={chartRef} width={400} height={400} /></CardContainer>;
};
