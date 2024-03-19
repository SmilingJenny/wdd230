const membersDiv = document.getElementById("members")
const gridBtn = document.getElementById("gridBtn")
const listBtn = document.getElementById("listBtn")

gridBtn.addEventListener("click", () => {
    membersDiv.classList.add("grid")
    membersDiv.classList.remove("list")
})

listBtn.addEventListener("click", () => {
    membersDiv.classList.add("list")
    membersDiv.classList.remove("grid")
})


async function getMembers() {
    const membersListURL = "https://smilingjenny.github.io/wdd230/chamber/data/members.json"
    const response = await fetch(membersListURL)
    const membersList = await response.json()
    displayMembers(membersList.members)
    // createSpotlight(membersList.members)
    displaySpotlight(membersList.members)
}
getMembers()

const displayMembers = (members) => {

    members.forEach(member => {
        const section = document.createElement("section")
        const logo = document.createElement("img")
        const memberInfo = [member.name, member.address, member.phoneNumber, member.websiteURL, `Membership Level: ${member.membershipLevel}`, `Membership: ${member.membershipYears}`, `Industry: ${member.industry}`]

        section.setAttribute("class", "card")
        logo.setAttribute("src", member.logoFile)
        logo.setAttribute("alt", `${member.name} Logo`)
        logo.setAttribute("width", "50")
        logo.setAttribute("height", "75")
        logo.setAttribute("loading", "lazy")

        section.appendChild(logo)
        function infoParagraphs(memberInfo) {
            memberInfo.forEach((property, index) => {
                if (index !== 3) {
                const p = document.createElement("p")
                p.textContent = property
                section.appendChild(p)
            } else {
                const a = document.createElement("a")
                a.setAttribute("href", "#")
                a.textContent = property
                section.appendChild(a)
            }
            });
        }
        infoParagraphs(memberInfo)
        membersDiv.appendChild(section)
    })
}

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
        spotLightCard.setAttribute("class", "card")
        spotLightCard.textContent = `${spotLight.name} ${spotLight.membershipLevel} Blurb`
        // working to this point
        console.log(spotLightCard.textContent)
        
        // not working for some reason
        // spotLightSection.appendChild(spotLightCard)
        // console.log(spotLightSection.textContent)
        });
}

    


// const createSpotlight = (members) => {
//     const eliteList = []

//     members.forEach(member => {
//         if (member.membershipLevel == "Silver" || member.membershipLevel == "Gold" )
//         eliteList.push(member)
//     });

//     function shuffle(eliteList) {
//         return eliteList.sort (() => Math.random()-0.5)
//     }
//     shuffle(eliteList)
    
//     displaySpotlight(eliteList)
// }

// const displaySpotlight = (eliteList) => {
//     const spotlightSection = document.querySelector(".spotlight")
//     const threeSpotLights = eliteList.slice(0, 3)    
    
//     threeSpotLights.forEach(spotlight => {
//         const spotlightCard = document.createElement("section")
//         spotlightCard.setAttribute("class", "card")
//         spotlight.textContent = spotlight
//         spotlightSection.appendChild(spotlightCard)
        
//     });