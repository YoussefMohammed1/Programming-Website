// Select Link

let links = document.querySelectorAll(".header ul li a");



let list = document.querySelector(".header ul.courses");

links.forEach((li) => {
    li.onclick = function() {
        links.forEach((li) => {
            li.classList.remove("active");
            this.classList.add("active");
        })

    }  
})



/************************************************************************ */

// Toggle Click

let toggle = document.querySelector(".landing .toggle");
let ulHeader = document.querySelector(".landing .header ul");

toggle.onclick = function() {
    toggle.classList.toggle("active");
    bullets.forEach((bullet) => {
        bullet.classList.toggle("not-active")
    })

}


/************************************************************************ */


// Start Setting Box

let settingIcon = document.querySelector(".settings-box .fa-cog");
let settingBox = document.querySelector(".settings-box");


settingIcon.onclick = function() {
    settingBox.classList.toggle("active");
    settingIcon.classList.toggle("fa-spin");

}


let colorsLi = document.querySelectorAll(".settings-box .colors-list li");

colorsLi.forEach((li) => {

    li.addEventListener("click", function(e) {
        // Set Color on Root

        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
    })
})

// Add Colors To LocalStorage
if(window.localStorage.getItem("color-option")) {

    document.documentElement.style.setProperty("--main-color", window.localStorage.getItem("color-option"));

}

colorsLi.forEach((li) => {
    li.addEventListener("click", function(e) {

        window.localStorage.setItem("color-option", e.target.dataset.color);

    })
})

/************************************************************************ */

// Stop And Start Random Background

let randomBackground = document.querySelectorAll(".stop-random-imgs span");


randomBackground.forEach((span) => {
    span.addEventListener("click", function(e) {

        randomBackground.forEach((span) => {
            span.classList.remove("active");

        });

        e.target.classList.add("active")
    })
    
})

/************************************************************************ */

let landing = document.querySelector(".landing");

let arrayImgs = ["lan1.jpg", "lan2.jpg", "lan3.jpg", "lan4.jpg", "lan5.jpg", "lan6.jpg"];

// change background image url 

let backgroundOption = true;
let count;

function randomiseImgs() {

    if(backgroundOption == true) {
        
        count = setInterval(() => {
            let randomImg =arrayImgs[Math.floor(Math.random() * arrayImgs.length)];
            landing.style.backgroundImage = 'url("imgs/'+ randomImg +' ")';
    },3000);
    }


}

randomiseImgs();

/************************************************************************ */

let yes = document.querySelector(".stop-random-imgs span.yes");
let no = document.querySelector(".stop-random-imgs span.no");


//Add Local Storage To  Random background Imgs

/*
if(window.localStorage.getItem("background_option")) {
    console.log(window.localStorage.getItem("background_option"))

    if(window.localStorage.getItem("background_option") === "true") {

        backgroundOption = true;

    } else {
        backgroundOption = false;

    }
}
*/


yes.onclick = function() {
    backgroundOption = true;
    randomiseImgs();
    // window.localStorage.setItem("background_option", true);

} 

no.onclick = function() {
    backgroundOption = false;
    clearInterval(count);
    // window.localStorage.setItem("background_option", false);
    

}


/************************************************************************ */

// random about When Using Select Color

let boxImgs = document.querySelectorAll(".about .container .boxes .box");
let boxContainer = document.querySelector(".about .container .boxes");
let spanBox = document.querySelector(".about .container .box .text span");


/************************************************************************/

colorsLi.forEach((li) => {
    li.addEventListener("click", function() {
        spanBox.innerHTML = li.dataset.imgs;
        window.localStorage.setItem("span", li.dataset.imgs)

    })

})

if(window.localStorage.getItem("span")) {
    spanBox.innerHTML = window.localStorage.getItem("span")
}


/************************************************************************/

// Animation Skills
let skills = document.querySelector(".skills");
let spans = document.querySelectorAll(".skills .box span");
let aboutContainer = document.querySelector(".about");

window.onscroll = function() {
    if(window.scrollY > skills.offsetTop - 250) {
        spans.forEach((span) => {
            span.style.width = `${span.dataset.width}%`
        })
    }

    /**************************************************** */

    if(window.scrollY > aboutContainer.offsetTop - 250) {

        boxContainer.classList.add("active")
    }
}





/************************************************************************ */


let gallaryImg = document.querySelectorAll(".gallary .img-box img");
let overlay = document.querySelector(".gallary .overlay")

console.log(gallaryImg)

gallaryImg.forEach((img) => {

    img.addEventListener("click", function(e) {

        // Create OverLay Popup
        let overlay = document.createElement("div");

        // Add Class To OverLay
        overlay.className = "overlay";

        // Add Overlay To Body
        document.body.appendChild(overlay)



        // Create Popup Box
        let popupBox = document.createElement("div");

        // Add Class Tp Popup Box
        popupBox.className = "popup-box";

        // Create Img
        let popupImg = document.createElement("img");

        // Add Class To Img
        popupImg.className = "popup-img"

        // Change Source Popup Img To Click Img
        popupImg.src = img.src;

        // Add Img In Popup Box
        popupBox.appendChild(popupImg);



        //Add Popup Box To Body
        document.body.appendChild(popupBox);

        
        


        if(img.alt != "") {
            let heading = document.createElement("div");

            heading.appendChild(document.createTextNode(img.alt))

            heading.className = "heading";

            document.body.appendChild(heading)
        }


        // Create Close Button
        
        let closeButton = document.createElement("span");
        closeButton.appendChild(document.createTextNode("X"));

        closeButton.className = "end";

        popupBox.appendChild(closeButton)
        
    })
})



document.addEventListener("click", function(e) {
    if(e.target.className == "end") {
        e.target.parentElement.remove();
        document.querySelector(".overlay").remove();
        document.querySelector(".heading").remove();
    }
})









/************************************************************************ */

let bullets = document.querySelectorAll(".bullets .bullet");

bullets.forEach((bullet) => {
    bullet.onclick = function(e) {
        document.querySelector(e.target.dataset.section).scrollIntoView ({
            behavior:"smooth"
        })
    }
})



/************************************************************************ */

let bulletSpans = document.querySelectorAll(".bullet-option .options span");


bulletSpans.forEach((span) => {

    span.addEventListener("click", function(e) {
        bulletSpans.forEach((span) => {
            span.classList.remove("active")
        });

        e.target.classList.add("active")
    })
})


let yesSpan = document.querySelector(".bullet-option .options span.yes");
let noSpan = document.querySelector(".bullet-option .options span.no");


if(window.localStorage.getItem("display")) {

    bulletSpans.forEach((span) => {
        span.classList.remove("active")
    });

    document.querySelector(`[data-appear = "${window.localStorage.getItem("display")}"]`).classList.add("active")


    bullets.forEach((bullet) => {
        bullet.style.display = window.localStorage.getItem("display")
    });

}

yesSpan.onclick = function() {

    bullets.forEach((bullet) => {
        bullet.style.display = "block"
    });

    window.localStorage.setItem("display", "block");
}

noSpan.onclick = function() {

    bullets.forEach((bullet) => {
        bullet.style.display = "none"
    });

    window.localStorage.setItem("display", "none");

}


/************************************************************************/

let resetButton = document.querySelector(".reset");

resetButton.onclick = function() {
    window.localStorage.clear();
    window.location.reload();
}












    
