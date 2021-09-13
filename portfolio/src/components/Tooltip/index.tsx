import React, { useState } from 'react';
import { TooltipWrapper, TooltipTarget, CenterContainer, TooltipBox } from './styles';

interface TooltipProps {
  text: string;
  language?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children, language }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <TooltipWrapper>
        <TooltipTarget
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {children}
        </TooltipTarget>
        {isHovered && (
          <CenterContainer>
            <TooltipBox>
              <span>{language}</span>
              {text}
            </TooltipBox>
          </CenterContainer>
        )}
      </TooltipWrapper>
    </>
  );
};

export default Tooltip;
