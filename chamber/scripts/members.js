const membersListURL = "https://smilingjenny.github.io/wdd230/chamber/data/members.json"
const membersSection = document.querySelector(".members")

async function getMembers() {
    const response = await fetch(membersListURL)
    const membersList = await response.json()
    displayMembers(membersList.members)
}

getMembers()


const displayMembers = (members) => {
    members.forEach(member => {
        let section = document.createElement("section")
    });
}