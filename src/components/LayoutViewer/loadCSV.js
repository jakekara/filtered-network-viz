import * as d3 from "d3-dsv";

export default async function loadCSV(url) {
    return fetch(url)
        .then(resp => resp.text())
        .then(text => {
            return text;
        })
        .then(text => d3.csvParse(text))
}
