
export async function linkTo(link: string) {
    //@ts-ignore
    await window.electron.openExternal(link)
    //window.electron.static()
}
