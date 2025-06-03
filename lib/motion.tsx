// A simple motion library to handle animations
// This is a lightweight alternative to framer-motion

import { CSSProperties } from 'react';

type MotionProps = {
  initial?: CSSProperties;
  animate?: CSSProperties;
  transition?: {
    duration?: number;
    delay?: number;
    ease?: string;
  };
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
};

export const motion = {
  div: ({ 
    initial, 
    animate, 
    transition, 
    className, 
    style = {}, 
    children, 
    ...props 
  }: MotionProps & React.HTMLAttributes<HTMLDivElement>) => {
    const animateStyle: CSSProperties = {
      transition: `all ${transition?.duration || 0.3}s ${transition?.ease || 'ease'} ${transition?.delay || 0}s`,
      ...style,
      ...animate,
    };

    return (
      <div 
        className={className} 
        style={{...initial, ...animateStyle}} 
        {...props}
      >
        {children}
      </div>
    );
  },
  
  section: ({ 
    initial, 
    animate, 
    transition, 
    className, 
    style = {}, 
    children, 
    ...props 
  }: MotionProps & React.HTMLAttributes<HTMLElement>) => {
    const animateStyle: CSSProperties = {
      transition: `all ${transition?.duration || 0.3}s ${transition?.ease || 'ease'} ${transition?.delay || 0}s`,
      ...style,
      ...animate,
    };

    return (
      <section 
        className={className} 
        style={{...initial, ...animateStyle}} 
        {...props}
      >
        {children}
      </section>
    );
  },
};