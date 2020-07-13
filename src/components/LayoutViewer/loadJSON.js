export default async function loadJSON(url) {
    return fetch(url)
        .then(resp => resp.text())
        .then(text => {
            return text;
        })
        .then(text => JSON.parse(text))
}
