import { css } from '@emotion/core';
import { normal } from './typography';

export const input = css`
  ${normal};
  padding: 0.5rem;
  border: 2px solid var(--colorLoblolly);
  border-radius: 4px;
  width: 100%;

  background-color: var(--colorWhite);
  color: var(--colorLimedSpruce);
`;
