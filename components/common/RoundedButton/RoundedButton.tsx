import React, { useCallback } from 'react';
import { RoundedBtn } from './RoundedButton.styled';

export interface RoundedButtonProps {
  className?: string;
  variant?: 'big' | 'small';
  children: React.ReactNode;
  type?: 'button' | 'submit';
  onClick?(): void;
  disabled?: boolean;
  typeBtn?: 'addBtn' | 'delBtn' | 'otherBtn' | 'editBtn';
}

export const RoundedButton: React.FC<RoundedButtonProps> = ({
  className = '',
  variant = 'big',
  children,
  type = 'submit',
  onClick,
  disabled,
  typeBtn,
}) => {
  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  return (
    <RoundedBtn
      className={className}
      variant={variant}
      onClick={handleClick}
      type={type}
      disabled={disabled}
      typeBtn={typeBtn}
    >
      {children}
    </RoundedBtn>
  );
};
