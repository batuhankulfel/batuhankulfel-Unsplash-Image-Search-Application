import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID aNoI0PspiSF-tjFpDo8qyWJNUBS3M-IyW70ofBFoEMg",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
