import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

// Define the shape of the context data
interface SlideshowContextType {
  isSlideshowActive: boolean;
  startSlideshow: () => void;
  stopSlideshow: () => void;
}

// Create the context
const SlideshowContext = createContext<SlideshowContextType | undefined>(undefined);

// Create the provider component
export const SlideshowProvider = ({ children }: { children: ReactNode }) => {
  const [isSlideshowActive, setIsSlideshowActive] = useState(false);

  const startSlideshow = () => setIsSlideshowActive(true);
  const stopSlideshow = () => setIsSlideshowActive(false);

  return (
    <SlideshowContext.Provider value={{ isSlideshowActive, startSlideshow, stopSlideshow }}>
      {children}
    </SlideshowContext.Provider>
  );
};

// Create a custom hook to easily use the context
export const useSlideshow = () => {
  const context = useContext(SlideshowContext);
  if (!context) {
    throw new Error('useSlideshow must be used within a SlideshowProvider');
  }
  return context;
};