import React from 'react';
import styled from 'styled-components';

export default function HasBoon() {
  return <Component data-file="mechanics/HasBoon" />;
}

const Component = styled.div`
  animation: hasBoonGlow 4000ms linear infinite;
  border-radius: var(--minion-border-radius);
  height: 100%;
  opacity: 1;
  width: 100%;
  pointer-events: none;
  position: absolute;
  z-index: 1;
  transition: 600ms ease-in-out;
  transition-property: box-shadow, opacity, transform;

  .is-selected ~ & {
    transform: scale(1.15);
  }

  @keyframes hasBoonGlow {
    0%,
    60% {
      box-shadow: 0 0 0 rgba(236, 210, 79, 0);
    }
    70% {
      box-shadow: 0 0 5px 5px rgba(236, 210, 79, 1);
    }
    80% {
      box-shadow: 0 0 10px 10px rgba(236, 210, 79, 1);
    }
    90% {
      box-shadow: 0 0 30px 15px rgba(236, 210, 79, 0.45);
    }
    100% {
      box-shadow: 0 0 25px 12.5px rgba(236, 210, 79, 0);
    }
  }
`;
