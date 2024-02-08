const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
    if (input.value !== "") {
    } else {
        input.focus();
    }

    const li = document.createElement('li');
    const delButton = document.createElement('button');
    delButton.setAttribute("aria-label", "delete scripture entry")

    li.textContent = input.value;
    delButton.textContent = "❌";
    li.append(delButton);
    list.appendChild(li);

    delButton.addEventListener("click", () => {
        list.removeChild(li);
        input.focus();
    });

    input.focus();
    input.value = "";

});
