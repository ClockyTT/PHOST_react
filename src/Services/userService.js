export const createUser = async (payload) => {
  const url = "http://localhost:5000/user/";

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData.message || "Request failed");
  }
};

export const getMyProfile = async () => {
  try {
    const token = localStorage.getItem("accessToken");
    const response = await fetch("http://localhost:5000/user/getProfileInfo", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to load profile");
    }

    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getProfile = async (payload) => {
  try {
    const response = await fetch(
      `http://localhost:5000/user/getProfileInfo/${payload}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to load profile");
    }

    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
