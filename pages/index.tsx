// Services
import fetchData from "../services/fetchData";

// Templates
import Layout from "../components/templates/Layout"

export default function Home({ data }) {
  console.log(data);
  return (
    <Layout>
      Home
    </Layout>
  );
}

export async function getServerSideProps({ resolvedUrl }) {
  return {
    props: {
      data: await fetchData(resolvedUrl)
    },
  }
}