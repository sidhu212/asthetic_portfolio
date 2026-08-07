import React from 'react';
import { techPillStyles } from '../../data/projects';

const TechPill = ({ tech, size = 'sm' }) => {
  const style = techPillStyles[tech] || {
    bg: "bg-secondary/60",
    border: "border-borderColors/70",
    text: "text-textSecondary",
    dot: "bg-accent"
  };

  const sizeClasses = size === 'sm' 
    ? 'text-[11px] px-2.5 py-1 gap-1.5'
    : 'text-xs px-3.5 py-1.5 gap-2';

  return (
    <span
      className={`inline-flex items-center font-mono rounded-lg border font-medium transition-all duration-300 hover:scale-105 hover:border-accent/60 ${style.bg} ${style.border} ${style.text} ${sizeClasses}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${style.dot}`} />
      <span>{tech}</span>
    </span>
  );
};

export default TechPill;
