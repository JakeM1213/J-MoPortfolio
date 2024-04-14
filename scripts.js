

document.addEventListener('DOMContentLoaded', function() {
    var scrollLinks = document.querySelectorAll('.nav-link');

    scrollLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});




document.addEventListener('DOMContentLoaded', function() {
   
    document.documentElement.style.cursor = "url('/path/to/your/logo_cursor.cur'), auto";
});





document.addEventListener('DOMContentLoaded', function() {
    const typewriterElements = document.querySelectorAll('.typewriter .content-description');
    console.log('Typewriter elements found:', typewriterElements.length);

    typewriterElements.forEach(element => {
        const text = element.innerText;
        element.innerText = ''; 
        let i = 0;

        function typeNextChar() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeNextChar, 100); 
            } else {
                console.log('Typing completed for:', element);
            }
        }

        setTimeout(typeNextChar, 500); 
    });
});




document.addEventListener('DOMContentLoaded', function() {
    console.log("Document loaded.");

    const fashionMagPages = [
    "Images/Fash Book/mag cover.JPG",
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
    "Images/Fash Book/FASH MAG24.JPG", ];
    let currentPageIndex = 0;

    const imgElement1 = document.querySelector('#content2 .content-image');
    if(imgElement1) {
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
});

  var myIframe = document.getElementById('myIframe');

  myIframe.contentWindow.postMessage('Hello from the parent page', 'https://jakem1213.github.io/thelibraryofbabel/');

  
  window.addEventListener('message', function(event) {
    if (event.origin !== 'https://jakem1213.github.io/thelibraryofbabel/') {
      return; 
    }
    

    
  });