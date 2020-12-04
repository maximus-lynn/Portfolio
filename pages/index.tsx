import styled from "styled-components";

// Services
import fetchData from "../services/fetchData";

// Templates
import Layout from "../components/templates/Layout"
import Hero from "../components/molecules/Hero";
import Intro from "../components/molecules/work/Intro";
import Skills from "../components/molecules/Skills";
import WorkItem from "../components/molecules/WorkItem";
import Hobbies from "../components/molecules/Hobbies";
import ContactDetails from "../components/molecules/ContactDetails";

interface Props {
  skills: [{
    title: string,
    description: string;
    image: string;
    background_colour: string;
  }];
  intro: any;
  hero: any;
  workItems: any;
  hobbies: any;
  contactDetails: any;
};

const WorkList = styled('div')`
  display: flex;
  text-align: center;
`;

export default function Home({
  hero,
  intro,
  skills,
  workItems,
  hobbies,
  contactDetails,
}: Props) {
  return (
    <Layout>
      {console.log(contactDetails)}
      <Hero
        heroImage={hero.image}
        title={hero.title}
        name={hero.name}
      />
      <Intro
        title={intro.title}
        description={intro.description}
      />
      <Skills skills={skills} />
      <Hobbies
        title={hobbies.title}
        description={hobbies.description}
        images={hobbies.hobbie_images}
      />
      <WorkList>
        {workItems.map((item) => (
          <WorkItem
            item={item}
          />
        ))}
      </WorkList>
      <ContactDetails
        text={contactDetails.text}
        buttonText={contactDetails.button_text}
        buttonUrl={contactDetails.button_url}
      />
    </Layout>
  );
}

export async function getServerSideProps({ resolvedUrl }) {
  const home: any = await fetchData(resolvedUrl);
  const work: any = await fetchData('work');
  console.log(home);

  return {
    props: {
      hero: home.fields.hero,
      intro: home.fields.intro,
      skills: home.fields.skills.skill,
      hobbies: home.fields.hobbies,
      workItems: work.fields.work_item,
      contactDetails: home.fields.contact_me
    },
  }
}