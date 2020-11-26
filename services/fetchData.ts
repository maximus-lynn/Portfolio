import Butter from 'buttercms';

const butter = Butter(process.env.BUTTER_CMS_TOKEN);

/**
 * Fetch data from the next.js API
 */
export default async (url: string): Promise<Butter.Response> => {
  let lastItemInUrl = 'home';

  if (url !== '/') {
    lastItemInUrl = url.substring(url.lastIndexOf('/') + 1);
  }

  return butter.page.retrieve('*', lastItemInUrl).then((res) => res.data.data);
}