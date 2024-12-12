
export async function linkTo(link: string) {
    //@ts-ignore
    await window.electron.openExternal(link)
}

export async function getAnimes(searchString: string): Promise<{ title: string, image: string, link: string, quality: string, audio: string, episodes: string }[]> {
    //@ts-ignore
    return await window.electron.getSearchAnimes(searchString)
}

export async function getSingleAnime(link: string) {
    //@ts-ignore
    return await window.electron.getSingleAnime(link)
}
