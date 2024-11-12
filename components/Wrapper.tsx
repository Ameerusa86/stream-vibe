import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24 2xl:px-32 py-6 sm:py-8 md:py-10 lg:py-12 h-full max-w-[4000px]">
      {children}
    </div>
  );
};

export default Wrapper;
