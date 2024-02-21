const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

input.focus();

let chaptersArray = getChaptersList() || [];


chaptersArray.forEach(chapter => {
    displayList(chapter);
});


button.addEventListener("click", () => {
    if (input.value != "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();

    } else {
        input.setAttribute("placeholder", "Enter a book and chapter");
        input.focus();
    }
});

function displayList(item) {
    const li = document.createElement('li');
    const delButton = document.createElement('button');
    delButton.setAttribute("aria-label", "delete scripture entry");
    
    li.textContent = item;
    delButton.textContent = "❌";
    delButton.classList.add("delete");
    li.append(delButton);
    list.appendChild(li);
    
    delButton.addEventListener("click", function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
};


function setChapterList() {
    localStorage.setItem("favBOMChapters", JSON.stringify(chaptersArray));
};

function getChaptersList() {
    return JSON.parse(localStorage.getItem("favBOMChapters")); 
};


function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}
