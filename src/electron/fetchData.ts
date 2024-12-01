import { animes } from "./data.js"

async function fetchData() {
    //const data = await fetch(`data.json`)
    //    .then(response => response.json())
    //    .then(data => {
    //        return data; 
    //    })
    //    .catch(error => {
    //        console.error('Error to load JSON:', error);
    //    });
    
    return animes
}

export default fetchData