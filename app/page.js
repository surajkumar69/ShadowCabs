export default function Home() {
  return (
    <>
      {/*  Header  */}
    <header className="header">
        <div className="container header-container">
            <a href="#" className="logo">
                <img src="assets/images/logo.jpg" alt="Shadow Cabs Logo" />
            </a>
            <nav className="navbar">
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#cars">Our Cars</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#booking">Book Now</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="header-action">
                <a href="tel:+918921701846" className="btn btn-primary"><i className="fa-solid fa-phone"></i> Call Now</a>
                <button className="mobile-menu-btn"><i className="fa-solid fa-bars"></i></button>
            </div>
        </div>
    </header>

    {/*  Mobile Nav  */}
    <div className="mobile-nav">
        <button className="close-btn"><i className="fa-solid fa-xmark"></i></button>
        <ul className="mobile-nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#cars">Our Cars</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#booking">Book Now</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="tel:+918921701846" className="btn btn-primary mt-4"><i className="fa-solid fa-phone"></i> Call Now</a></li>
        </ul>
    </div>

    {/*  Hero Section  */}
    <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
            <h1>Reliable Call Taxi Service in Trivandrum</h1>
            <p>Comfortable, safe and reliable taxi service for your everyday travel.</p>
            <div className="hero-buttons">
                <a href="tel:+918921701846" className="btn btn-primary"><i className="fa-solid fa-phone"></i> Call Now</a>
                <a href="#booking" className="btn btn-secondary"><i className="fa-solid fa-calendar-check"></i> Book Your Ride</a>
            </div>
        </div>
    </section>

    {/*  Why Choose Us / About  */}
    <section id="about" className="section about">
        <div className="container">
            <div className="section-title text-center">
                <h2>Why Choose Us</h2>
                <div className="underline"></div>
            </div>
            <div className="features-grid">
                <div className="feature-card">
                    <div className="feature-icon"><i className="fa-solid fa-shield-halved"></i></div>
                    <h3>Reliable Service</h3>
                    <p>Count on us for punctual and dependable rides anytime, anywhere in Trivandrum.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon"><i className="fa-solid fa-user-tie"></i></div>
                    <h3>Experienced Drivers</h3>
                    <p>Our professional, verified drivers know the best routes for a smooth journey.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon"><i className="fa-solid fa-couch"></i></div>
                    <h3>Comfortable Cars</h3>
                    <p>Travel in well-maintained, clean, and AC-equipped vehicles.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon"><i className="fa-solid fa-lock"></i></div>
                    <h3>Safe Travel</h3>
                    <p>Your safety is our top priority. We follow strict safety protocols.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon"><i className="fa-solid fa-clock"></i></div>
                    <h3>On-Time Pickup</h3>
                    <p>We value your time and ensure prompt pickups and drop-offs.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon"><i className="fa-solid fa-indian-rupee-sign"></i></div>
                    <h3>Affordable Service</h3>
                    <p>Premium service at competitive and transparent pricing.</p>
                </div>
            </div>
        </div>
    </section>

    {/*  Our Cars  */}
    <section id="cars" className="section cars bg-darker">
        <div className="container">
            <div className="section-title text-center">
                <h2>Our Cars</h2>
                <div className="underline"></div>
                <p className="subtitle">Choose the perfect vehicle for your journey</p>
            </div>
            <div className="cars-grid">
                {/*  Innova Card  */}
                <div className="car-card">
                    <div className="car-img">
                        <img src="assets/images/innova.jpg" alt="Toyota Innova Taxi" />
                    </div>
                    <div className="car-details">
                        <h3>Toyota Innova</h3>
                        <ul className="car-features">
                            <li><i className="fa-solid fa-check"></i> Spacious & Comfortable</li>
                            <li><i className="fa-solid fa-snowflake"></i> AC</li>
                            <li><i className="fa-solid fa-users"></i> Family & Group Travel</li>
                            <li><i className="fa-solid fa-user-tie"></i> Professional Driver</li>
                        </ul>
                        <a href="#booking" className="btn btn-outline book-car-btn" data-car="Toyota Innova">Book Innova</a>
                    </div>
                </div>
                {/*  Swift Card  */}
                <div className="car-card">
                    <div className="car-img">
                        <img src="assets/images/swift.jpg" alt="Maruti Swift Taxi" />
                    </div>
                    <div className="car-details">
                        <h3>Maruti Swift</h3>
                        <ul className="car-features">
                            <li><i className="fa-solid fa-check"></i> Comfortable & Economical</li>
                            <li><i className="fa-solid fa-snowflake"></i> AC</li>
                            <li><i className="fa-solid fa-city"></i> Ideal for City Travel</li>
                            <li><i className="fa-solid fa-user-tie"></i> Professional Driver</li>
                        </ul>
                        <a href="#booking" className="btn btn-outline book-car-btn" data-car="Maruti Swift">Book Swift</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  Services  */}
    <section id="services" className="section services">
        <div className="container">
            <div className="section-title text-center">
                <h2>Our Services</h2>
                <div className="underline"></div>
            </div>
            <div className="services-grid">
                <div className="service-card">
                    <i className="fa-solid fa-taxi service-icon"></i>
                    <h3>Local Taxi</h3>
                    <p>Quick and convenient taxi service for all your daily needs within Trivandrum.</p>
                </div>
                <div className="service-card">
                    <i className="fa-solid fa-plane-arrival service-icon"></i>
                    <h3>Airport Transfer</h3>
                    <p>Hassle-free TRV airport pickup and drop services, available 24/7.</p>
                </div>
                <div className="service-card">
                    <i className="fa-solid fa-map-location-dot service-icon"></i>
                    <h3>Outstation Travel</h3>
                    <p>Comfortable long-distance rides to explore destinations outside the city.</p>
                </div>
                <div className="service-card">
                    <i className="fa-solid fa-building service-icon"></i>
                    <h3>City Travel</h3>
                    <p>Navigate the city easily with our experienced local drivers.</p>
                </div>
                <div className="service-card">
                    <i className="fa-solid fa-briefcase service-icon"></i>
                    <h3>Corporate Travel</h3>
                    <p>Professional transportation solutions for business meetings and events.</p>
                </div>
                <div className="service-card">
                    <i className="fa-solid fa-route service-icon"></i>
                    <h3>Pickup & Drop</h3>
                    <p>Reliable point-to-point transfers to get you where you need to be.</p>
                </div>
            </div>
        </div>
    </section>

    {/*  Booking Form Section  */}
    <section id="booking" className="section booking">
        <div className="container">
            <div className="section-title text-center">
                <h2>Book Your Ride</h2>
                <div className="underline"></div>
                <p className="subtitle">Fill out the details below and we'll confirm via WhatsApp</p>
            </div>
            <div className="booking-container">
                <form id="booking-form" className="booking-form">
                    <div className="form-row">
                        <div className="form-group">
                            <input type="text" id="b-name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="tel" id="b-phone" placeholder="Phone Number" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <input type="text" id="b-pickup" placeholder="Pickup Location" required />
                        </div>
                        <div className="form-group">
                            <input type="text" id="b-drop" placeholder="Drop Location" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <input type="date" id="b-date" required />
                        </div>
                        <div className="form-group">
                            <input type="time" id="b-time" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <select id="b-car" required>
                            <option value="" disabled selected>Select Car Type</option>
                            <option value="Toyota Innova">Toyota Innova</option>
                            <option value="Maruti Swift">Maruti Swift</option>
                            <option value="Any Available">Any Available</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block"><i className="fa-brands fa-whatsapp"></i> Send Booking via WhatsApp</button>
                </form>
            </div>
        </div>
    </section>

    {/*  CTA Section  */}
    <section className="cta">
        <div className="cta-overlay"></div>
        <div className="container cta-content">
            <h2>Need a Taxi in Trivandrum?</h2>
            <p>Call Shadow Cabs today and travel comfortably with a trusted local taxi service.</p>
            <a href="tel:+918921701846" className="btn btn-primary btn-large"><i className="fa-solid fa-phone"></i> Call Now - 8921701846</a>
        </div>
    </section>

    {/*  Contact  */}
    <section id="contact" className="section contact bg-darker">
        <div className="container">
            <div className="section-title text-center">
                <h2>Get in Touch</h2>
                <div className="underline"></div>
            </div>
            <div className="contact-container">
                <div className="contact-info">
                    <div className="contact-item">
                        <div className="icon"><i className="fa-solid fa-location-dot"></i></div>
                        <div>
                            <h4>Location</h4>
                            <p>Trivandrum, Kerala</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="icon"><i className="fa-solid fa-phone"></i></div>
                        <div>
                            <h4>Phone</h4>
                            <p>8921701846</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="icon"><i className="fa-solid fa-envelope"></i></div>
                        <div>
                            <h4>Email</h4>
                            <p>shadowcars7959@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="contact-actions">
                    <a href="tel:+918921701846" className="btn contact-btn"><i className="fa-solid fa-phone"></i> Call Now</a>
                    <a href="https://wa.me/918921701846" className="btn contact-btn whatsapp"><i className="fa-brands fa-whatsapp"></i> WhatsApp</a>
                    <a href="mailto:shadowcars7959@gmail.com" className="btn contact-btn email"><i className="fa-solid fa-envelope"></i> Email Us</a>
                </div>
            </div>
        </div>
    </section>

    {/*  Footer  */}
    <footer className="footer">
        <div className="container footer-content">
            <div className="footer-col">
                <h3>Shadow Cabs</h3>
                <p>Your reliable travel partner in Trivandrum, offering safe, comfortable, and affordable taxi services.</p>
            </div>
            <div className="footer-col">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#cars">Our Cars</a></li>
                    <li><a href="#services">Services</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Contact Details</h4>
                <p><i className="fa-solid fa-location-dot"></i> Trivandrum, Kerala</p>
                <p><i className="fa-solid fa-phone"></i> +91 8921701846</p>
                <p><i className="fa-solid fa-envelope"></i> shadowcars7959@gmail.com</p>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2026 Shadow Cabs. All Rights Reserved.</p>
        </div>
    </footer>

    {/*  Scripts  */}
    </>
  );
}
