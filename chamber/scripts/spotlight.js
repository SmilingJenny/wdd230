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
    const threeSpotLights = eliteList.slice(0, 3)    
    const spotLightSection = document.querySelector(".spotlight")
    
    threeSpotLights.forEach(spotLight => {
        const spotLightCard = document.createElement("section")
        const logo = document.createElement("img")
        const name = spotLight.name
        const level = spotLight.membershipLevel
        const blurb = spotLight.blurb
        
        spotLightCard.setAttribute("class", "card")
        logo.setAttribute("src", spotLight.logoFile)
        logo.setAttribute("alt", `${spotLight.name}'s Logo`)
        
        spotLightCard.appendChild(logo)
        spotLightCard.appendChild(name)
        spotLightCard.appendChild(level)
        spotLightCard.appendChild(blurb)
        spotLightSection.appendChild(spotLightCard)
        // console.log(spotLightSection.textContent)
    });
}
