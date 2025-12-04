export const Wrapper = ({ children, className = "" }) => (
  <div className={`w-full flex flex-col items-center ${className}`}>
    {children}
  </div>
);

export const ScreenViewContainer = ({ children, className = "" }) => (
  <div
    className={`relative w-full flex flex-col md:flex-row items-center justify-center ${className}`}
  >
    {children}
  </div>
);

export const SliderContainer = ({ children, className = "" }) => (
  <div className={`w-full overflow-hidden mt-3 md:mt-0 ${className}`}>
    {children}
  </div>
);
