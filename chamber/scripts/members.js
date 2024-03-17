async function getMembers() {
    const membersListURL = "https://smilingjenny.github.io/wdd230/chamber/data/members.json"
    const response = await fetch(membersListURL)
    const membersList = await response.json()
    displayMembers(membersList.members)
}
getMembers()


const displayMembers = (members) => {
    const membersDiv = document.getElementById("members")

    members.forEach(member => {
        const section = document.createElement("section")
        const logo = document.createElement("img")
        const memberInfo = [member.name, member.address, member.phoneNumber, member.websiteURL, member.membershipLevel, member.membershipYears, member.industry]

        section.setAttribute("class", "card")
        logo.setAttribute("src", member.logoFile)
        logo.setAttribute("alt", `${member.name} Logo`)

        section.appendChild(logo)
        function infoParagraphs(memberInfo) {
            memberInfo.forEach(property => {
                const p = document.createElement("p")
                p.textContent = property
                section.appendChild(p)
            });
        }
        infoParagraphs(memberInfo)

        membersDiv.appendChild(section)

        // const section = document.createElement("section")
        // const logo = document.createElement("img")
        // const infoPara = document.createElement("p")
        // const memberInfo = [member.name, member.address, member.phoneNumber, member.websiteURL, member.membershipLevel, member.membershipYears, member.industry]

        // section.setAttribute("class", "card")
        // logo.setAttribute("src", member.logoFile)
        // logo.setAttribute("alt", `${member.name} Logo`)
        // infoPara.innerHTML = memberInfo.join("<br>")
        // console.log(infoPara)
        
        // section.appendChild(logo)
        // section.appendChild(infoPara)
        // membersDiv.appendChild(section)

        // console.log(membersDiv)
    })
}