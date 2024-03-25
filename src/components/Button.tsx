import React, { useState } from 'react';

const Button = ({
  children = 'Default',
  disabled = false,
  variant = 'fill',
  disableShadow = false,
  startIcon = <></>,
  endIcon = <></>,
  color = 'default',
  hover = false,
  size = 'md',
  label = '',
}) => {
  const [labelContent, setLabelContent] = useState(children);
  return (
    <div className="button">
      <p className={`${hover && 'hover'}`}>{label}</p>
      <button
        className={`${color} ${variant} ${disableShadow && 'disableShadow'} ${
          hover && 'hover'
        } ${size} ${disabled && 'disabled'}`}
        disabled={disabled}
      >
        {startIcon && <span className="startIcon">{startIcon}</span>}
        {labelContent}
        {endIcon && <span className="endIcon">{endIcon}</span>}
      </button>
      <input
        placeholder="Placeholder"
        onChange={(e) => setLabelContent(e.target.value)}
        value={labelContent}
      />
    </div>
  );
};

export default Button;
