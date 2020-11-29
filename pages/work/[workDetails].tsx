// Services
import fetchData from "../../services/fetchData";

// Molecules
import Hero from "../../components/molecules/work/Hero";
import Intro from "../../components/molecules/work/Intro";
import TechStack from "../../components/molecules/TechStack";
import LaunchSite from "../../components/molecules/work/LaunchSite";

// Templates
import Layout from "../../components/templates/Layout";
import ImageBlock from "../../components/molecules/work/ImageBlock";

export default function WorkDetails({ fields }) {
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
      <ImageBlock
        left={fields.behind_the_scenes.left_image}
        right={fields.behind_the_scenes.right_image}
      />
      <LaunchSite data={fields.launch_site} />
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