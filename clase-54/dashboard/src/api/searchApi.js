const OMDB_API_KEY = "446b4f42";
const OMDB_API_URL = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&`;

export async function searchApi(searchText) {
  const response = await fetch(`${OMDB_API_URL}s=${searchText}`);
  const result = await response.json();

  if (result.Search) {
    return result.Search;
  }

  return [];
}
