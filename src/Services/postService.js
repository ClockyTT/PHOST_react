export const getPosts = async (payload) => {
  try {
    const url =
      payload && payload != ""
        ? `http://localhost:5000/post/?search=${payload}`
        : "http://localhost:5000/post/";
    const urlParams = payload ? payload : "";
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    console.log(response);

    if (!response.ok) {
      throw new Error("Failed to load posts");
    }

    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
