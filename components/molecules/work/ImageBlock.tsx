import styled from "styled-components";
import Image from 'next/image';

interface Props {
  left: string,
  right: string,
}

const TwoColumnedContainer = styled('section')`
  display: flex;

  img {
    width: 100%;
  }
`;

const ImageBlock = ({ left, right }: Props) => (
  <TwoColumnedContainer>
    <div>
      <Image
        src={left}
        alt=""
        width={850}
        height={560}
      />
    </div>
    <div>
      <Image
        src={right}
        alt=""
        width={850}
        height={560}
      />
    </div>
  </TwoColumnedContainer>
);

export default ImageBlock;
