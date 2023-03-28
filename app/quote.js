const btnReload = document.getElementById("reload");
const quoteText = document.querySelector(".quotes__text");
const quoteAuthor = document.querySelector(".quotes__author");

async function getQuote() {
    try {
        const response = await fetch('https://animechan.vercel.app/api/random');
        const data = await response.json();

        quoteText.textContent = data.quote;
        quoteAuthor.textContent = data.character;
    } catch (error) {
        console.error(error);
    }

}

btnReload.addEventListener("click", getQuote);