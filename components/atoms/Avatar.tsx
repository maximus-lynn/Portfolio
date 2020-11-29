import styled from "styled-components";

const AvatarWrapper= styled('span')`
  display: flex;
  width: 50px;

  position: absolute;
  top: 2rem;
  left: 2rem;

  z-index: 1;

  background-color: var(--white);
  border: 1px solid var(--avatar-border);
  box-shadow: 0 0 5px -1px rgba(0,0,0, .75);
  border-radius: 50%;

  img {
    width: 100%;
  }
`;

const Avatar = () => (
  <AvatarWrapper>
    <img src="/images/avatar.png" alt="Maxwell Lynn" />
  </AvatarWrapper>
);

export default Avatar;