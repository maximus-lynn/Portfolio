import Image from 'next/image';
import styled from 'styled-components';

const ButterCMSAnchor = styled('a')`
  text-align: center;
`;

const Footer = () => (
  <>
    <ButterCMSAnchor href="buttercms.com" target="_blank">
      <Image
        src="https://cdn.buttercms.com/JSSDbrHPSnGlLUcyHTn5"
        width="211"
        height="52"
      />
    </ButterCMSAnchor>
  </>
);

export default Footer;