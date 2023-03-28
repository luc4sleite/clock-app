const btnReload = document.getElementById("reload");
const quoteText = document.querySelector("quotes__text");
const quoteAuthor = document.querySelector("quotes__author");

btnReload.addEventListener("click", reloadQuote);

function reloadQuote() {
    fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
    .then(response => response.json())
    .then(data => {
        quoteText.textContent = data.en;
        quoteAuthor.textContent = `- ${data.auhor}`;
    })
    .catch(error => console.log(error));

}