import styled from 'styled-components';
import Image from 'next/image';

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
    background-image: url('/images/grid.png');
    background-color: rgba(255, 255, 255, .75);

    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    width: 100%;
    height: 100%;
    content: '';
  }

  img {
    width: 100%;
  }

  @media only screen and (max-width: ${breakpoints.smallOnly}) {
    display: none;
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
      <Image
        src={image}
        alt=""
        width={1700}
        height={490}
      />
    </WorkImage>

    <Screenshot>
      <Image
        src={screenshot}
        width={809}
        height={481}
        alt=""
      />
      <ScreenshotMobile />
    </Screenshot>
  </section>
);

export default WorkHero;