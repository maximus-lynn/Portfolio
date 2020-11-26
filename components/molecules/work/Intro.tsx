import styled from 'styled-components';

// Atoms
import Container from '../../atoms/Container';
import Heading from "../../atoms/typography/Heading";

interface Props {
  title: string;
  description: string;
}

const Description = styled('div')`
  font-size: var(--large-para);
`;

const Intro = ({ title, description }: Props) => (
  <Container center>
    <Heading
      type="h2"
      size="var(--h2)"
      width="75px"
      borderColour="var(--border-line)"
    >
      {title}
    </Heading>

    <Description
      dangerouslySetInnerHTML={{
        __html: description
      }}
    />
  </Container>
);

export default Intro;