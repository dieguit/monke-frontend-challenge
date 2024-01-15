import { useCallback } from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card = ({ children, className, onClick }: CardProps) => {
  const clickHandler = useCallback(() => {
    if (onClick) onClick();
  }, [onClick]);
  return (
    <div
      className={`rounded-md border shadow ${className}`}
      onClick={clickHandler}
      data-testid="div-card"
    >
      {children}
    </div>
  );
};

export default Card;
