import axios from "axios";

export const handleSingnUp = async (info) => {
  try {
    console.log(info);
    const response = await axios({
      url: "https://frontend-recruiting.100ladrillos.com/api/signUp",
      mode: "no-cors",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(info),
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(`El error es: ${error}`);
  }
};
