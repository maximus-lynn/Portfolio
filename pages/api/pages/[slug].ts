import Butter from 'buttercms';

const butter = Butter(process.env.BUTTER_CMS_TOKEN);

export default async function handler(req, res) {
  const {
    query: { slug },
  } = req;
  const response: Butter.Response = await butter.page.retrieve('*', slug).then((res) => res);

  res.json(response.data);
}