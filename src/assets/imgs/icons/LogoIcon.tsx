import { IIcon } from "@/interfaces";
import { memo } from "react";

export const LogoIcon = memo(({ className, ...props }: IIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="24"
      fill="none"
      viewBox="0 0 23 24"
      className={className}
      {...props}
    >
      <path
        fill="url(#paint0_radial_311_47)"
        d="M19.485 6.415a9.476 9.476 0 01.03 13.468 11.806 11.806 0 01-8.36 3.445A11.805 11.805 0 012.1 19.13c4.63 3.824 11.524 3.584 15.87-.718a7.37 7.37 0 000-10.496c-2.928-2.899-7.676-2.899-10.604 0a3.158 3.158 0 000 4.499 3.236 3.236 0 004.545 0 1.08 1.08 0 011.514 0 1.054 1.054 0 010 1.498 5.394 5.394 0 01-7.573 0 5.264 5.264 0 010-7.497c3.763-3.727 9.867-3.727 13.632 0zM11.155 0a11.803 11.803 0 019.052 4.198C15.577.374 8.682.615 4.339 4.914v.002a7.37 7.37 0 000 10.496c2.927 2.9 7.673 2.9 10.602 0a3.156 3.156 0 000-4.498 3.237 3.237 0 00-4.545 0 1.078 1.078 0 01-1.746-.343 1.053 1.053 0 01.232-1.156 5.394 5.394 0 017.573 0 5.264 5.264 0 010 7.497c-3.764 3.728-9.868 3.728-13.633 0A9.476 9.476 0 012.81 3.43 11.805 11.805 0 0111.154 0z"
      ></path>
      <defs>
        <radialGradient
          id="paint0_radial_311_47"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(18.76228 12.06155 -12.39114 19.27498 -1.7 .705)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFC4"></stop>
          <stop offset="1" stopColor="#00E1FF"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
});

LogoIcon.displayName = "LogoIcon";
