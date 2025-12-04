export const LeftArrowButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="
      w-8 h-8 sm:w-10 sm:h-10
      bg-white/90 backdrop-blur-md
      rounded-full border border-black/40 shadow 
      flex items-center justify-center 
      active:scale-90 transition
    "
  >
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      className="sm:w-[22px] sm:h-[22px]"
      stroke="#000"
      fill="none"
      strokeWidth="2"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  </button>
);

export const RightArrowButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="
      w-8 h-8 sm:w-10 sm:h-10
      bg-white/90 backdrop-blur-md
      rounded-full border border-black/40 shadow 
      flex items-center justify-center 
      active:scale-90 transition
    "
  >
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      className="sm:w-[22px] sm:h-[22px]"
      stroke="#000"
      fill="none"
      strokeWidth="2"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  </button>
);
