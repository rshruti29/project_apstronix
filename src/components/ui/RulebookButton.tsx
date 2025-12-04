"use client";
import React from "react";
import { motion } from "framer-motion";

interface RulebookButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const RulebookButton: React.FC<RulebookButtonProps> = ({
  href,
  onClick,
  className = "",
  size = "md",
}) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const Component = href ? motion.a : motion.button;
  const componentProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { onClick, type: "button" as const };

  return (
    <Component
      {...componentProps}
      className={`
        relative rounded-xl font-semibold uppercase tracking-wider
        bg-white text-gray-900 border border-gray-400 
        shadow-md hover:shadow-lg
        transition-all duration-200
        ${sizeClasses[size]} ${className}
      `}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        📖 Rulebook
      </span>
    </Component>
  );
};

export default RulebookButton;
