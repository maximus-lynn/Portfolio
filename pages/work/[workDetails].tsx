// Services
import fetchData, { fetchPageTypes } from "../../services/fetchData";

// Molecules
import Hero from "../../components/molecules/work/Hero";
import Intro from "../../components/molecules/work/Intro";
import TechStack from "../../components/molecules/TechStack";
import LaunchSite from "../../components/molecules/work/LaunchSite";

// Templates
import Layout from "../../components/templates/Layout";
import ImageBlock from "../../components/molecules/work/ImageBlock";

export default function WorkDetails({
  launchSite,
  introDetails,
  techImagery,
  behindTheScenes,
}) {
  const {
    hero_image,
    laptop_screenshot,
    title,
    description,
  } = introDetails;

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
        techItems={techImagery}
      />
      <Intro
        title="Behind the scenes"
        description={behindTheScenes.description}
      />
      <ImageBlock
        left={behindTheScenes.left_image}
        right={behindTheScenes.right_image}
      />
      <LaunchSite data={launchSite} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const data: any = await fetchPageTypes('work-details');

  const dynamicRoutes = data.reduce((accum, currentData) => {
    accum.push({
      params: {
        workDetails: currentData.slug,
      }
    });

    return accum;
  }, []);

  return {
    paths: dynamicRoutes,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data: any = await fetchData(params.workDetails);
  return {
    props: {
      launchSite: data.fields.launch_site,
      introDetails: data.fields.hero_title_and_description,
      techImagery: data.fields.tech_stack.tech_stack_images,
      behindTheScenes: data.fields.behind_the_scenes,
    },
  }
}