document.addEventListener('DOMContentLoaded', () => { 

    //===
    // VARIABLES
    //===
    const DATE_TARGET = new Date('08/28/2023 0:00 AM');
    // DOM for render
    const SPAN_DAYS = document.querySelector('span#days');
    const SPAN_HOURS = document.querySelector('span#hours');
    const SPAN_MINUTES = document.querySelector('span#minutes');
    const SPAN_SECONDS = document.querySelector('span#seconds');
    // Milliseconds for the calculations
    const MILLISECONDS_OF_A_SECOND = 1000;
    const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
    const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
    const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24

    //===
    // FUNCTIONS
    //===

    /**
    * Method that updates the countdown and the sample
    */
    function updateCountdown() {
        // Calcs
        const NOW = new Date()
        const DURATION = DATE_TARGET - NOW;
        const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
        const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
        const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
        const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);
        // Thanks Pablo Monteserín (https://pablomonteserin.com/cuenta-regresiva/)

        // Render
        SPAN_DAYS.textContent = REMAINING_DAYS;
        SPAN_HOURS.textContent = REMAINING_HOURS;
        SPAN_MINUTES.textContent = REMAINING_MINUTES;
        SPAN_SECONDS.textContent = REMAINING_SECONDS;
    }

    //===
    // INIT
    //===
    updateCountdown();
    // Refresh every second
    setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);
});

/*Eventos del menu*/
const menu1=document.querySelectorAll(".efecto1");
menu1.forEach(menu=>menu.addEventListener("mouseover",()=>{
    menu.style.color="#ec5242";
}))

menu1.forEach(menu=>menu.addEventListener("mouseout",()=>{
    menu.style.color="grey";
}))
/*efecto prgramacon*/
const container1=document.querySelectorAll(".efecto2");
container1.forEach(m=>m.addEventListener("mouseover",()=>{
    m.style.border="solid white 2px";
}))
container1.forEach(m=>m.addEventListener("mouseout",()=>{
    m.style.border="none";
}))
/*efecto container2*/
const container2=document.querySelectorAll(".efecto3");
container2.forEach(x=>x.addEventListener("mouseover",()=>{
    x.style.filter="grayscale(100%)";
    x.style.transform="scale(1.3)"
}))
container2.forEach(x=>x.addEventListener("mouseout",()=>{
    x.style.filter="grayscale(0%)";
    x.style.transform="scale(1)"
}))

/*efecto container 3*/
const container3=document.querySelectorAll(".efecto4");
container3.forEach(i=>i.addEventListener("mouseover",()=>{
    i.style.transform="scale(1.3)"
}))
container3.forEach(i=>i.addEventListener("mouseout",()=>{
    i.style.transform="scale(1)"
}))



