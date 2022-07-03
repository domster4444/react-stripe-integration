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
  cursor: pointer;
  background: var(--primary-violet);
  outline: none;
  border: none;
  border-radius: 0.25rem;
  transition: all ease-in-out 200ms;
  &:active {
    transition: all ease-in-out 200ms;
    transform: scale(0.95);
  }
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
