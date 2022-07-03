import styled from 'styled-components';

interface AlertPropsI {
  type: 'success' | 'error' | 'warning' | 'info';
}

export const AlertField = styled.div<AlertPropsI>`
  font-size: 1.8rem;
  color: white;
  padding: 0.75rem 0.25rem;
  border-radius: 0.75rem;
  background-color: ${(props: AlertPropsI) =>
    props.type === 'success'
      ? 'blue'
      : props.type === 'error'
      ? '#FF7F7F'
      : props.type === 'warning'
      ? 'orange'
      : 'violet'};
`;
