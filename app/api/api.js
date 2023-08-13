import { urls } from "../config";

const sendImage = async (
  selectedImage,
  imageType,
  imageName,
  setLoading,
  setData,
  setError,
  setErrorMessage
) => {
  try {
    setError(false);
    setLoading(true);
    const formData = new FormData();
    formData.append("image", {
      uri: selectedImage,
      type: imageType,
      name: imageName,
    });

    const response = await fetch(`http://localhost:8000/extract_info/`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    setData(responseData);
    setLoading(false);
  } catch (error) {
    setError(true);
    setErrorMessage("Error extracting data");
    setLoading(false);
  }
};

export default {
  sendImage,
};
