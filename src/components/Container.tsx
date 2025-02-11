import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:p-0  sm:max-w-[600px]  md:max-w-[740px]  lg:max-w-[1000px]  xl:max-w-[1200px]  2xl:max-w-[1300px] ${className}`}>
      {children}
    </div>
  );
}
