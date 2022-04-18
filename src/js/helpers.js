export const getJSON = async function (url) {
  try {
    const res = await fetch(url);
    const resJSON = await res.json();
    if (!res.ok) {
      throw new Error(`${resJSON.message}`);
    }
  } catch (error) {}
};
