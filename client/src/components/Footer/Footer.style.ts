import styled from 'styled-components';

interface FooterProps {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
}

const Footer = styled.footer<FooterProps>`
  background: ${(props: FooterProps) =>
    props.primary
      ? 'blue'
      : props.secondary
      ? 'green'
      : props.tertiary
      ? 'red'
      : '#ccc'};
  color: black;
`;

export default Footer;
// Language: typescript
