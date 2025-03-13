import './globals.css';

import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './pages/ErrorFallback';
import { FC } from 'react';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import Routes from './routes';
import { ThemeProvider } from '@mui/material';
import { Toaster } from 'sonner';
import { store } from './store';
import { theme } from './theme/mui';

const App: FC = () => {
  return (
    <Provider store={store}>
      <Toaster
        richColors
        position="bottom-right"
        toastOptions={{
          duration: 5000,
          className: 'data-sonner-toast',
        }}
      />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Routes />
            <Footer />
          </ErrorBoundary>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
