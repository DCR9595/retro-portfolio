/* =====================================
   CONTENT SECTIONS
===================================== */

function showSection(section) {

    let content = document.getElementById("content");


    /* ABOUT */

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
                I'm an engineering student At the Dayananda Sagar College of Engineering, Bangalore. Im currently pursuing my Bachelors in Electrical and Electronics Engineering. I have quite a few interests in coding and electronics. In my free time, I like to play games, watch movies and anime, and listen to music. I play guitar and sing as well. I wish to be my fit day by day and make the most of my life. I want to be a better version of myself every day.

            </p>

            <p>
                I'm currently learning how to build
                websites and applications.
            </p>

            <p>
                My current mission:
                BUILD COOL THINGS.
            </p>

        `;

    }


    /* SKILLS */

    else if (section === "skills") {

        content.innerHTML = `

            <h2>SKILLS</h2>

            <p>
                JAVA
            </p>

            <div class="bar">
                <div class="bar-fill xp"
                     style="width: 70%;">
                </div>
            </div>


            <p>
                C++
            </p>

            <div class="bar">
                <div class="bar-fill xp"
                     style="width: 80%;">
                </div>
            </div>


            <p>
                C
            </p>

            <div class="bar">
                <div class="bar-fill xp"
                     style="width: 80%;">
                </div>
            </div>


            <p>
                HTML
            </p>

            <div class="bar">
                <div class="bar-fill xp"
                     style="width: 70%;">
                </div>
            </div>


            <p>
                CSS
            </p>

            <div class="bar">
                <div class="bar-fill xp"
                     style="width: 20%;">
                </div>
            </div>


            <p>
                JAVASCRIPT
            </p>

            <div class="bar">
                <div class="bar-fill xp"
                     style="width: 30%;">
                </div>
            </div>

        `;

    }


    /* PROJECTS */

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


    /* CONTACT */

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

}