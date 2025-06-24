const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`;

export async function fetchContentfulGraphQL(query: string, variables = {}) {
  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables
    }),
  });

  const data = await response.json();

  console.log(' data from contentful ', data);

  if (data.errors) {
  console.error('Contentful GraphQL Error:', JSON.stringify(data.errors, null, 2));
  throw new Error('Failed to fetch from Contentful');
}

  return data.data;
}