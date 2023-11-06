const token = "4a318de6-2f15-4a2e-9161-a71279c9c016";

export const saveCache = (dict, key) => {
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
    .then((element) => console.log("Salvataggio dati : ", element))
    .catch((error) => console.error(error));
}

export const loadCache = (key) => {
  return new Promise((resolve, reject) => {
    fetch("https://ws.progettimolinari.it/cache/get", {
      method: "Post",
      headers: {
        "content-type": "application/json",
        key: token,
      },
      body: JSON.stringify({ key: key }),
    })
      .then((element) => element.json())
      .then(response => {
        console.log("response",response)
        resolve(JSON.parse(response.result));
      })
      .catch((error) => reject(error));
  });
}