const profileImg = document.getElementById("profile-img");
const nameContainer = document.getElementById("name-container");
const emailContainer = document.getElementById("email-container");
const birthdayContainer = document.getElementById("birthday-container");
const addressContainer = document.getElementById("address-container");
const phoneContainer = document.getElementById("phone-container");
const loginContainer = document.getElementById("login-container");

const profile = document.getElementById("profile");
const names = document.getElementById("name");
const email = document.getElementById("email");
const birthday = document.getElementById("birthday");
const address = document.getElementById("address");
const phone = document.getElementById("phone");
const login = document.getElementById("login");
const all = document.getElementById("all");
const refresh = document.getElementById("refresh");

profile.onclick = function(){
    hideAll();
    profileImg.style.display = "block";
}

names.onclick = function(){
    hideAll();
    nameContainer.style.display = "block";
}

email.onclick = function(){
    hideAll();
    emailContainer.style.display = "block";
}

birthday.onclick = function(){
    hideAll();
    birthdayContainer.style.display = "block";
}

address.onclick = function(){
    hideAll();
    addressContainer.style.display = "block";
}

phone.onclick = function(){
    hideAll();
    phoneContainer.style.display = "block";
}

login.onclick = function(){
    hideAll();
    loginContainer.style.display = "block";
}

all.onclick = function(){
    profileImg.style.display = "block";
    const allText = document.querySelectorAll("h1");
    for(let i = 0; i < allText.length; i++){
        allText[i].style.display = "block";
    }
}

refresh.onclick = function(){
    let random = Math.floor(Math.random()*data.results.length);
    let user = data.results[random];
    assignInformation(user);
}

refresh.onclick();

function assignInformation(user){
    profileImg.src = user.picture.large;
    const allText = document.querySelectorAll("h1");
    for(let i = 0; i < allText.length; i++){
        if(i == 0){
            nameContainer.innerText = user.name.first + " " +user.name.last;
        }else if(i == 1){
            emailContainer.innerText = user.email;
        }else if(i == 2){
            birthdayContainer.innerText = user.dob.date.substring(0,user.dob.date.indexOf("T"));
        }else if(i == 3){
            addressContainer.innerText = user.location.street.number + " " + user.location.street.name;
        }else if(i == 4){
            phoneContainer.innerText = user.phone;
        }else if(i == 5){
            loginContainer.innerText = "Username: " + user.login.username + "\nPassword: " + user.login.password;
        }
    }
}

function hideAll(){
    profileImg.style.display = "none";
    const allText = document.querySelectorAll("h1");
    for(let i = 0; i < allText.length; i++){
        allText[i].style.display = "none";
    }
}