export const saveCache = (dict, key) => {
  console.log("saveCache");

  fetch("https://ws.progettimolinari.it/cache/set", {
    method: "Post",
    headers: {
      "content-type": "application/json",
      key: token,
    },
    body: JSON.stringify({
      key: key,
      value: JSON.stringify(dict),
    }),
  })
    .then((element) => element.json())
    .then((element) => console.log(element))
    .catch((error) => console.error(error));
}
