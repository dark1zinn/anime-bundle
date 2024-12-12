import { animes } from "./data.js"
import { singleAnime } from "./data2.js"

export async function getAnimesResults(searchString: string) {
    console.log(searchString)  //for test purposes
    return animes
}

export async function getSingleAnime(link: string) {
    console.log(link)   //for test purposes
    return singleAnime
}