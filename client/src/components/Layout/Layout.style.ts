import styled from 'styled-components';

interface ILayout {
  isMobile?: boolean;
}

const Layouts = styled.div<ILayout>`
  background-color: transparent;
`;
export { Layouts };
