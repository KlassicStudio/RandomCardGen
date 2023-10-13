let cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let icons = ['♠', '♣', '♥', '♦' ];

function dealer() {

    let randomCards = cards[Math.floor(Math.random() * cards.length)];
    let randomIcons = icons[Math.floor(Math.random() * icons.length)];


        document.querySelector('.top').innerHTML = randomIcons;
        document.querySelector('.bottom').innerHTML = randomIcons;
        document.querySelector('.middle').innerHTML = randomCards;

             if (randomIcons === '♥') {
               document.getElementById("icon-top").innerHTML=`<span style="color:red">♥</span>`;
               document.getElementById("icon-bottom").innerHTML=`<span style="color:red">♥</span>`;
            }

             if (randomIcons === '♦') {
               document.getElementById("icon-top").innerHTML=`<span style="color:red">♦</span>`;
               document.getElementById("icon-bottom").innerHTML=`<span style="color:red">♦</span>`;
            }
    
             if (randomCards==='K') {
               document.getElementById("value").innerHTML=`<img src="assets/img/king.jpg" alt=""></img>`;
              
            }   

             if (randomCards==='Q') {
               document.getElementById("value").innerHTML=`<img src="assets/img/queen.jpg" alt=""></img>`;
              
            }

             if (randomCards==='J') {
              document.getElementById("value").innerHTML=`<img src="assets/img/jack.jpg" alt=""></img>`;
         
            }


}

