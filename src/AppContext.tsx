import { createContext, useContext, useState, type ReactNode } from 'react';

type View = 'home' | 'partner' | 'aila-pass';

interface AppContextType {
  view: View;
  navigate: (view: View) => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  selectedGameId: number | null;
  openGameDetail: (id: number) => void;
  closeGameDetail: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<View>('home');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [selectedGameId, setSelectedGameId] = useState<number | null>(null);

  const navigate = (v: View) => {
    setView(v);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  };

  const openGameDetail = (id: number) => setSelectedGameId(id);
  const closeGameDetail = () => setSelectedGameId(null);

  return (
    <AppContext.Provider
      value={{
        view,
        navigate,
        theme,
        toggleTheme,
        selectedGameId,
        openGameDetail,
        closeGameDetail,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}