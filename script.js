const roseHint = document.getElementById("roseHint");
const boyMessage = document.getElementById("boyMessage");
const girlMessage = document.getElementById("girlMessage");
const boyMessage2 = document.getElementById("boyMessage2");
const finalRoseHint = document.getElementById("finalRoseHint");

const bgMusic = document.getElementById("bgMusic");

// First cloud appears after 3.5 seconds
setTimeout(function () {
    roseHint.classList.add("show");
}, 3500);


// First cloud click: music starts + cloud disappears
roseHint.addEventListener("click", function () {

    roseHint.classList.remove("show");

    

    bgMusic.play().catch(error => {
        console.log("Music error:", error);
    });

    // Boy's first cloud
    setTimeout(function () {
        boyMessage.classList.add("show");

        // Boy's cloud disappears, girl's cloud appears
        setTimeout(function () {
            boyMessage.classList.remove("show");
            girlMessage.classList.add("show");

            // Girl's cloud disappears, boy's next cloud appears
            setTimeout(function () {
                girlMessage.classList.remove("show");
                boyMessage2.classList.add("show");

                // Boy's cloud disappears, final girl's cloud appears
                setTimeout(function () {
                    boyMessage2.classList.remove("show");
                    finalRoseHint.classList.add("show");

                }, 4500);

            }, 4500);

        }, 4500);

    }, 500);

}, { once: true });

const passwordHearts = document.getElementById("password-hearts");

for (let i = 0; i < 35; i++) {
    const heart = document.createElement("span");

    heart.className = "heart";
    heart.textContent = "♡";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.top = Math.random() * 100 + "%";
    heart.style.fontSize = (14 + Math.random() * 18) + "px";
    heart.style.animationDelay = Math.random() * 8 + "s";
    heart.style.animationDuration = (7 + Math.random() * 6) + "s";

    passwordHearts.appendChild(heart);
}

const roseButton = document.getElementById("roseButton");
const opening = document.getElementById("opening");
const passwordScreen = document.getElementById("password-screen");


roseButton.addEventListener("click", function () {

    opening.style.display = "none";
    passwordScreen.style.display = "none";

    const memories = document.getElementById("memories");
    memories.style.display = "block";

    document.body.style.overflow = "auto";
    window.scrollTo(0, 0);

});


document.getElementById("dateButton").addEventListener("click", function () {
    const day = document.getElementById("day").value.trim();
    const month = document.getElementById("month").value.trim();
    const year = document.getElementById("year").value.trim();

    const dateError = document.getElementById("dateError");

    if (day === "25" && month === "11" && year === "2021") {

        dateError.textContent = "";

        passwordScreen.style.display = "none";

        const futurePage = document.getElementById("futurePage");
        futurePage.style.display = "block";

        document.body.style.overflow = "auto";
        window.scrollTo(0, 0);

    } else {
        dateError.textContent = "Did you forget it? ♡";
    }
});

 
const memoriesSection = document.getElementById("memories");
const photoVeil = document.getElementById("photoVeil");

window.addEventListener("scroll", function () {

    const rect = memoriesSection.getBoundingClientRect();

    const totalScroll = memoriesSection.offsetHeight - window.innerHeight;

    const scrolled = -rect.top;

    const progress = Math.max(
        0,
        Math.min(1, scrolled / totalScroll)
    );

    photoVeil.style.background =
        `rgba(255, 255, 255, ${progress * 0.75})`;

});

// Memories floating hearts

const memoryHearts = document.getElementById("memory-hearts");

for (let i = 0; i < 35; i++) {
    const heart = document.createElement("span");

    heart.className = "heart";
    heart.textContent = "♡";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.top = Math.random() * 100 + "%";
    heart.style.fontSize = (14 + Math.random() * 18) + "px";
    heart.style.animationDelay = Math.random() * 8 + "s";
    heart.style.animationDuration = (7 + Math.random() * 6) + "s";

    memoryHearts.appendChild(heart);
}

// Next button opens password page

document.getElementById("nextToPassword").addEventListener("click", function () {
    document.getElementById("memories").style.display = "none";

    const passwordScreen = document.getElementById("password-screen");
    passwordScreen.style.display = "flex";

    window.scrollTo(0, 0);
});


const envelope = document.getElementById("envelope");
const letterPaper = document.getElementById("letterPaper");
const letterHint = document.getElementById("letterHint");
const envelopeFlap = document.querySelector(".envelope-flap");
const envelopeSeal = document.querySelector(".envelope-seal");

envelope.addEventListener("click", function () {

    envelopeFlap.style.transform = "rotateX(180deg)";
    envelopeSeal.style.display = "none";

    letterHint.textContent = "A letter, written just for you ♡";

    setTimeout(function () {
        letterPaper.style.display = "block";
        letterPaper.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 700);

    envelope.style.pointerEvents = "none";

});
