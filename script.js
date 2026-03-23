const image = document.querySelector(".love-gif");
const msgDiv = document.querySelector(".msg");
const yesBtn = document.querySelector("#yes-btn");
const noBtn = document.querySelector("#no-btn");
const video = document.getElementById("bgVideo");

let step = 1;

const yesState = {
    image: "images/i10.png",
    alt: "Happy Valentine illustration",
    blocks: [
        { tag: "h1", text: "Hehe.. I knew it! I love you too." },
        { tag: "p", text: "You're the best." },
        { tag: "p", text: "I'm so happy you said yes." },
        { tag: "p", text: "You make me smile every day." }
    ]
};

const noStates = [
    {
        image: "images/i1.png",
        alt: "Pleading Valentine illustration",
        blocks: [
            { tag: "p", text: "Don't be so rude to me, my love." },
            { tag: "p", text: "Please think once again for me." },
            { tag: "h1", text: "Will you be my Valentine?" }
        ]
    },
    {
        image: "images/i3.png",
        alt: "Emotional Valentine illustration",
        blocks: [
            { tag: "p", text: "Ahhh... please naahhh..." },
            { tag: "p", text: "Please..." },
            { tag: "h1", text: "Will you be my Valentine?" }
        ]
    },
    {
        image: "images/i6.png",
        alt: "Playful Valentine illustration",
        blocks: [
            { tag: "p", text: "Bas ab bahot ho gaya," },
            { tag: "p", text: "Shanti se maan ja ri chori." },
            { tag: "h1", text: "Will you be my Valentine?" }
        ]
    },
    {
        image: "images/i8.png",
        alt: "Last chance Valentine illustration",
        blocks: [
            { tag: "p", text: "Nahi maani." },
            { tag: "p", text: "Theek hai, ruko tum abhi batata hu." },
            { tag: "p", text: "Last chance de raha hu." },
            { tag: "h1", text: "Will you be my Valentine?" }
        ]
    },
    {
        image: "images/i17.png",
        alt: "Confident Valentine illustration",
        blocks: [
            { tag: "p", text: "Ab kar ke dikhao naa.." },
            { tag: "h1", text: "Will you be my Valentine?" }
        ]
    }
];

function renderMessage(blocks) {
    msgDiv.replaceChildren();

    blocks.forEach(({ tag, text }) => {
        const element = document.createElement(tag);
        element.textContent = text;
        msgDiv.appendChild(element);
    });
}

function changeVideoSmooth(newSrc) {
    video.style.transition = "opacity 0.5s ease";
    video.style.opacity = 0;

    setTimeout(() => {
        video.src = newSrc;
        video.load();

        const playPromise = video.play();

        if (playPromise instanceof Promise) {
            playPromise.catch(() => {
                // Ignore autoplay-related rejections after the source swap.
            });
        }

        video.style.opacity = 1;
    }, 500);
}

function changeContentSmooth(contentState) {
    image.style.transition = "opacity 0.4s ease";
    msgDiv.style.transition = "opacity 0.4s ease";

    image.style.opacity = 0;
    msgDiv.style.opacity = 0;

    setTimeout(() => {
        image.src = contentState.image;
        image.alt = contentState.alt;
        renderMessage(contentState.blocks);

        image.style.opacity = 1;
        msgDiv.style.opacity = 1;
    }, 400);
}

yesBtn.addEventListener("click", () => {
    changeContentSmooth(yesState);
    yesBtn.classList.add("hide");
    noBtn.classList.add("hide");
    changeVideoSmooth("images/v7.mp4");
});

noBtn.addEventListener("click", () => {
    if (step <= noStates.length) {
        changeContentSmooth(noStates[step - 1]);
        step++;

        if (step > noStates.length) {
            noBtn.classList.add("hide");
        }
    }
});
