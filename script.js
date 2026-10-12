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

const coinEl = document.getElementById("coins");
const levelEl = document.getElementById("level");

if(coinEl){
coinEl.textContent = coins;
}

level = Math.floor(coins / 1000);

if(level < 1){
level = 1;
}

if(levelEl){
levelEl.textContent = level;
}
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

alert("🎁 Gift Received!");
}

function founderBoost(){

coins += 1000000;

updateProfile();

alert("👑 CEO BOOST ACTIVATED");
}

updateProfile();
