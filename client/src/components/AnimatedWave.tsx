import React from "react";

export const AnimatedWave = () => {
  return (
    <div className="absolute top-20 left-0 w-full overflow-hidden leading-[0] transform -translate-y-full h-[120px]">
      <div className="absolute inset-0 w-[200%] h-full">
        <svg
          className="absolute left-0 bottom-0 w-full h-full animate-wave-move-slow"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#FFFFFF"
            opacity="0.3"
          ></path>
        </svg>
        <svg
          className="absolute left-0 bottom-0 w-full h-full animate-wave-move-mid"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="#FFFFFF"
            opacity="0.5"
          ></path>
        </svg>
        <svg
          className="absolute left-0 bottom-0 w-full h-full animate-wave-move-fast"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </div>
      <style>{`
        @keyframes wave-move {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-wave-move-slow {
          animation: wave-move 20s linear infinite;
        }
        .animate-wave-move-mid {
          animation: wave-move 15s linear infinite;
        }
        .animate-wave-move-fast {
          animation: wave-move 10s linear infinite;
        }
      `}</style>
    </div>
  );
};
