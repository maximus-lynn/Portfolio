import styled from 'styled-components';

// Breakpoints
import breakpoints from '../../../assets/css/breakpoints';

interface Props {
  image: string;
  screenshot: string;
}

const WorkImage = styled('div')`
  position: relative;
  z-index: 0;

  &::before {
    background-image: url('~assets/imgs/grid.png');
    background-color: rgba($white, .75);

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    content: '';
  }

  img {
    width: 100%;
  }
`;

const Screenshot = styled('div')`
  text-align: center;
  position: relative;

  @media only screen and (max-width: ${breakpoints.smallOnly}) {
    img {
      display: none;
    }
  }

  @media only screen and (min-width: ${breakpoints.medium}) {
    margin-top: -180px;

    img {
      width: 90%;
    }
  }

  @media only screen and (min-width: ${breakpoints.large}) {
    margin-top: -320px;

    img {
      width: auto;
    }
  }
`;

const ScreenshotMobile = styled('img')`
  @media only screen and (max-width: ${breakpoints.smallOnly}) {
    display: inline-block;
    width: 60%;
  }
`;

const WorkHero = ({ image, screenshot }: Props) => (
  <section>
    <WorkImage>
      <img src={image} alt="" />
    </WorkImage>

    <Screenshot>
      <img src={screenshot} alt="" />
      <ScreenshotMobile />
    </Screenshot>
  </section>
);

export default WorkHero;