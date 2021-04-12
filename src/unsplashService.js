import axios from "axios";

const unsplashService = {
  /**
   *
   * @param {string} query - The search query
   * @param {string} collection - The collection ID
   * @param {number}  page - Pagination number
   * @returns {object}
   *
   * {results:{alt_description,link{html},color,,urls:{full,raw,regular,small,thumb}},total,total_pages}
   */
  search: async ({ query, collection, page = 1 }) => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos/`,
        {
          params: {
            page: page,
            per_page: 10,
            query: query,
            collections: collection
          },
          headers: {
            Authorization:
              "Client-ID " + process.env.REACT_APP_UNSPLASH_API_ACCESS_KEY
          }
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return { error: true, message: error.message };
    }
  }
};

export default unsplashService;
