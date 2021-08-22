import React from 'react';
import { Color } from '../../../css/colors';

const Arrow: React.FC<{ color?: Color, className?: string }> = ({ className }) => (
  <svg
    width="73"
    height="72"
    viewBox="0 0 73 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M9.54688 35.9972H62.8136M62.8136 35.9972L54.1758 27.3594M62.8136 35.9972L54.1758 44.6351"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="square"
    />
  </svg>

);

export default Arrow;
