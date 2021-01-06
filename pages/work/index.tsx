import styled from "styled-components";

import fetchData from "../../services/fetchData"

// Interface
import { IWorkItem } from '../../components/interfaces/WorkItemInterface';

// Components
import Layout from "../../components/templates/Layout"
import Heading from "../../components/atoms/typography/Heading";
import WorkItem from "../../components/molecules/WorkItem";
import breakpoints from "../../assets/css/breakpoints";

interface Props {
  workItems: Array<IWorkItem>
}

export const WorkList = styled('section')`
  display: block;
  text-align: center;

  @media only screen and (min-width: ${breakpoints.medium}) {
    display: flex;
  }
`;

export default function Work({ workItems }: Props) {
  return (
    <Layout>
      <Heading
        type="h1"
        width="40px"
        size="var(--h1)"
        borderColour="var(--border-line)"
        centered
      >
        Work
      </Heading>

      <WorkList>
        {workItems.map((item) => (
          <WorkItem
            item={item}
            key={item.title}
          />
        ))}
      </WorkList>
    </Layout>
  );
}

export async function getStaticProps() {
  const data: any = await fetchData('work');

  return {
    props: {
      workItems: data.fields.work_item,
    },
  }
}