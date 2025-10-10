import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'antd/dist/reset.css';
import App from './App';
import * as TanStackQueryProvider from './integrations/react-query'
import reportWebVitals from './reportWebVitals';
import { getContext } from './integrations/react-query-context';
import { NuqsAdapter } from 'nuqs/adapters/react';

const TanStackQueryProviderContext = getContext();
const rootElement = document.getElementById('root');

if (rootElement && !rootElement.innerHTML) {
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <TanStackQueryProvider.Provider {...TanStackQueryProviderContext}>
        <NuqsAdapter>
          <App />
        </NuqsAdapter>
      </TanStackQueryProvider.Provider>
    </StrictMode>,
  )
}

reportWebVitals();
