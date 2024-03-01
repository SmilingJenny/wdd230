let copyRightYear = new Date()
document.getElementById("copyRightYear").textContent = copyRightYear.getFullYear();


const lastModifiedMessage = `Last Modified: ${document.lastModified}`;
document.getElementById('lastModified').textContent = lastModifiedMessage;

// form hidden date
const hiddenDate = document.querySelector("#date")
const dateNow = Date.now()
document.querySelector("#date").value = dateNow


