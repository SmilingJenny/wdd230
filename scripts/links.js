const baseURL = "https://smilingjenny.github.io/wdd230/"
const linksURL = "https://smilingjenny.github.io/wdd230/data/links.json"
const learningLinksList = document.querySelector("#learning-links")

async function getLinks() {
    const response = await fetch(linksURL)
    const data = await response.json()
    displayLinks(data.lessons)
}

getLinks()

const displayLinks = (weeks) => {
    weeks.forEach(week => {
        let link = document.createElement("li")
        let anchor = document.createElement("a")

        anchor.setAttribute("href", week.links[0].url)
        // Alt version:
        // anchor.setAttribute("href", week["links"][0]["url"])

        // Old version:
        //  anchor.setAttribute("href", week.links.url)
        
        anchor.setAttribute("target", "_blank")
        anchor.textContent = `${week.lesson} - ${week.links[0].title}`
        // console.log(anchor)

        link.innerHTML = anchor
        learningLinksList.appendChild(link)
    })
}
