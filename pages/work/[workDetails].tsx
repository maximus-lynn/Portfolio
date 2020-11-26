// Services
import fetchData from "../../services/fetchData";

// Molecules
import Hero from "../../components/molecules/work/Hero";
import Intro from "../../components/molecules/work/Intro";
import TechStack from "../../components/molecules/TechStack";

// Templates
import Layout from "../../components/templates/Layout";

export default function WorkDetails({ fields }) {
  console.log(fields);
  const {
    hero_image,
    laptop_screenshot,
    title,
    description,
  } = fields.hero_title_and_description;

  return (
    <Layout>
      <Hero
        image={hero_image}
        screenshot={laptop_screenshot}
      />
      <Intro
        title={title}
        description={description}
      />
      <TechStack
        techItems={fields.tech_stack.tech_stack_images}
      />
      <Intro
        title="Behind the scenes"
        description={fields.behind_the_scenes.description}
      />
    </Layout>
  );
}

export async function getServerSideProps({ resolvedUrl }) {
  const data: any = await fetchData(resolvedUrl);

  return {
    props: {
      fields: data.fields
    },
  }
}