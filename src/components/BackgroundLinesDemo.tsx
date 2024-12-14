// ../components/ui/background-lines.tsx

import React from "react";

interface BackgroundLinesProps {
  numberOfLines: number;
  color: string;
  lineWidth: number;
  lineLength: number;
  className?: string; // Optional className for custom styles
}

const BackgroundLines: React.FC<BackgroundLinesProps> = ({
  numberOfLines,
  color,
  lineWidth,
  lineLength,
  className,
}) => {
  return (
    <svg className={className} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      {/* Render lines based on the props */}
      {[...Array(numberOfLines)].map((_, index) => (
        <line
          key={index}
          x1="0"
          y1={(index / numberOfLines) * 100 + "%"} // Adjust y positioning for each line
          x2="100%"
          y2={(index / numberOfLines) * 100 + "%"} // Adjust y2 based on the line length
          stroke={color}
          strokeWidth={lineWidth}
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
};

export { BackgroundLines };
