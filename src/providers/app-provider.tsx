import { RoutingProvider } from './routing-provider';
import { StoreProvider } from './store-provider';
import { ThemeProvider } from './theme-provider';

export function AppProvider() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <RoutingProvider />
      </ThemeProvider>
    </StoreProvider>
  );
}
