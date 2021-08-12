import * as React from "react";

export function ClearIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={64}
      height={64}
      viewBox="0 0 64 64"
      {...props}>
      <path
        d="M32 0C14.4 0 0 14.4 0 32s14.4 32 32 32 32-14.4 32-32S49.6 0 32 0zm0 60C16.6 60 4 47.4 4 32S16.6 4 32 4s28 12.6 28 28-12.6 28-28 28z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#333"
      />
    </svg>
  );
}
