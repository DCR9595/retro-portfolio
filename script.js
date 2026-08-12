/* =====================================
   CONTENT SECTIONS
===================================== */

function showSection(section) {

    let content = document.getElementById("content");
    let screen = document.querySelector(".game-screen");


    /* =====================================
       REMOVE PREVIOUS EFFECTS
    ===================================== */

    screen.classList.remove(
        "screen-shake",
        "crt-flash",
        "glitch"
    );

    content.classList.remove(
        "menu-exit",
        "menu-enter"
    );


    /* =====================================
       RESTART ANIMATIONS
    ===================================== */

    void screen.offsetWidth;
    void content.offsetWidth;


    /* =====================================
       START SCREEN EFFECTS
    ===================================== */

    screen.classList.add("screen-shake");
    screen.classList.add("crt-flash");
    screen.classList.add("glitch");


    /* =====================================
       OLD CONTENT EXITS
    ===================================== */

    content.classList.add("menu-exit");


    /* =====================================
       LOAD NEW CONTENT
    ===================================== */

    setTimeout(function() {


        /* =====================================
           ABOUT
        ===================================== */

        if (section === "about") {

            content.innerHTML = `

                <h2>ABOUT ME</h2>

                <p>
                    ▶ PLAYER INFORMATION
                </p>

                <p>
                    Hey! I'm Dhruv.
                </p>

                <p>
                    I'm an engineering student at the
                    Dayananda Sagar College of Engineering.
                </p>

                <p>
                    I'm currently learning how to build
                    websites and applications.
                </p>

                <p>
                    My current mission:
                    <br>
                    BUILD COOL THINGS.
                </p>

            `;

        }


        /* =====================================
           SKILLS
        ===================================== */

       else if (section === "skills") {

    content.innerHTML = `

        <h2>SKILLS</h2>

        <p>JAVA</p>

        <div class="bar">
            <div
                class="bar-fill xp"
                style="--xp: 70%;">
            </div>
        </div>


        <p>C++</p>

        <div class="bar">
            <div
                class="bar-fill xp"
                style="--xp: 80%;">
            </div>
        </div>


        <p>C</p>

        <div class="bar">
            <div
                class="bar-fill xp"
                style="--xp: 80%;">
            </div>
        </div>


        <p>HTML</p>

        <div class="bar">
            <div
                class="bar-fill xp"
                style="--xp: 70%;">
            </div>
        </div>


        <p>CSS</p>

        <div class="bar">
            <div
                class="bar-fill xp"
                style="--xp: 20%;">
            </div>
        </div>


        <p>JAVASCRIPT</p>

        <div class="bar">
            <div
                class="bar-fill xp"
                style="--xp: 30%;">
            </div>
        </div>

    `;

}

        /* =====================================
           PROJECTS
        ===================================== */

        else if (section === "projects") {

            content.innerHTML = `

                <h2>PROJECTS</h2>

                <p>
                    ▶ BLIND ASSISTING GLOVE
                </p>

                <p>
                    An ESP32-based project using sensors
                    and vibration feedback.
                </p>


                <p>
                    ▶ SOLAR POWER BANK
                </p>

                <p>
                    A portable power project involving
                    solar energy and battery management.
                </p>


                <p>
                    ▶ RETRO PORTFOLIO
                </p>

                <p>
                    This website.
                </p>

            `;

        }


        /* =====================================
           CONTACT
        ===================================== */

        else if (section === "contact") {

            content.innerHTML = `

                <h2>CONTACT</h2>

                <p>
                    ▶ COMMUNICATION TERMINAL
                </p>

                <p>
                    EMAIL:
                    dhrucr@gmail.com
                </p>

                <p>
                    GITHUB:
                    github.com/DCR9595
                </p>

                <p>
                    INSTAGRAM:
                    @dhruvvv.cr_
                </p>

            `;

        }


        /* =====================================
           NEW CONTENT ENTERS
        ===================================== */

        content.classList.remove("menu-exit");

        void content.offsetWidth;

        content.classList.add("menu-enter");


    }, 180);

}
/* =====================================
   SPIDER-MAN FORWARD + REVERSE ANIMATION
===================================== */

const spiderman = document.getElementById("spidermanAnimation");

let reverseAnimation = false;
let reverseFrame;


/* When the video finishes playing forward */

spiderman.addEventListener("ended", function () {

    reverseAnimation = true;

    reverseFrame = requestAnimationFrame(playReverse);

});


/* Play the video backwards */

function playReverse() {

    if (!reverseAnimation) {
        return;
    }

    spiderman.currentTime -= 0.02;

    if (spiderman.currentTime <= 0) {

        spiderman.currentTime = 0;

        reverseAnimation = false;

        cancelAnimationFrame(reverseFrame);

        return;
    }

    reverseFrame = requestAnimationFrame(playReverse);
}