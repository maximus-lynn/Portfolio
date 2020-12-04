import styled from "styled-components";
import defaultButtonStyling from "./defaultButtonStyling";
import { FC } from "react";

interface Props {
  href: string;
  target?: string;
}

const Anchor = styled('a')`
  ${defaultButtonStyling}
`;

const LaunchButton: FC<Props> = ({ children, href, target }) => (
  <Anchor
    href={href}
    target={target}
  >
    {children}

    <i className="icon icon-arrow-top-left" />
    <i className="icon icon-arrow-top-right" />
    <i className="icon icon-arrow-bottom-left" />
    <i className="icon icon-arrow-bottom-right" />
  </Anchor>
);

export default LaunchButton;
