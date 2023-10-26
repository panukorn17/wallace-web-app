import React, { ReactNode } from 'react';
type SectionProps = {
    children: ReactNode;
  };
const FullScreenDiv: React.FC<SectionProps> = ({ children }) => {
    return <div className="flex flex-col items-center justify-center h-[95vh]">{children}</div>;
}
export default FullScreenDiv;