import { useTheme } from '@/hooks';
import { PropsWithChildren, useEffect } from 'react';

/** This provider is used to set the theme when the app first loading */
export function ThemeProvider({ children }: PropsWithChildren) {
  const { isDarkTheme, handleDarkTheme, handleLightTheme } = useTheme();

  // https://tailwindcss.com/docs/dark-mode#supporting-system-preference-and-manual-selection
  useEffect(() => {
    if (
      isDarkTheme === true ||
      (!('persist:root' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      handleDarkTheme();
    } else {
      handleLightTheme();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
}
