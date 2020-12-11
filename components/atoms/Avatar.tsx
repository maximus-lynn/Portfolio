import styled from 'styled-components';
import Image from 'next/image';

interface Props {
  hero?: boolean;
}

const AvatarWrapper= styled('span')<Props>`
  background-color: var(--white);
  box-shadow: 0 0 5px -1px rgba(0,0,0, .75);
  border-radius: 50%;

  img {
    width: 100%;
  }

  ${({ hero }) => hero ? `
    width: 150px;
    display: inline-block;
    position: relative;
    overflow: hidden;
    border: 3px solid var(--avatar-border);

    img {
      position: relative;
      bottom: -.5rem;
    }
  ` : `
    display: flex;
    width: 50px;
    border: 1px solid var(--avatar-border);


    position: absolute;
    top: 2rem;
    left: 2rem;

    z-index: 1;
  `}
`;

const Avatar = ({ hero }: Props) => (
  <AvatarWrapper hero={hero}>
    <Image
      width={150}
      height={150}
      src="/images/avatar.png"
      alt="Maxwell Lynn"
    />
  </AvatarWrapper>
);

export default Avatar;