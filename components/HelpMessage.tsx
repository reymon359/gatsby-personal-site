import React from 'react';

interface HelpMessageProps {
  show: boolean;
  text: string;
}

const HelpMessage: React.FC<HelpMessageProps> = ({ show = false, text = 'Move around the screen or scroll up' }) => {
  if (!show) return null;
  return (
      <div className="text-[#ddd] text-center text-base font-mono tracking-wide opacity-90 animate-fade-out duration-200 pointer-events-none select-none px-2 py-1">
      {text}
    </div>
  );
};

export default HelpMessage;
