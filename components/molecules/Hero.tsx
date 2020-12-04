import styled from 'styled-components';

import Avatar from '../atoms/Avatar';
// import Scroll from '../atoms/Scroll';
import Heading from '../atoms/typography/Heading';
import Paragraph from '../atoms/typography/Paragraph';

interface StyledProps {
  heroImage: string;
}

interface Props extends StyledProps {
  title: string;
  name: string;
}

const HeroArticle = styled('article')<StyledProps>`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  background-image: url(${({ heroImage }) => heroImage});

  position: relative;
  height: 100vh;

  :after {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    content: '';
    display: block;

    background-image: url('/images/grid.png');
    background-color: rgba(225,225,225, .9);
  }
`;

const ContentHeader = styled('header')`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    z-index: 1;

    width: 100%;
    text-align: center;
`;

const Hero = ({ heroImage, title, name }: Props) => (
  <section>
    <HeroArticle heroImage={heroImage}>
      <ContentHeader>
        <Avatar hero />
        <Paragraph
          xlarge
        >
          {title}
        </Paragraph>
        <Heading
          borderColour="var(--border-line)"
          width="120px"
          type="h1"
          size="var(--h2)"
        >
          {name}
        </Heading>
      </ContentHeader>

      {/* <Scroll /> */}
    </HeroArticle>
  </section>
);

export default Hero;


// .hero {

//   & __content {
//     @extend % absolute - center;
//     z - index: 1;

//     width: 100 %;
//     text - align: center;
//   }


// }