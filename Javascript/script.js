trigger = document.getElementById("trigger");
text = document.getElementById("text");

trigger.addEventListener("click", () => {
    text.innerText = "Hello World!";
})