import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ArrowProps {
  onClick?: () => void;
}

export const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div
    className="absolute right-5 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
    onClick={onClick}
  >
    <FaChevronRight size={20} />
  </div>
);

export const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div
    className="absolute left-5 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
    onClick={onClick}
  >
    <FaChevronLeft size={20} />
  </div>
);
