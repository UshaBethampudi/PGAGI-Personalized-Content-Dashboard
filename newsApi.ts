import axios from "axios";

const API_KEY = "60af4dcd7c2c56c2221158fa51c6eeff"; 
const BASE_URL = "https://gnews.io/api/v4/top-headlines";

export const fetchNews = async (category = "technology") => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        token: API_KEY,
        topic: category,
        lang: "en",
        country: "in",
        max: 10,
      },
    });

    return response.data.articles.map((article: any, index: number) => ({
      id: `gnews-${index}`,
      title: article.title,
      description: article.description,
      image: article.image || "https://via.placeholder.com/600x400",
      url: article.url,
    }));
  } catch (error: any) {
    console.error("❌ GNews API Error Details:", error.response?.data || error.message);
    return [];
  }
};
