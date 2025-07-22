messages = {
    "SP": {name: "Shehzad", message: "Christian, wish you a fantastic day filled with happiness and a year ahead full of success and fun!"},
    "DW": {name: "David", message: "Happy Birthday Christian! Wishing you a great year ahead filled with success, growth and good moments.  Hope you have a wonderful day!"},
    "LL": {name: "Lucie", message: "Wishing you a great day filled with caffeine, application forms to test and only minimal tech emergencies!  Thanks for your help on some of the projects  - it's great to see such talent coming up!"},
    "JW": {name: "Jai Part 1/2", message: "Hey Christian, wishing you a fantastic day filled with laughter, good vibes, and maybe even a slice of cake or two! It’s been a pleasure having you on the team. (See Part 2)"},
    "JW2": {name: "Jai Part 2/2", message: "Fun fact: As you share a name with my son, I might be a little biased, but I think people with your name are destined for greatness. 😉 \nEnjoy your day, and here’s to many more exciting adventures ahead!"},
    "PB": {name: "Pragna", message: "Happy Birthday, Christian! May your day be filled with love, great memories, and the people who make life special. Here's to another year of growth, happiness, and amazing adventures \u{1F60E}"},
    "BK": {name: "Bhawanjeet", message: "Happy B'day Christian! Wishing you a year full of growth, success and happiness \u{1F642}"},
    "LS": {name: "Lalitkumar", message: "Hey Christian, Wish you a Happy birthday! I hope all your birthday wishes and dreams come true. Stay blessed!"},
    "MW": {name: "Mary", message: "Happy Birthday, Christian!  May you have a wonderful day and a fabulous year!"}
};

let currentMessageName = "";
let envelopeOpen = false;

const envelope = document.querySelector('.envelope-wrapper');
envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
    envelopeOpen = (envelope.classList.contains('flap'));
    console.log(envelopeOpen);

});

document.addEventListener("click", function(event) {
  if (event.target.classList.contains("person")) {
    let personMessage = messages[event.target.value].message;
    let personName = messages[event.target.value].name;
    
    if (!personMessage || !personName){
        console.log("returned");
        return;}
    
    const envelope = document.querySelector('.envelope-wrapper');

    let timerForEnvelopeOpen = 0;

    if (envelope.classList.contains('flap')){
        timerForEnvelopeOpen = 1110;
        document.querySelector('.envelope-wrapper').classList.remove('flap');
    }

    lockEnvelope();
    buttonLock();

    setTimeout(() => {
        document.getElementById('message').textContent = personMessage;
        document.getElementById('name-sender').textContent = personName;
        document.querySelector('.envelope-wrapper').classList.add('flap');
        envelopeOpen = (envelope.classList.contains('flap'));
            console.log(envelopeOpen);
    }, timerForEnvelopeOpen);



  }
});


function buttonLock(){
    // Get all buttons
    const buttons = document.querySelectorAll("button");

    // Disable all
    buttons.forEach(button => button.disabled = true);

    // Re-enable 
    setTimeout(() => {
        buttons.forEach(button => button.disabled = false);
    }, 2000);
}

function lockEnvelope(){
    document.getElementById('envelope').style.pointerEvents = 'none';

    setTimeout(() => {
        document.getElementById('envelope').style.pointerEvents = 'auto';
    }, 2000);
}