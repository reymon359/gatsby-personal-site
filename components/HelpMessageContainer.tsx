import React from 'react';
import HelpMessage from './HelpMessage';

// Dummy device detect and components data for now
// Replace with your actual hooks/data imports
const useDeviceDetect = () => {
  if (typeof window === 'undefined') return { isMobile: false };
  return { isMobile: window.innerWidth < 768 };
};

const components = {
  navigation: {
    helpMessage: {
      mobile: 'Tap the menu or scroll up',
      desktop: 'Move around the screen or scroll up',
    },
  },
};

interface HelpMessageContainerProps {
  show: boolean;
}

const HelpMessageContainer: React.FC<HelpMessageContainerProps> = ({ show = false }) => {
  const { isMobile } = useDeviceDetect();
  const { navigation: { helpMessage: { mobile, desktop } } } = components;
  const text = isMobile ? mobile : desktop;
  return <HelpMessage show={show} text={text} />;
};

export default HelpMessageContainer;
