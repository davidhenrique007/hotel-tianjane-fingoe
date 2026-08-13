"use client";

import { useState } from 'react';
import Avatar3D from './Avatar3D/Avatar3D';

interface ChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export default function ChatButton({ onClick, isOpen }: ChatButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Avatar3D 
        onClick={onClick} 
        isOpen={isOpen} 
        isHovered={isHovered} 
      />
    </div>
  );
}
