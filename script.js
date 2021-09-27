const mainNav = document.querySelector(".mainNav");

const homeBtn = document.querySelector(".home");
const homeMainDiv = document.querySelector(".homeMainDiv");
const twitterBtn = document.querySelector(".twitter");
const twitterMainDiv = document.querySelector(".twitterMainDiv");
const bellBtn = document.querySelector(".bell");
const bellMainDiv = document.querySelector(".bellMainDiv");
const userBtn = document.querySelector(".user");
const userMainDiv = document.querySelector(".userMainDiv");

function onClickAll (btn, classList, btnDiv) {
    btn.classList.add(classList);
    btnDiv.classList.add("homeDiv");
}

function onClickCancelOther (cBtn, cClassList, cBtnDiv) {
    cBtn.classList.remove(cClassList);
    cBtnDiv.classList.remove("homeDiv");
}

function onClickedHomeBtn () {
    onClickAll(homeBtn, "homeScript", homeMainDiv);
    onClickCancelOther(twitterBtn, "homeScript", twitterMainDiv);
    onClickCancelOther(bellBtn, "homeScript", bellMainDiv);
    onClickCancelOther(userBtn, "homeScript", userMainDiv);
    bellMainDiv.style.backgroundColor = "#fff";
    mainNav.style.background = "#ffcc80";
    twitterMainDiv.style.backgroundColor = "#fff";
    userMainDiv.style.backgroundColor = "#fff";

    if (twitterBtn || bellBtn || userBtn) {
        twitterBtn.style.animation = "home 0.4s";
        bellBtn.style.animation = "home 0.4s";
        userBtn.style.animation = "home 0.4s";

        twitterBtn.style.animation = "none";
        bellBtn.style.animation = "none";
        userBtn.style.animation = "none";
    }
}

function onClickTwitterBtin () {
    onClickAll(twitterBtn, "homeScript", twitterMainDiv);
    onClickCancelOther(homeBtn, "homeScript", homeMainDiv);
    onClickCancelOther(bellBtn, "homeScript", bellMainDiv);
    onClickCancelOther(userBtn, "homeScript", userMainDiv);
    bellMainDiv.style.backgroundColor = "#fff";
    userMainDiv.style.backgroundColor = "#fff";
    mainNav.style.backgroundColor =  "rgb(129, 212, 250)";
    twitterMainDiv.style.backgroundColor = "rgb(129, 212, 250)";
    twitterMainDiv.style.margin = "0";
}

function onClickBellBtn () {
    onClickAll(bellBtn, "homeScript", bellMainDiv);
    onClickCancelOther(twitterBtn, "homeScript", twitterMainDiv);
    onClickCancelOther(homeBtn, "homeScript", homeMainDiv);
    onClickCancelOther(userBtn, "homeScript", userMainDiv);
    mainNav.style.backgroundColor =  "rgb(197, 225, 165)";
    bellMainDiv.style.backgroundColor = "rgb(197, 225, 165)";
    twitterMainDiv.style.backgroundColor = "#fff";
    userMainDiv.style.backgroundColor = "#fff";
    bellMainDiv.style.margin = "0";

}

function onClickUserBtn () {
    onClickAll(userBtn, "homeScript", userMainDiv);
    onClickCancelOther(twitterBtn, "homeScript", twitterMainDiv);
    onClickCancelOther(homeBtn, "homeScript", homeMainDiv);
    onClickCancelOther(bellBtn, "homeScript", bellMainDiv);
    mainNav.style.backgroundColor =  "rgb(206, 147, 216)";
    userMainDiv.style.backgroundColor = "rgb(206, 147, 216)";
    bellMainDiv.style.backgroundColor = "#fff";
    twitterMainDiv.style.backgroundColor = "#fff";
    userMainDiv.style.marginLeft = "0";
    userMainDiv.style.right = "45.6rem";

}

homeBtn.addEventListener("click", onClickedHomeBtn);
twitterBtn.addEventListener("click", onClickTwitterBtin);
bellBtn.addEventListener("click", onClickBellBtn);
userBtn.addEventListener("click", onClickUserBtn);