import styled from "styled-components";

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
      <img src={left} alt=""/>
    </div>
    <div>
      <img src={right} alt=""/>
    </div>
  </TwoColumnedContainer>
);

export default ImageBlock;
