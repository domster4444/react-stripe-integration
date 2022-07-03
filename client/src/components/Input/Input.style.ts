import styled, { css } from 'styled-components';

interface InputPropsI {
  scalestyle?: 'small' | 'medium' | 'large' | undefined;
}

export const InputField = styled.input<InputPropsI>`
  font-size: 2.2rem;
  border-radius: 0.25rem;
  outline: none;
  border: 1px solid #ccc;
  margin: 0.5rem 0;
  height: 4rem;
  width: 100%;
`;
