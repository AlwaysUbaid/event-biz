document.addEventListener('DOMContentLoaded', function() {
    // Slideshow Configuration
    const slideshowImages = [
        { src: 'images/slider1.jpg', title: 'Elegant Weddings' },
        { src: 'images/slider2.jpg', title: 'Corporate Excellence' },
        { src: 'images/slider3.jpg', title: 'Birthday Magic' },
        { src: 'images/slider4.jpg', title: 'Reception Dreams' },
        { src: 'images/slider5.jpg', title: 'Summit Success' }
    ];
    
    const recentEvents = [
        { 
            image: 'images/event1.jpg',
            title: 'Royal Wedding',
            description: 'A magnificent celebration of love'
        },
        {
            image: 'images/event2.jpg',
            title: 'Tech Summit 2024',
            description: 'Bringing innovation leaders together'
        },
        {
            image: 'images/event3.jpg',
            title: 'Sweet 16 Celebration',
            description: 'An unforgettable birthday evening'
        },
        {
            image: 'images/event4.jpg',
            title: 'Corporate Annual Meet',
            description: 'Engaging 500+ professionals'
        }
    ];

    // Initialize Hero Slideshow
    let currentSlide = 0;
    const slides = document.querySelector('.slides');
    
    // Create and append slides
    slideshowImages.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = `slide ${index === 0 ? 'active' : ''}`;
        slide.style.backgroundImage = `url(${image.src})`;
        slides.appendChild(slide);
    });

    // Slideshow Controls
    function nextSlide() {
        const activeSlide = document.querySelector('.slide.active');
        activeSlide.classList.remove('active');
        currentSlide = (currentSlide + 1) % slideshowImages.length;
        document.querySelectorAll('.slide')[currentSlide].classList.add('active');
    }

    function prevSlide() {
        const activeSlide = document.querySelector('.slide.active');
        activeSlide.classList.remove('active');
        currentSlide = (currentSlide - 1 + slideshowImages.length) % slideshowImages.length;
        document.querySelectorAll('.slide')[currentSlide].classList.add('active');
    }

    // Auto advance slideshow
    setInterval(nextSlide, 5000);

    // Add click handlers for slideshow controls
    document.querySelector('.next-slide').addEventListener('click', nextSlide);
    document.querySelector('.prev-slide').addEventListener('click', prevSlide);

    // Initialize Recent Events Carousel
    const carouselContainer = document.querySelector('.carousel-container');
    
    // Create and append event cards
    recentEvents.forEach(event => {
        const card = document.createElement('div');
        card.className = 'event-card';
        card.innerHTML = `
            <div class="event-image" style="background-image: url(${event.image})"></div>
            <div class="event-details">
                <h3>${event.title}</h3>
                <p>${event.description}</p>
            </div>
        `;
        carouselContainer.appendChild(card);
    });

    // Carousel Controls
    let currentPosition = 0;
    const cardWidth = 320; // card width + gap

    document.querySelector('.carousel-next').addEventListener('click', () => {
        const maxPosition = -(cardWidth * (recentEvents.length - 3));
        currentPosition = Math.max(currentPosition - cardWidth, maxPosition);
        carouselContainer.style.transform = `translateX(${currentPosition}px)`;
    });

    document.querySelector('.carousel-prev').addEventListener('click', () => {
        currentPosition = Math.min(currentPosition + cardWidth, 0);
        carouselContainer.style.transform = `translateX(${currentPosition}px)`;
    });

    // Set About Section Image
    document.querySelector('.about-image').style.backgroundImage = 'images/about.jpg';

    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking on a link
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') && 
            !e.target.closest('.nav-links') && 
            !e.target.closest('.menu-toggle')) {
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Form Submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
});
