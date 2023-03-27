async function showCurrentTime() {
  try {
    const response = await fetch("http://worldtimeapi.org/api/ip");
    const data = await response.json();

    const datetime = data.datetime;
    const currentTime = datetime.slice(11, 16);

    const currentTimeElement = document.querySelector(".time__number");
    currentTimeElement.textContent = currentTime;

    const hour = datetime.slice(11, 13);
    const greetingBox = document.querySelector(".greeting");

    if (hour >= 5 && hour < 18) {
      greetingBox.innerHTML = `
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.78 19.417c.594 0 1.083.449 1.146 1.026l.006.125v1.842a1.152 1.152 0 01-2.296.125l-.007-.125v-1.842c0-.636.516-1.151 1.152-1.151zM6.382 17.18a1.15 1.15 0 01.09 1.527l-.09.1-1.302 1.303a1.152 1.152 0 01-1.718-1.528l.09-.1 1.302-1.302a1.15 1.15 0 011.628 0zm12.427 0l1.303 1.303a1.15 1.15 0 11-1.628 1.627L17.18 18.81a1.15 1.15 0 111.628-1.628zM11.781 5.879a5.908 5.908 0 015.901 5.902 5.908 5.908 0 01-5.901 5.902 5.908 5.908 0 01-5.902-5.902 5.908 5.908 0 015.902-5.902zm10.63 4.75a1.151 1.151 0 110 2.303h-1.843a1.151 1.151 0 110-2.303h1.842zm-19.418 0a1.151 1.151 0 01.126 2.296l-.125.007H1.15a1.151 1.151 0 01-.125-2.296l.125-.007h1.842zm1.985-7.268l.1.09 1.303 1.302a1.151 1.151 0 01-1.528 1.718l-.1-.09L3.45 5.08A1.15 1.15 0 014.978 3.36zm15.133.09c.45.449.45 1.178 0 1.628L18.808 6.38a1.151 1.151 0 11-1.628-1.628l1.303-1.303c.449-.449 1.178-.449 1.628 0zM11.781 0c.636 0 1.151.515 1.151 1.151v1.843a1.152 1.152 0 01-2.303 0V1.15C10.63.515 11.145 0 11.781 0z" fill="#FFF" fill-rule="nonzero"/></svg>
            <span class="greeting__text">Good Morning</span>
            `;
        document.body.style.backgroundImage = 'var(--bg-mobile-image-day)';
      greetingText.textContent = "Good Morning";
    } else {
      greetingBox.innerHTML = `
            <svg width="23" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M22.157 17.366a.802.802 0 00-.891-.248 8.463 8.463 0 01-2.866.482c-4.853 0-8.8-3.949-8.8-8.8a8.773 8.773 0 013.856-7.274.801.801 0 00-.334-1.454A7.766 7.766 0 0012 0C5.382 0 0 5.382 0 12s5.382 12 12 12c4.2 0 8.02-2.134 10.218-5.709a.805.805 0 00-.061-.925z" fill="#FFF" fill-rule="nonzero"/></svg>
            <span class="greeting__text">Good Evening </span>
            `;
        document.body.style.backgroundImage = 'var(--bg-mobile-image-night)';
    }

    const timezone = document.getElementById("timezone");
    timezone.textContent = data.timezone;

    const dayOfTheYear = document.getElementById("dayOfTheYear");
    dayOfTheYear.textContent = data.day_of_year;

    const dayOfTheWeek = document.getElementById("dayOfTheWeek");
    dayOfTheWeek.textContent = data.day_of_week

    const weekNumber = document.getElementById("weekNumber");
    weekNumber.textContent = data.week_number;
    
  } catch (error) {
    console.error(error);
    alert("It wasn't possible to get the current time");
  }
}


showCurrentTime();

setInterval(showCurrentTime, 5000);
