let coins = 5000;
let level = 1;

function showPage(pageId){

document
.querySelectorAll(".page")
.forEach(page=>{

page.classList.remove("active");

});

document
.getElementById(pageId)
.classList.add("active");

}

function updateProfile(){

document
.getElementById("coins")
.innerText = coins;

level = Math.floor(coins/1000);

if(level < 1){
level = 1;
}

document
.getElementById("level")
.innerText = level;

}

function earnCoins(){

coins += 10;

updateProfile();

alert("❤️ +10 Coins");

}

function videoView(){

coins += 5;

updateProfile();

alert("👀 +5 Coins");

}

function gift(amount){

coins += amount;

updateProfile();

alert("🎁 Gift received!");
}

function founderBoost(){

coins += 1000000;

updateProfile();

alert("👑 CEO BOOST ACTIVATED");
}

updateProfile();
