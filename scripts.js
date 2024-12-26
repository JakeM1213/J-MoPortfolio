document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    var scrollLinks = document.querySelectorAll('.nav-link');
    scrollLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth',
            });
        });
    });

    // Set custom cursor
    document.documentElement.style.cursor = "url('Images/CLICK.cur'), auto";



    console.log("Document loaded.");
    const nfsPages = [
        "Images/No Faith Studios Final Deck (2)/NFS1.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS2.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS3.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS4.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS5.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS6.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS7.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS8.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS9.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS10.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS11.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS12.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS13.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS14.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS15.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS16.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS17.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS18.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS19.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS20.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS21.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS22.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS23.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS24.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS25.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS26.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS27.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS28.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS29.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS30.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS31.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS32.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS33.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS34.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS35.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS36.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS37.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS38.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS39.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS40.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS41.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS42.jpg",
        "Images/No Faith Studios Final Deck (2)/NFS43.jpg",

    ];
    let currentNfsPageIndex = 0;
    
    const imgElementNfs = document.querySelector('#project-management .content-image');
    if (imgElementNfs) {
        imgElementNfs.addEventListener('click', function() {
            currentNfsPageIndex = (currentNfsPageIndex + 1) % nfsPages.length;
            this.src = nfsPages[currentNfsPageIndex];
            console.log("NFS image clicked: ", this.src);
    
            // Check if it's the last NFS page, then loop back to the first page
            if (currentNfsPageIndex === nfsPages.length - 1) {
                currentNfsPageIndex = 0;
            }
        });
    } else {
        console.log("NFS image element not found.");
    }
    
    const fashionMagPages = [
        "Images/Fash Book/mag cover.JPG",
        "Images/Fash Book/FASH MAG.JPG",        
        "Images/Fash Book/FASH MAG2.JPG",
        "Images/Fash Book/FASH MAG3.JPG",
        "Images/Fash Book/FASH MAG4.JPG",
        "Images/Fash Book/FASH MAG5.JPG",
        "Images/Fash Book/FASH MAG6.JPG",
        "Images/Fash Book/FASH MAG7.JPG",
        "Images/Fash Book/FASH MAG8.JPG",
        "Images/Fash Book/FASH MAG9.JPG",
        "Images/Fash Book/FASH MAG10.JPG",
        "Images/Fash Book/FASH MAG11.JPG",
        "Images/Fash Book/FASH MAG12.JPG",
        "Images/Fash Book/FASH MAG13.JPG",
        "Images/Fash Book/FASH MAG14.JPG",
        "Images/Fash Book/FASH MAG15.JPG",
        "Images/Fash Book/FASH MAG16.JPG",
        "Images/Fash Book/FASH MAG17.JPG",
        "Images/Fash Book/FASH MAG18.JPG",
        "Images/Fash Book/FASH MAG19.JPG",
        "Images/Fash Book/FASH MAG20.JPG",
        "Images/Fash Book/FASH MAG21.JPG",
        "Images/Fash Book/FASH MAG22.JPG",
        "Images/Fash Book/FASH MAG23.JPG",
        "Images/Fash Book/FASH MAG24.JPG",
    ];
    let currentPageIndex = 0;

    const imgElement1 = document.querySelector('#content2 .content-image');
    if (imgElement1) {
        imgElement1.addEventListener('click', function() {
            currentPageIndex = (currentPageIndex + 1) % fashionMagPages.length;
            this.src = fashionMagPages[currentPageIndex];
            console.log("Fashion image clicked: ", this.src);
        });
    } else {
        console.log("Fashion image element not found.");
    }

    const lifeInMotionPages = [
        "Images/Life in Motion/Home INDESIGN.jpg",
        "Images/Life in Motion/Home INDESIGN3.jpg",
        "Images/Life in Motion/Home INDESIGN4.jpg",
        "Images/Life in Motion/Home INDESIGN5.jpg",
        "Images/Life in Motion/Home INDESIGN6.jpg",
        "Images/Life in Motion/Home INDESIGN7.jpg",
        "Images/Life in Motion/Home INDESIGN8.jpg",
        "Images/Life in Motion/Home INDESIGN9.jpg",
        "Images/Life in Motion/Home INDESIGN10.jpg",
        "Images/Life in Motion/Home INDESIGN11.jpg",
        "Images/Life in Motion/Home INDESIGN12.jpg",
        "Images/Life in Motion/Home INDESIGN13.jpg",
        "Images/Life in Motion/Home INDESIGN14.jpg",
        "Images/Life in Motion/Home INDESIGN15.jpg",
        "Images/Life in Motion/Home INDESIGN16.jpg",
        "Images/Life in Motion/Home INDESIGN17.jpg",
        "Images/Life in Motion/Home INDESIGN18.jpg",
        "Images/Life in Motion/Home INDESIGN19.jpg",
        "Images/Life in Motion/Home INDESIGN20.jpg",
        "Images/Life in Motion/Home INDESIGN21.jpg",
    ];
    let currentLifeMotionPageIndex = 0;

    const imgElement2 = document.querySelector('#graphic-design .content-image');
    if (imgElement2) {
        imgElement2.addEventListener('click', function() {
            currentLifeMotionPageIndex = (currentLifeMotionPageIndex + 1) % lifeInMotionPages.length;
            const newSrc = lifeInMotionPages[currentLifeMotionPageIndex];
            console.log("New Life in Motion image src:", newSrc);
            this.src = newSrc;
        });
    } else {
        console.error("Life in Motion image element not found.");
    }

// Cycling behavior for bbmock images
const bbmockPages = [
    "Images/bbmock/BB1.jpg",
    "Images/bbmock/BB2.jpg",
    "Images/bbmock/BB12.jpg",
    "Images/bbmock/BB3.jpg",
    "Images/bbmock/BB4.jpg",
    "Images/bbmock/BB5.jpg",
    "Images/bbmock/BB6.jpg",
    "Images/bbmock/BB7.jpg",
    "Images/bbmock/BB8.jpg",
    "Images/bbmock/BB9.jpg",
    "Images/bbmock/BB10.jpg",
];
let currentBBMockPageIndex = 0;

const imgElement = document.querySelector('#bbmock-image');
if (imgElement) {
    imgElement.addEventListener('click', function () {
        currentBBMockPageIndex = (currentBBMockPageIndex + 1) % bbmockPages.length;
        this.src = bbmockPages[currentBBMockPageIndex];
        console.log('New BBMock image src:', this.src);
    });
}

// Modal behavior for non-bbmock images
var modal = document.getElementById('fullscreenModal');
var modalImg = document.getElementById('fullscreenImage');
var closeModal = document.getElementsByClassName('close')[0];

var images = document.querySelectorAll('.content-media:not(#bbmock-image)');
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function () {
        modal.style.display = 'block';
        modalImg.src = this.src;
    };
}

closeModal.onclick = function () {
    modal.style.display = 'none';
};

modal.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
});
    var myIframe = document.getElementById('myIframe');

    myIframe.contentWindow.postMessage('Hello from the parent page', 'https://jakem1213.github.io/thelibraryofbabel/');

    window.addEventListener('message', function(event) {
        if (event.origin !== 'https://jakem1213.github.io/thelibraryofbabel/') {
            return; 
        }
        // Handle message from iframe
    });
   // JavaScript to toggle footer visibility when scrolling to the bottom

document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('fullscreenModal');
    var modalImg = document.getElementById('fullscreenImage');
    var closeModal = document.getElementsByClassName('close')[0];

    // Add click event to all images with class 'content-media'
    var images = document.getElementsByClassName('content-media');
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = function () {
            modal.style.display = 'block';
            modalImg.src = this.src;
        }
    }

    // Close the modal when the close button is clicked
    closeModal.onclick = function () {
        modal.style.display = 'none';
    }

    // Close the modal when clicked outside of the image
    modal.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
});

// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.clickable');
    const overlay = document.getElementById('overlay');
    const overlayImg = document.getElementById('overlayImg');

    images.forEach(image => {
        image.addEventListener('click', () => {
            overlayImg.src = image.src;
            overlay.classList.add('active');
        });
    });

    overlay.addEventListener('click', () => {
        overlay.classList.remove('active');
    });
});
