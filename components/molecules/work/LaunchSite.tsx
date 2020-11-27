import styled from "styled-components";

// Atoms
import Container from "../../atoms/Container";
import ArrowButton from "../../atoms/buttons/ArrowButton";

interface Props {
  data: {
    launch_image: string,
    site_url: string,
  };
}

const LaunchWrapper = styled('section')`
  background-color: var(--light-grey);
`;

const Devices = styled('img')`
  margin-bottom: 5.625rem;
  width: 100%;
`;

const LauchSite = ({ data }: Props) => (
  <LaunchWrapper>
    <Container center>
      <Devices src={data.launch_image} alt="" />

      <ArrowButton href={data.site_url}>
        Launch Site
      </ArrowButton>
    </Container>
  </LaunchWrapper>
);

export default LauchSite;
