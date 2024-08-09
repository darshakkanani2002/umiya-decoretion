// navigation active design
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-item .nav-link');

    function handleNavClick(event) {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        event.target.classList.add('active');
    }
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });

    // Function to dynamically change active design based on window scroll
    function setActiveLink() {
        const sections = document.querySelectorAll('section[id]');

        sections.forEach(section => {
            const navLink = document.querySelector(`.nav-link[data-section="${section.id}"]`);
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop - sectionHeight / 3 && window.pageYOffset < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    navLink.classList.add('active');
                });
            }
        });
    }

    // Initial call to setActiveLink to set the active link on page load
    setActiveLink();

    // Add event listener for scroll event to call setActiveLink on scroll
    window.addEventListener('scroll', setActiveLink);
});


// hero section js

var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
        nextEl: ".hero-button-next",
        prevEl: ".hero-button-prev",
    },
});

//   testimonials js
var swiper = new Swiper(".testimonial-swiper", {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".testimonial-button-next",
        prevEl: ".testimonial-button-prev",
    },
});



//for video js
window.onload = function () {
    let toggleButton = document.getElementById("toggle");
    let videoPopup = document.getElementById("videoPopup");
    let player = document.getElementById("player");
    let closeButton = document.getElementById("closeButton");

    toggleButton.addEventListener("click", function () {
        videoPopup.style.display = "block";
        player.style.display = "block"
        player.play();
    });

    closeButton.addEventListener("click", function () {
        videoPopup.style.display = "none";
        player.pause();
    });
};


// for image gallery js
let currentImageIndex = 0;
let imagePaths = [];

function openFullScreen(img) {
    document.getElementById('fullscreenImage').src = img.src;
    currentImageIndex = imagePaths.findIndex(item => item.path === img.src);
    document.getElementById('fullscreenContainer').style.display = "flex";
}

function closeFullScreen() {
    document.getElementById('fullscreenContainer').style.display = "none";
}

function navigateImage(direction) {
    currentImageIndex = (currentImageIndex + direction + imagePaths.length) % imagePaths.length;
    document.getElementById('fullscreenImage').src = imagePaths[currentImageIndex].path;
}

document.addEventListener('DOMContentLoaded', function () {
    let galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach((img, index) => {
        imagePaths.push({ index: index, path: img.src });
        img.addEventListener('click', function () {
            openFullScreen(img);
        });
    });
});

// back to top btn js
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



function toggleText(dotsId, moreId, btnId) {
    var dots = document.getElementById(dotsId);
    var moreText = document.getElementById(moreId);
    var btnText = document.getElementById(btnId);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "READ MORE";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "READ LESS";
        moreText.style.display = "inline";
    }
}