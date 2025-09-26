import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export default function Container({ 
  children, 
  className = "", 
  as: Component = "div" 
}: ContainerProps) {
  return (
    <Component className={`w-full px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-24 ${className}`}>
      {children}
    </Component>
  );
}
