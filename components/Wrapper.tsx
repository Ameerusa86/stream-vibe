import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <>
      <div className="mx-auto px-[162px] py-[30px] ">{children}</div>
    </>
  );
};

export default Wrapper;
