const btnReload = document.getElementById("reload");
const quoteText = document.querySelector("quotes__text");
const quoteAuthor = document.querySelector("quotes__author");

async function getQuote() {
    try {
        const response = await fetch('https://programming-quotes-api.herokuapp.com/quotes/random');
        const data = response.json();

        quoteText.textContent = data.en;
        quoteAuthor.textContent = data.author;
    } catch (error) {
        console.error(error);
    }

}

btnReload.addEventListener("click", getQuote);