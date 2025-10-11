import { Skeleton } from 'antd';
import { lazy, Suspense, type CSSProperties, type FC, type ReactElement } from 'react';

const SiTypescript = lazy(() =>
  import('react-icons/si').then((mod) => ({ default: mod.SiTypescript }))
);

const SiJavascript = lazy(() =>
  import('react-icons/si').then((mod) => ({ default: mod.SiJavascript }))
);

const SiGnubash = lazy(() =>
  import('react-icons/si').then((mod) => ({ default: mod.SiGnubash }))
);

const SiPhp = lazy(() =>
  import('react-icons/si').then((mod) => ({ default: mod.SiPhp }))
);

export interface LanguageIconProps {
  size?: number;
  language?: string | null;
  style?: CSSProperties;
}

export const LanguageIcon: FC<LanguageIconProps> = ({ size = 46, language, style = {} }): ReactElement => (
  <Suspense fallback={<Skeleton.Node style={{ width: size, height: size }} />}>
    <span style={{ ...style, width: size, height: size }}>
      {language === 'TypeScript' && <SiTypescript size={size} />}
      {language === 'JavaScript' && <SiJavascript size={size} />}
      {language === 'Shell' && <SiGnubash size={size} />}
      {language === 'PHP' && <SiPhp size={size} />}
    </span>
  </Suspense>
);
