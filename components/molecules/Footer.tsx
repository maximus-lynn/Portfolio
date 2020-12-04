import Image from 'next/image';
import styled from 'styled-components';

const ButterCMSAnchor = styled('a')`
  position: absolute;
  right: 1rem;
  top: 50%;

  transform: translateY(-50%);
`;

const FooterWrapper = styled('footer')`
  display: flex;
  justify-content: center;
  padding: 3rem 0;

  position: relative;
`;

const ScrollToTopButton = styled('button')`
  width: 35px;
  height: 35px;

  background: none;

  border: 0;
  border-top: 4px solid var(--orange);
  border-left: 4px solid var(--orange);
  transform: rotate(45deg);

  cursor: pointer;
  outline: none;
`;

const Footer = () => (
  <FooterWrapper>
    <ButterCMSAnchor href="buttercms.com" target="_blank">
      <Image
        src="https://cdn.buttercms.com/JSSDbrHPSnGlLUcyHTn5"
        width="150"
        height="37"
      />
    </ButterCMSAnchor>
    <ScrollToTopButton
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      }}
    />
  </FooterWrapper>
);

export default Footer;