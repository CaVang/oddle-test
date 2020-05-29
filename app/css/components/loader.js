import styled from '@emotion/styled';
import { keyframes } from "@emotion/core";

export const LoaderStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderInner = styled.div`
  text-align: center;
  display: inline;
  margin-right: 5px;
`;

const bounceDelay = keyframes`
  0% {}
  80% {}
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

export const Bound1 = styled.div`
  width: 8px;
  height: 8px;
  background-color: #ff5a5f;
  border-radius: 100%;
  display: inline-block;
  animation: ${bounceDelay} 0.8s infinite ease-in-out both;
  animation-delay: -0.32s;
`;

export const Bound2 = styled.div`
  width: 8px;
  height: 8px;
  background-color: #ff5a5f;
  border-radius: 100%;
  display: inline-block;
  animation: ${bounceDelay} 0.8s infinite ease-in-out both;
  animation-delay: -0.16s;
`;

export const Bound3 = styled.div`
  width: 8px;
  height: 8px;
  background-color: #ff5a5f;
  border-radius: 100%;
  display: inline-block;
  animation: ${bounceDelay} 0.8s infinite ease-in-out both;
`;
