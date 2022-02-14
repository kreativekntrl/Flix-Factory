// fetch post request to make a post
document.querySelector(".btn-logout1").addEventListener("click", async () => {
  try {
    await fetch("/api/user/logout", { method: "POST" });
    document.location.replace("/");
  } catch (error) {
    console.error(error);
    console.error("Failed to logout.");
  }
});

const postHandler = async (event) => {
  event.preventDefault();

  const text = document.querySelector('#text-context').value.trim();
  const show_id = document.querySelector('#shows').value;
  console.log(show_id);
  if (text && show_id) {
    const response = await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({ text_content: text, show_id}),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      window.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.post-form')
  .addEventListener('submit', postHandler);