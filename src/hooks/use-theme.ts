import { useAppDispatch, useAppSelector } from '@/store';
import { setDarkTheme, setLightTheme } from '@/store/slices';

export function useTheme() {
  const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme);
  const dispatch = useAppDispatch();

  // https://tailwindcss.com/docs/dark-mode#supporting-system-preference-and-manual-selection
  function handleLightTheme() {
    document.documentElement.classList.remove('dark');
    dispatch(setLightTheme());
  }

  function handleDarkTheme() {
    document.documentElement.classList.add('dark');
    dispatch(setDarkTheme());
  }

  function handleSystemTheme() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      handleDarkTheme();
    } else {
      handleLightTheme();
    }
  }

  return { isDarkTheme, handleLightTheme, handleDarkTheme, handleSystemTheme };
}
