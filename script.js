const image = document.querySelector(".love-gif");
const msgDiv = document.querySelector(".msg");
const yesBtn = document.querySelector("#yes-btn");
const noBtn = document.querySelector("#no-btn");
const video = document.getElementById("bgVideo");

let step = 1;

/* ================= SMOOTH TRANSITION FUNCTIONS ================= */

// Smooth video change
function changeVideoSmooth(newSrc) {
    video.style.transition = "opacity 0.5s ease";
    video.style.opacity = 0;

    setTimeout(() => {
        video.src = newSrc;
        video.load();
        video.play();
        video.style.opacity = 1;
    }, 500);
}

// Smooth content change
function changeContentSmooth(newImage, newHTML) {
    image.style.transition = "opacity 0.4s ease";
    msgDiv.style.transition = "opacity 0.4s ease";

    image.style.opacity = 0;
    msgDiv.style.opacity = 0;

    setTimeout(() => {
        image.src = newImage;
        msgDiv.innerHTML = newHTML;

        image.style.opacity = 1;
        msgDiv.style.opacity = 1;
    }, 400);
}

/* ================= YES BUTTON ================= */

yesBtn.addEventListener("click", () => {

    changeContentSmooth(
        "images/i10.png",
        `
        <h1>Hehe.. I knew it! I love you too 😘🤭</h1>
        <p>You're the best 😁</p>
        <p>I'm so happy you said yes</p>
        <p>You make me smile every day</p>
        `
    );

    yesBtn.classList.add("hide");
    noBtn.classList.add("hide");

    changeVideoSmooth("images/v7.mp4");
});


/* ================= NO BUTTON ================= */

noBtn.addEventListener("click", () => {

    if (step === 1) {

        changeContentSmooth(
            "images/i1.png",
            `
            <p>Don't be so rude to me, my love 🥺</p>
            <p>Please think once again for me.</p>
            <h1>Will You Be my Valentine?</h1>
            `
        );
        step++;

    } else if (step === 2) {

        changeContentSmooth(
            "images/i3.png",
            `
            <p>Ahhhh... 😭 please naahhh... 🥺</p>
            <p>Please... 😭😭😭</p>
            <h1>Will You Be my Valentine?</h1>
            `
        );
        step++;

    } else if (step === 3) {

        changeContentSmooth(
            "images/i6.png",
            `
            <p>Bas ab bahot ho gaya,</p>
            <p>Shanti se maan ja ri chori 😒</p>
            <h1>Will You Be my Valentine?</h1>
            `
        );
        step++;

    } else if (step === 4) {

        changeContentSmooth(
            "images/i8.png",
            `
            <p>Nahi maani 😑</p>
            <p>Theek hai, ruko tum abhi batata hu</p>
            <p>Last chance de raha hu 😒</p>
            <h1>Will You Be my Valentine?</h1>
            `
        );
        step++;

    } else if (step === 5) {

        changeContentSmooth(
            "images/i17.png",
            `
            <p>Ab kar ke dikhao naa.. 😎😏</p>
            <h1>Will You Be my Valentine?</h1>
            `
        );

        noBtn.classList.add("hide");
    }
});