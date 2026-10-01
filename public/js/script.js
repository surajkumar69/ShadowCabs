document.addEventListener('DOMContentLoaded', () => {
    
    // Sticky Header
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Navigation
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

    mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
        });
    });

    // Active Link Highlighting on Scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    function highlightLinks() {
        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100; // Offset for sticky header
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightLinks);

    // Booking Form WhatsApp Integration
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('b-name').value;
            const phone = document.getElementById('b-phone').value;
            const pickup = document.getElementById('b-pickup').value;
            const drop = document.getElementById('b-drop').value;
            const date = document.getElementById('b-date').value;
            const time = document.getElementById('b-time').value;
            const car = document.getElementById('b-car').value;
            
            const message = `*New Taxi Booking Request*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Pickup:* ${pickup}%0A*Drop:* ${drop}%0A*Date:* ${date}%0A*Time:* ${time}%0A*Car Type:* ${car}`;
            
            const whatsappUrl = `https://wa.me/918921701846?text=${message}`;
            window.open(whatsappUrl, '_blank');
        });
    }

    // Auto-select car type from buttons
    const bookCarBtns = document.querySelectorAll('.book-car-btn');
    const carSelect = document.getElementById('b-car');
    
    bookCarBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const carType = btn.getAttribute('data-car');
            if (carSelect && carType) {
                carSelect.value = carType;
            }
        });
    });
});
