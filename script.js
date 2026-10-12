let coins = 5000;

function showPage(pageId){

document.querySelectorAll(".page")
.forEach(page=>{
page.classList.remove("active");
});

document.getElementById(pageId)
.classList.add("active");

}

function earnCoins(){

coins += 10;

document.getElementById("coins")
.innerText = coins;

alert("✅ +10 Coins");
}

function founderBoost(){

coins += 1000000;

document.getElementById("coins")
.innerText = coins;

alert("👑 CEO Boost Activated");
}
