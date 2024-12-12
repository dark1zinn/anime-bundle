import puppeteer, { Browser } from "puppeteer"

export default class Puppet {
    puppet: any
    browser: Browser | null
    timerId!: NodeJS.Timeout
    timeToLive!: number
    timeoutCloser: Function

    constructor() {
        this.puppet = puppeteer
        this.browser = null
        this.timerId;
        this.timeToLive;
        this.timeoutCloser = (seconds: number) => {
            clearInterval(this.timerId);
            this.timeToLive = seconds;

            this.timerId = setInterval(async () => {
                this.timeToLive--;
                // console.log(this.timeToLive);
                if (this.timeToLive === 0) {
                    clearInterval(this.timerId);
                    // console.log("Time's up!");
                    await this.browser?.close()
                }
            }, 1000);
        }
    }


    refreshTTL() {
        this.timeoutCloser(60)
    }

    async destroyBrwoser() {
        if (this.browser) { await this.browser.close() }
    }

    async newBrowser() {
        this.browser = await this.puppet.launch({ headless: true })
    }

    async newPage() {
        this.refreshTTL()
        if (!this.browser) { await this.newBrowser() }
        return await this.browser?.newPage()
    }

    async searchBA(searchString: string) {
        const url = ('https://betteranime.net/pesquisa?titulo=' + searchString)
        const page = await this.newPage()
        await page?.goto(url)

        const products = await page?.$$eval('div#product_container div.list-animes article', elements => {
            // console.log(elements)
            return elements.map((element: HTMLElement | HTMLImageElement | HTMLAnchorElement) => ({
                title: element.querySelector('div#product_container div.list-animes article * * +* +* *')?.textContent,
                //@ts-ignore //must fix these 2 later
                image: element.querySelector('div#product_container div.list-animes article img')?.src,
                //@ts-ignore
                link: element.querySelector('div#product_container div.list-animes article *')?.href,
                quality: element.querySelector('div#product_container div.list-animes article * * +* * +* *')?.textContent,
                audio: element.querySelector('div#product_container div.list-animes article * * +* * *')?.textContent,
                episodes: element.querySelector('div#product_container div.list-animes article * * div.card-vertical-episodes span')?.textContent
            }));
        });

        await page?.close()
        return products
    }

    async getSingleBA(link: string) {
        const page = await this.newPage()
        await page?.goto(link)

        const product = await page?.$eval('main.container.d-flex.my-5', (el: HTMLElement | HTMLImageElement) => {
            return ({
                title: el.querySelector('div.infos_left div.anime-info h2')?.textContent,
                alternativeTitle: el.querySelector('div.infos_left div.anime-info * +* +* +* +* +* +* *')?.textContent,
                //@ts-ignore //must fix this later
                image: el.querySelector('div.infos-img.text-center img')?.src,
                episodeCount: el.querySelector('div.infos_left div.anime-info * +* +* +* +* +* +* +* *')?.textContent,
                year: el.querySelector('div.infos_left div.anime-info * +* +* *')?.textContent,
                quality: el.querySelector('div.infos_left div.anime-info p +* +* * +*')?.textContent,
                state: el.querySelector('div.infos_left div.anime-info * +* +* +* +* +* +* +* +* +* *')?.textContent,
                audio: el.querySelector('div.infos_left div.anime-info * +* +* +* +* +* +* +* +* +* +* *')?.textContent,
                views: el.querySelector('div.infos-img.text-center p')?.textContent,
                durationPerEp: el.querySelector('div.infos_left div.anime-info p span')?.textContent,
                studio: el.querySelector('div.infos_left div.anime-info * +* +* +* +* +* +* +* +* +* +* +* +* +* *')?.textContent,
                description: el.querySelector('div.infos_left div.anime-info div.anime-description p')?.textContent,
            })
        });

        await page?.close()
        return product
    }
    //---------------------
    //---------------------
}

// const scrap = new Puppet
// const data = await scrap.searchBA('dandandan')
// console.log(data)
// const single = await scrap.getSingleBA(data![0].link)
// console.log(single)