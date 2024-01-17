// let lastModifiedDate = new Date(document.lastModified);
// let copyRightYear = lastModifiedDate.getFullYear();

//const flagIcon = <img src="images/flag-favicon.io/favicon-16x16.png"></img>

// let siteAuthorInfo = `&copy ${copyRightYear} | Jennifer Walton - Utah, USA`;
// document.getElementById("siteAuthorInfo").textContent = siteAuthorInfo;


const lastModifiedMessage = `Last Modified: ${document.lastModified}`;
document.getElementById('lastModified').textContent = lastModifiedMessage;

