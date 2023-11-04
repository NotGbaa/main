export const loadCache = (key) => {
  console.log("loadCache");

  return new Promise((resolve, reject) => {
    fetch("https://ws.progettimolinari.it/cache/get", {
      method: "Post",
      headers: {
        "content-type": "application/json",
        key: "32fdbbd2-ad29-46dc-996e-2db287ce3248",
      },
      body: JSON.stringify({ key: key }),
    })
      .then((element) => {
        resolve(element.json());
      })
      .catch((error) => reject(error));
  });
}
