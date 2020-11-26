// Atoms
import Container from "../atoms/Container";
import Heading from "../atoms/typography/Heading";
import styled from "styled-components";
import breakpoints from "../../assets/css/breakpoints";

interface Props {
  techItems: [{
    image: string;
  }]
};

const WrapperContainer = styled('section')`
  background-image: url('~assets/imgs/grid.png');
  background-color: var(--grid-bg);
`;

const List = styled('ul')`
  display: inline-flex;
  justify-content: center;
  flex-wrap: wrap;

  list-style: none;
  padding: 0;
`;

const Item = styled('li')`
  padding: .625rem;
  flex: 0 1 50%;

  @media only screen and (min-width: ${breakpoints.medium}) {
    flex: 0 1 33.3%;
  }

  @media only screen and (min-width: ${breakpoints.large}) {
    flex: 0 1 25%;
  }
`;

const Image = styled('img')`
  box-shadow: 0 0 5px -1px rgba(65,65,65,.75);
  background-color: var(--card-background);
  padding: 1.5rem;
  width: 100%;
`;

const TechStack = ({ techItems }: Props) => (
  <WrapperContainer>
    <Container center>
      <Heading
        type="h2"
        size="var(--h2)"
        width="120px"
        borderColour="var(--border-line)"
      >
        TECH STACK
      </Heading>

      <List>
        {techItems.map((item) => (
          <Item>
            <Image src={item.image} alt=""/>
          </Item>
        ))}
      </List>
    </Container>
  </WrapperContainer>
);

export default TechStack;