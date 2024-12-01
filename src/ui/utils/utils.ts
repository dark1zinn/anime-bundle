
export async function linkTo(link: string) {
    //@ts-ignore
    await window.electron.openExternal(link)
}

export async function fetchAnimes(): Promise<{}[]> {
    //@ts-ignore
    const data = await window.electron.getAnimes()
    console.log(data)
    return data
}
