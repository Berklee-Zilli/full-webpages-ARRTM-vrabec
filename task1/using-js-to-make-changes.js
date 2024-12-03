
/// change the title of the page
document.title = "Artem"

/// change the <h1> tag in the header to say "TASK 1"
document.querySelector("header h1").textContent = "TASK 1"

/// underneath h1, change the text to say a description of you
document.getElementById("intro").textContent = "My name is Artem and I love coding inside Java Script, my favorite of them all!"

/// change the title of the list to be "List of things I like "
document.querySelector("#list-of-things-i-like h2").textContent = "List of things I like"


/// change the elements
document.querySelectorAll(".list-item")[0].textContent = "Sing"
document.querySelectorAll(".list-item")[1].textContent = "produce music"
document.querySelectorAll(".list-item")[2].textContent = "Walk"


