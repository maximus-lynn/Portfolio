import Link from "next/link";
import styled from "styled-components";

// Interface
import { IWorkItem } from '../interfaces/WorkItemInterface';

// Atoms
import Heading from "../atoms/typography/Heading";

interface Props {
  item: IWorkItem;
}

const Article = styled('article')`
  flex: 1;
  position: relative;
  overflow: hidden;

  :hover header {
    opacity: .75;
  }

  :hover img {
    transform: scale(1.05);
  }
`;

const Image = styled('img')`
  width: 100%;
  transition: all 0.5s;
`;

const Header = styled('header')`
  position: absolute;
  top: 0;
  left: 0;

  transition: all 0.5s;
  opacity: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  background-color: var(--portfolio-hover-state);
`;

const SubTitle = styled('h6')`
  color: var(--white);
  font-size: 1.2vw;
  text-align: center;
`;

const WorkItem = ({ item }: Props) => (
  <Article>
    <Link href={item.url}>
      <>
        <Image src={item.image} alt={item.title} />
        <Header>
          <div>
            <Heading
              type="h1"
              fontColour="var(--white)"
              size="3vw"
              width="100px"
              borderColour="var(--border-line-alt)"
            >
              {item.title}
            </Heading>

            <SubTitle>{item.sub_title}</SubTitle>
          </div>
        </Header>
      </>
    </Link>
  </Article>
);

export default WorkItem;