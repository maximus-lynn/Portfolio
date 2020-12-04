import styled from "styled-components";

import fetchData from "../../services/fetchData"

// Interface
import { IWorkItem } from '../../components/interfaces/WorkItemInterface';

// Components
import Layout from "../../components/templates/Layout"
import Heading from "../../components/atoms/typography/Heading";
import WorkItem from "../../components/molecules/WorkItem";

interface Props {
  workItems: Array<IWorkItem>
}

const WorkList = styled('section')`
  display: flex;
  text-align: center;
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

export async function getServerSideProps({ resolvedUrl }) {
  const data: any = await fetchData(resolvedUrl);
  return {
    props: {
      workItems: data.fields.work_item,
    },
  }
}