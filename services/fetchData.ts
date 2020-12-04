import Butter from 'buttercms';

const butter = Butter(process.env.BUTTER_CMS_TOKEN);

/**
 * Fetch data from the next.js API
 */
export default async (page: string): Promise<Butter.Response> => (
  butter.page.retrieve('*', page).then((res) => res.data.data)
);