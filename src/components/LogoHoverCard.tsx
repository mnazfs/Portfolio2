import React, { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

// Add keyframe animation for scale effect
const style = document.createElement('style');
style.textContent = `
  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: translate(-50%, -100%) scale(0.85);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -100%) scale(1);
    }
  }
`;
if (!document.head.querySelector('style[data-logo-hover-card]')) {
  style.setAttribute('data-logo-hover-card', '');
  document.head.appendChild(style);
}

interface LogoHoverCardProps {
  logo: React.ReactNode;
  title: string;
  description?: string;
  href?: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const LogoHoverCard: React.FC<LogoHoverCardProps> = ({
  logo,
  title,
  description,
  isOpen,
  onOpenChange,
}) => {
  const logoRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (isOpen && logoRef.current) {
      const rect = logoRef.current.getBoundingClientRect();
      setPosition({
        top: rect.top - 10,
        left: rect.left + rect.width / 2
      });
    }
  }, [isOpen]);

  return (
    <>
      <div
        ref={logoRef}
        className="relative flex items-center justify-center pointer-events-auto h-full cursor-pointer transition-transform duration-300 hover:scale-110"
        onMouseEnter={() => onOpenChange(true)}
        onMouseLeave={() => onOpenChange(false)}
      >
        {logo}
      </div>

      {isOpen && createPortal(
        <div
          className="animate-in fade-in duration-200"
          style={{
            position: 'fixed',
            top: `${position.top}px`,
            left: `${position.left}px`,
            transform: 'translate(-50%, -100%)',
            zIndex: 99999,
            width: '192px',
            pointerEvents: 'none',
            animation: 'scaleIn 200ms ease-out'
          }}
        >
          <div className="rounded-2xl bg-card/95 backdrop-blur-sm border border-border px-6 py-4 text-center relative overflow-hidden group/card">
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
            
            <div className="relative">
              <div className="text-sm font-semibold text-foreground font-mono mb-1">
                {title}
              </div>

              {description && (
                <div className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {description}
                </div>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default LogoHoverCard;
