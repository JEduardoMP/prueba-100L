// Axios
import axios from "axios";

export const handleSingnUp = async (info) => {
  try {
    console.log(info);
    const response = await axios({
      url: "https://frontend-recruiting.100ladrillos.com/api/signUp",
      method: "post",
      data: info
    });
    return response
  } catch (error) {
    return error.response
  }
};
