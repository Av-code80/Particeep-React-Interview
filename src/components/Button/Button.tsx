import React from "react";
import { Trash2 } from "react-feather";
import cn from 'classnames'

interface ButtonProps {
  title: string;
  customClassName?: string
}
const Button: React.FC<ButtonProps> = ({ title, customClassName }) => {
  return (
    <div>
      <button className={cn("border w-fulltext-white rounded", customClassName)}>
        <div className="flex justify-center items-center">
          <span className="mr-2 text-lg">{title}</span>
          <Trash2 className="w-5 h-5" />
        </div>
      </button>
    </div>
  );
};

export default Button;
