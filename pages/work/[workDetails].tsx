import fetchData from "../../services/fetchData";
import Layout from "../../components/templates/Layout";

export default function WorkDetails({ data }) {
  // console.log(data);
  return (
    <Layout>
      Work Details
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