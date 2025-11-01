import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID add_your_unsplash_api_key",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
