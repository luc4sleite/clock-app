# Clock app

Esta é uma solução ao [Clock app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/clock-app-LMFaxFwrM).

## Índice

- [Visão geral](#visão-geral)
  - [O desafio](#o-desafio)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Construído com](#construído-com)
  - [O que eu aprendi](#o-que-eu-aprendi)
  - [Aprendizado contínuo](#aprendizado-contínuo)
  - [Recursos úteis](#recursos-úteis)
- [Autor](#autor)

## Visão geral

### O desafio

Os usuários poderão:

- Visualizar o layout de acordo com o aparelho que estiver utilizando
- Ver as mudanças de estilos conforme interage com a página
- Visualizar a hora e a localização atual com base no IP de acesso
- Visualizar informações adicionais sobre o dia atual, como: dia do ano, dia da semana, número da semana no ano
- Ser recebido com uma saudação inicial conforme o horário do dia e ver a imagem de fundo alterar conforme o horário e o dispositivo de acesso
- Gerar citações aletórias de personagens de animes ao clicar no botão de recarregar próximo do texto

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## Meu processo

### Construído com

- Tags HTML5 semânticas
- CSS media queries
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript
- [World Time API](https://worldtimeapi.org/api/ip)
- [ipify API](https://api.ipify.org/?format=json)
- [IP Geolocation API](https://freegeoip.app/)
- [Animechan](https://animechan.vercel.app/docs#random-quote)


### O que eu aprendi

Neste projeto eu pude aprimorar minhas habilidades com JavaScript, principal na utilização de funções assíncronas para requisições de API. Também melhorei a responsividade dos meus projetos através da utilização de media querys.

Uma parte do código que estou muito orgulho foi conseguir demonstrar a localização do usuário através do seu IP, porém, para que isso acontecesse tive que utilizar duas API, uma para capturar o IP do usuário e outra para utilizar esse IP na localização, conforme a seguir:
```js
async function getIp() {
    try {
        const response = await fetch('https://api.ipify.org/?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function showLocation() {
    const ip = await getIp();
    const apiUrl = `https://api.ipbase.com/v2/info?apikey=6zya6oHfBkMRYp3iri5i2Ua4ZUEbeQlS0ekeo8Wf&language=en&ip=${ip}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        const city = data.data.location.city.name;
        const cityElement = document.getElementById("city");
        cityElement.textContent = city;
        
        const country = data.data.location.country.alpha2;
        const countryElement = document.getElementById("country");
        countryElement.textContent = country;
    } catch (error) {
        console.error(error);
        alert("It wasn't possible to get the current location");
    }
}

showLocation();
```

### Aprendizado contínuo

Focarei em criar o próximo projeto utilizando o React juntamente com o TypeScript

### Recursos úteis

- [ipify API](https://api.ipify.org/?format=json) - me ajudou a capturar o IP do usuário e utiliza-lo na API para localização.

## Autor

- LinkedIn - [Lucas Gonçalves Leite](https://www.linkedin.com/in/lucas-g-leite/)
- Frontend Mentor - [Lucas Leite](https://www.frontendmentor.io/profile/luc4sleite)

