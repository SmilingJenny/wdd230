async function getEliteMembers() {
    const membersListURL = "https://smilingjenny.github.io/wdd230/chamber/data/members.json"
    const response = await fetch(membersListURL)
    const membersList = await response.json()
    displaySpotlight(membersList.members)
}
getEliteMembers()

const displaySpotlight = (members) => {
    // create filtered and randomized array of members
    const eliteList = []

    members.forEach(member => {
        if (member.membershipLevel == "Silver" || member.membershipLevel == "Gold" )
        eliteList.push(member)
    });

    function shuffle(eliteList) {
        return eliteList.sort (() => Math.random()-0.5)
    }
    shuffle(eliteList)
    
    // display three of the elite members
    const threeSpotlights = eliteList.slice(0, 3)    
    const spotlightSection = document.querySelector(".spotlight")
    
    threeSpotlights.forEach(spotlight => {
        const spotlightCard = document.createElement("section")
        const logo = document.createElement("img")
        const name = document.createElement("p")
        const level = document.createElement("p")
        const blurb = document.createElement("p")
        
        spotlightCard.setAttribute("class", "card")
        logo.setAttribute("src", spotlight.logoFile)
        logo.setAttribute("alt", `${spotlight.name} Logo`)
        logo.setAttribute("width", "50")
        logo.setAttribute("height", "75")
        logo.setAttribute("loading", "lazy")
        name.textContent = spotlight.name
        level.textContent = `Membership Level: ${spotlight.membershipLevel}`
        blurb.textContent = spotlight.spotlightBlurb
        
        spotlightCard.appendChild(logo)
        spotlightCard.appendChild(name)
        spotlightCard.appendChild(level)
        spotlightCard.appendChild(blurb)
        spotlightSection.appendChild(spotlightCard)
    });
}
