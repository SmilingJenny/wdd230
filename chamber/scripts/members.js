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
}
getMembers()


const displayMembers = (members) => {

    members.forEach(member => {
        const section = document.createElement("section")
        const logo = document.createElement("img")
        const memberInfo = [member.name, member.address, member.phoneNumber, member.websiteURL, member.membershipLevel, member.membershipYears, member.industry]

        section.setAttribute("class", "card")
        logo.setAttribute("src", member.logoFile)
        logo.setAttribute("alt", `${member.name} Logo`)
        logo.setAttribute("width", "50")
        logo.setAttribute("height", "75")
        logo.setAttribute("loading", "lazy")

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
    })
}