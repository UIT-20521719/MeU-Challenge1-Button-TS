import React from 'react';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <span>Dev</span>challenges.io
      </div>
      <div className="items-container">
        <div className="item">Colors</div>
        <div className="item">Typography</div>
        <div className="item">Spaces</div>
        <div className="item active">Buttons</div>
        <div className="item">Input</div>
        <div className="item">Grid</div>
      </div>
    </div>
  );
}
