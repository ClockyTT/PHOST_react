export const authorization = async (payload) => {
  const url = "http://localhost:5000/user/auth";

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData.message || "Request failed");
  }

  const accessToken = await response.json();

  // console.log(accessToken);

  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);
  }
};
