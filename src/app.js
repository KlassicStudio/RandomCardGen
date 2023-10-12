let cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let icons = ['♠', '♣', '♥', '♦' ];

let randomCards = cards[Math.floor(Math.random() * cards.length)];
let randomIcons = icons[Math.floor(Math.random() * icons.length)];

window.onload = () => {
    document.querySelector('.top').innerHTML = randomIcons;
    document.querySelector('.bottom').innerHTML = randomIcons;
    document.querySelector('.middle').innerHTML = randomCards;

    if (randomIcons === '♥') {
        document.getElementById("icon-top").innerHTML=`<span style="color:red">♥</span>`;
    }

    if (randomIcons === '♥') {
        document.getElementById("icon-bottom").innerHTML=`<span style="color:red">♥</span>`;
    }

    if (randomIcons === '♦') {
        document.getElementById("icon-top").innerHTML=`<span style="color:red">♦</span>`;
    }

    if (randomIcons === '♦') {
        document.getElementById("icon-bottom").innerHTML=`<span style="color:red">♦</span>`;
    }

};



function reloadPage() {
    location.reload();
  }

console.log(randomCards + randomIcons);

