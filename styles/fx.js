import { css, keyframes } from "@emotion/react";

const slideInLeftAnim = keyframes`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const slideInLeft = css`
  animation-duration: var(--animate-duration);
  animation-fill-mode: both;
  animation: ${slideInLeftAnim} 1s ease;
`;
