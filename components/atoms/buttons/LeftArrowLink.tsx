import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";

const Anchor = styled('a')`
  display: flex;
  align-items: center;

  color: var(--body-font-color);

  svg {
    transition: all .25s;
    left: 0;
  }

  :hover svg {
    position: relative;
    left: -.25rem;
  }
`;

const Text = styled('span')`
  display: inline-block;
  margin-left: 1rem;

  font-size: 1.125rem;
  font-family: Francois One,sans-serif;
  text-transform: uppercase;
  letter-spacing: 6px;
`;

const LeftArrowLink: FC = ({ children }) => (
  <Link href="/work">
    <Anchor>
      <svg
        version="1.1"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        fill="#e26e3c"
      >
        <path d="m201.37 438.63-160-160c-12.497-12.496-12.497-32.758 0-45.255l160-160c12.497-12.496 32.758-12.496 45.255 0s12.497 32.758 0 45.255l-105.37 105.37h306.74c17.673 0 32 14.327 32 32s-14.327 32-32 32h-306.74l105.37 105.37c6.248 6.248 9.372 14.438 9.372 22.627s-3.124 16.379-9.372 22.627c-12.497 12.497-32.758 12.497-45.255 0z"/>
      </svg>

      <Text>{children}</Text>
    </Anchor>
  </Link>
);

export default LeftArrowLink;