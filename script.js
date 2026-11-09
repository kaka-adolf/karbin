/* =====================================================
   KARBIN MUHAMMAD
   3D SOCIAL MEDIA
===================================================== */


/* =====================================================
   3D CARD
===================================================== */

const card =
    document.getElementById("profileCard");


const isTouchDevice =
    window.matchMedia(
        "(pointer: coarse)"
    ).matches ||
    "ontouchstart" in window;



if (!isTouchDevice) {

    card.addEventListener(
        "mousemove",
        function (event) {

            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateY =
                ((x - centerX) /
                centerX) * 5;


            const rotateX =
                ((centerY - y) /
                centerY) * 5;


            card.style.transform =
                `
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                `;

        }
    );


    card.addEventListener(
        "mouseleave",
        function () {

            card.style.transform =
                "rotateX(0deg) rotateY(0deg)";

        }
    );

}



/* =====================================================
   SOCIAL CARD CLICK EFFECT
===================================================== */

const socialCards =
    document.querySelectorAll(
        ".social-card"
    );


socialCards.forEach(
    function (card) {

        card.addEventListener(
            "click",
            function () {

                this.style.transform =
                    "scale(.975)";


                setTimeout(
                    () => {

                        this.style.transform =
                            "";

                    },
                    150
                );

            }
        );

    }
);



/* =====================================================
   SHARE
===================================================== */

const shareButton =
    document.getElementById(
        "shareButton"
    );


const toast =
    document.getElementById(
        "toast"
    );


shareButton.addEventListener(
    "click",
    async function () {

        const shareData = {

            title:
                "Karbin Muhammad",

            text:
                "Karbin Muhammad | Social Media",

            url:
                window.location.href

        };


        try {

            if (
                navigator.share
            ) {

                await navigator.share(
                    shareData
                );

            }

            else if (
                navigator.clipboard
            ) {

                await navigator.clipboard.writeText(
                    window.location.href
                );


                showToast(
                    "بەستەرەکە کۆپی کرا"
                );

            }

            else {

                showToast(
                    "Share لەم وێبسایتەدا بەردەست نییە"
                );

            }

        }

        catch (error) {

            // User closed the share menu.

        }

    }
);



/* =====================================================
   TOAST
===================================================== */

let toastTimer;


function showToast(message) {

    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            function () {

                toast.classList.remove(
                    "show"
                );

            },
            2200
        );

}



/* =====================================================
   PARALLAX LIGHT
===================================================== */

if (!isTouchDevice) {

    const lightOne =
        document.querySelector(
            ".light-1"
        );


    const lightTwo =
        document.querySelector(
            ".light-2"
        );


    document.addEventListener(
        "mousemove",
        function (event) {

            const x =
                (
                    event.clientX /
                    window.innerWidth -
                    0.5
                ) * 35;


            const y =
                (
                    event.clientY /
                    window.innerHeight -
                    0.5
                ) * 35;


            lightOne.style.transform =
                `translate(${x}px, ${y}px)`;


            lightTwo.style.transform =
                `translate(${-x}px, ${-y}px)`;

        }
    );

}



/* =====================================================
   SOCIAL MEDIA HOVER GLOW
===================================================== */

socialCards.forEach(
    function (social) {

        social.addEventListener(
            "mouseenter",
            function () {

                this.style.zIndex = "5";

            }
        );


        social.addEventListener(
            "mouseleave",
            function () {

                this.style.zIndex = "";

            }
        );

    }
);