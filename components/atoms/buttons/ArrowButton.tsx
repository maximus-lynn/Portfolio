import styled from "styled-components";
import defaultButtonStyling from "./defaultButtonStyling";
import { FC } from "react";

interface Props {
  href: string;
}

const Anchor = styled('a')`
  ${defaultButtonStyling}
`;

const LaunchButton: FC<Props> = ({ children, href }) => (
  <Anchor href={href}>
    {children}

    <i className="icon icon-arrow-top-left" />
    <i className="icon icon-arrow-top-right" />
    <i className="icon icon-arrow-bottom-left" />
    <i className="icon icon-arrow-bottom-right" />
  </Anchor>
);

export default LaunchButton;
