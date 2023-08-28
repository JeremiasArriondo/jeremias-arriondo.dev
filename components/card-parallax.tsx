import Tilt from "react-parallax-tilt";
import { ReactNode } from "react";

export const CardParallax = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.3}
      glareColor="#6d28d9"
      glarePosition="all"
      glareBorderRadius="8px"
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      className={className}
    >
      {children}
    </Tilt>
  );
};
