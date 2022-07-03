import styled, { css } from 'styled-components';
interface ButtonInterface {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
}

export const PrimaryBtn = styled.button<ButtonInterface>`
  color: white;
  padding: 0.55rem 0.45rem;
  width: 100%;
  background: var(--primary-violet);
  ${(props: ButtonInterface) =>
    props.primary
      ? css`
          font-size: 2.2rem;
        `
      : props.secondary
      ? css``
      : props.tertiary
      ? css``
      : css``};
`;
