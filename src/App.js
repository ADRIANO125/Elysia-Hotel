import React from 'react';
import './App.css';
import { useNavigate, Link, Routes, Route } from 'react-router-dom';
import BookingPage from './BookingPage';

// Room features constants
const ROOM_FEATURES = {
  WIFI: 'High-Speed Internet',
  BREAKFAST: 'Breakfast',
  SEA_VIEW: 'Sea View',
  BALCONY: 'Balcony',
  MINIBAR: 'Minibar',
  POOL_ACCESS: 'Pool Access',
  SPA_ACCESS: 'Spa Access',
  AIR_CONDITIONING: 'Air Conditioning'
};

// Enhanced room data
const rooms = [
  {
    id: 1,
    name: 'Deluxe Room',
    description: 'Spacious room with a king-sized bed and city view',
    price: 199,
    size: '45 m²',
    maxGuests: 2,
    beds: '1 King Bed',
    bedCount: 1,
    image: '/imges/Deluxe-Room.jpg',
    features: [ROOM_FEATURES.WIFI, ROOM_FEATURES.AIR_CONDITIONING, ROOM_FEATURES.MINIBAR],
    type: 'room',
    rating: 4
  },
  {
    id: 2,
    name: 'Executive Suite',
    description: 'Luxurious suite with separate living area and premium amenities',
    price: 349,
    size: '65 m²',
    maxGuests: 3,
    beds: '1 King Bed + 1 Sofa Bed',
    bedCount: 2,
    image: '/imges/Executive-Suite.jpg',
    features: [ROOM_FEATURES.WIFI, ROOM_FEATURES.BREAKFAST, ROOM_FEATURES.SEA_VIEW, ROOM_FEATURES.AIR_CONDITIONING],
    type: 'suite',
    rating: 5
  },
  {
    id: 3,
    name: 'Presidential Suite',
    description: 'Ultimate luxury with panoramic views and premium services',
    price: 599,
    size: '120 m²',
    maxGuests: 4,
    beds: '1 King Bed + 2 Single Beds',
    bedCount: 3,
    image: '/imges/Presidential-Suite.jpg',
    features: [ROOM_FEATURES.WIFI, ROOM_FEATURES.BREAKFAST, ROOM_FEATURES.SEA_VIEW, ROOM_FEATURES.BALCONY, ROOM_FEATURES.MINIBAR, ROOM_FEATURES.POOL_ACCESS, ROOM_FEATURES.SPA_ACCESS, ROOM_FEATURES.AIR_CONDITIONING],
    type: 'suite',
    rating: 5
  },
  {
    id: 4,
    name: 'Family Room',
    description: 'Spacious accommodation perfect for families',
    price: 279,
    size: '55 m²',
    maxGuests: 4,
    beds: '1 Queen Bed + 2 Single Beds',
    bedCount: 3,
    image: '/imges/Family-Room.webp',
    features: [ROOM_FEATURES.WIFI, ROOM_FEATURES.AIR_CONDITIONING, ROOM_FEATURES.MINIBAR],
    type: 'room',
    rating: 4
  },
  {
    id: 5,
    name: 'Superior Twin Room',
    description: 'Comfortable twin room ideal for friends or colleagues',
    price: 179,
    size: '32 m²',
    maxGuests: 2,
    beds: '2 Single Beds',
    bedCount: 2,
    image: '/imges/Superior-Twin-Room.jpg',
    features: [ROOM_FEATURES.WIFI, ROOM_FEATURES.AIR_CONDITIONING],
    type: 'room',
    rating: 3
  },
  {
    id: 6,
    name: 'Junior Suite',
    description: 'Elegant suite with modern amenities and comfortable living space',
    price: 259,
    size: '50 m²',
    maxGuests: 3,
    beds: '1 Queen Bed + Sofa',
    bedCount: 2,
    image: '/imges/Junior-Suite.avif',
    features: [ROOM_FEATURES.WIFI, ROOM_FEATURES.BREAKFAST, ROOM_FEATURES.AIR_CONDITIONING],
    type: 'suite',
    rating: 4
  },
  {
    id: 7,
    name: 'City View Room',
    description: 'Modern room with stunning city views and premium amenities',
    price: 209,
    size: '38 m²',
    maxGuests: 2,
    beds: '1 King Bed',
    bedCount: 1,
    image: '/imges/City-View.jpg',
    features: [ROOM_FEATURES.WIFI, ROOM_FEATURES.MINIBAR, ROOM_FEATURES.AIR_CONDITIONING],
    type: 'room',
    rating: 4
  },
  {
    id: 8,
    name: 'Sea View Deluxe',
    description: 'Luxurious room with breathtaking sea views and premium services',
    price: 329,
    size: '48 m²',
    maxGuests: 3,
    beds: '1 King Bed',
    bedCount: 1,
    image: '/imges/Sea-View-Deluxe.jpg',
    features: [ROOM_FEATURES.SEA_VIEW, ROOM_FEATURES.WIFI, ROOM_FEATURES.AIR_CONDITIONING, ROOM_FEATURES.BREAKFAST],
    type: 'room',
    rating: 5
  },
  {
    id: 9,
    name: 'Garden Suite',
    description: 'Peaceful suite overlooking beautiful gardens with spacious living area',
    price: 379,
    size: '68 m²',
    maxGuests: 4,
    beds: '1 King Bed + Sofa',
    bedCount: 2,
    image: '/imges/Garden-Suite.webp',
    features: [ROOM_FEATURES.BALCONY, ROOM_FEATURES.WIFI, ROOM_FEATURES.MINIBAR],
    type: 'suite',
    rating: 4
  },
  {
    id: 10,
    name: 'Honeymoon Suite',
    description: 'Romantic suite with private balcony and sea view, perfect for couples',
    price: 429,
    size: '70 m²',
    maxGuests: 2,
    beds: '1 King Bed',
    bedCount: 1,
    image: '/imges/honeymoon-suite.jpg',
    features: [ROOM_FEATURES.SEA_VIEW, ROOM_FEATURES.BALCONY, ROOM_FEATURES.WIFI, ROOM_FEATURES.BREAKFAST],
    type: 'suite',
    rating: 5
  }
];

function HomePage() {
  const navigate = useNavigate();
  // Fallback for broken images
  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src = '/imges/Gallery-1.jpg';
  };
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#top">Elysia Hotel</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#top">Home</a></li>
              <li className="nav-item"><Link className="nav-link" to="/book">Book Now</Link></li>
              <li className="nav-item"><a className="nav-link" href="#rooms">Rooms</a></li>
              <li className="nav-item"><a className="nav-link" href="#amenities">Amenities</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#dining">Dining</a></li>
              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#gallery">Gallery</a></li>
              <li className="nav-item"><a className="nav-link" href="#testimonials">Testimonials</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
              <li className="nav-item"><a className="nav-link" href="#faq">FAQ</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section - centered with CTA */}
      <header id="top" className="hero text-white py-5 position-relative">
        <div className="position-absolute w-100 h-100" style={{
          backgroundImage: 'url(/imges/main.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -2
        }}></div>
        <div className="position-absolute w-100 h-100" style={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1
        }}></div>
        <div className="container py-5 position-relative" style={{zIndex: 1}}>
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">Find Your Perfect Stay</h1>
              <p className="lead mb-4">Experience luxury and comfort at our world-class hotels. Book your stay today and enjoy exclusive deals.</p>
              <button className="btn btn-primary btn-lg" onClick={() => navigate('/book')}>Book Now</button>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Rooms - horizontally scrollable */}
      <section id="rooms" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Rooms & Suites</h2>
          <div className="d-flex flex-row flex-nowrap overflow-auto gap-3 pb-2">
            {rooms.map(room => (
              <div key={room.id} style={{ minWidth: '320px' }}>
                <div className="card h-100 shadow-sm room-card border-0 overflow-hidden">
                  <div className="position-relative">
                    <img src={room.image} onError={handleImgError} className="card-img-top" alt={room.name} style={{ height: '220px', objectFit: 'cover' }} />
                    <div className="position-absolute top-0 end-0 m-3">
                      <span className="badge bg-primary bg-gradient px-3 py-2 rounded-pill">
                        {room.type === 'suite' ? 'Suite' : 'Room'}
                      </span>
                    </div>
                    <div className="position-absolute bottom-0 start-0 m-3">
                      <div className="text-warning">
                        {Array.from({length: room.rating || 0}).map((_, i) => <i key={i} className="bi bi-star-fill"></i>)}
                        {Array.from({length: 5 - (room.rating || 0)}).map((_, i) => <i key={`e${i}`} className="bi bi-star"></i>)}
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-4">
                    <h5 className="card-title mb-2 fw-bold">{room.name}</h5>
                    <p className="card-text text-muted mb-3" style={{fontSize: '0.9rem', lineHeight: '1.5'}}>{room.description}</p>

                    <div className="row g-2 mb-3 small text-muted">
                      <div className="col-6">
                        <i className="bi bi-arrows-fullscreen me-2 text-primary"></i>{room.size}
                      </div>
                      <div className="col-6">
                        <i className="bi bi-people me-2 text-primary"></i>Up to {room.maxGuests} guests
                      </div>
                      <div className="col-12">
                        <i className="bi bi-moon me-2 text-primary"></i>{room.beds}
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="d-flex flex-wrap gap-1">
                        {room.features.slice(0,3).map((f, i) => (
                          <span key={i} className="badge badge-soft text-primary border border-primary border-opacity-25" style={{fontSize: '0.7rem', padding: '0.25rem 0.5rem'}}>{f}</span>
                        ))}
                        {room.features.length > 3 && (
                          <span className="badge bg-light text-muted border" style={{fontSize: '0.7rem', padding: '0.25rem 0.5rem'}}>+{room.features.length - 3} more</span>
                        )}
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center pt-2 border-top">
                      <div>
                        <span className="h4 mb-0 text-primary fw-bold">${room.price}</span>
                        <span className="text-muted small"> / night</span>
                      </div>
                      <button className="btn btn-primary btn-sm px-3 py-2 rounded-pill" onClick={() => navigate('/book')}>
                        <i className="bi bi-calendar-check me-1"></i>Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <button className="btn btn-outline-primary" onClick={() => navigate('/book')}>Show more rooms</button>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Amenities & Facilities</h2>
          <div className="row g-4">
            {[ 
              { img: '/imges/24-7-Concierge.webp', icon: 'bi-person-gear', title: '24/7 Concierge', desc: 'Personalized assistance around the clock.' },
              { img: '/imges/Complimentary-Breakfast.jpg', icon: 'bi-cup-hot', title: 'Complimentary Breakfast', desc: 'Enjoy a delicious start to your day.' },
              { img: '/imges/Infinity-Pool.jpg', icon: 'bi-water', title: 'Infinity Pool', desc: 'Relax with breathtaking views.' },
              { img: '/imges/Fitness-Center.webp', icon: 'bi-bicycle', title: 'Fitness Center', desc: 'State-of-the-art equipment 24/7.' },
              { img: '/imges/Valet-Parking.jpg', icon: 'bi-car-front', title: 'Valet Parking', desc: 'Convenient and secure parking.' },
              { img: '/imges/Central-Location.jpg', icon: 'bi-geo-alt', title: 'Central Location', desc: 'Close to attractions and business hubs.' }
            ].map((a, i) => (
              <div key={i} className="col-12 col-sm-6 col-lg-4">
                <div className="amenity-card h-100 p-3 bg-white shadow-sm text-center">
                  <img src={a.img} onError={handleImgError} alt={a.title} />
                  <div className="d-flex justify-content-center align-items-center mt-2 mb-1">
                    <div className="icon-circle me-2" style={{ width: 40, height: 40 }}><i className={`bi ${a.icon}`}></i></div>
                    <h5 className="mb-0">{a.title}</h5>
                  </div>
                  <p className="text-muted mb-0">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <img className="img-fluid rounded shadow" alt="Lobby" src="/imges/lobby.jpg" onError={handleImgError} />
            </div>
            <div className="col-lg-6">
              <h2 className="mb-3">Why Choose Elysia Hotel?</h2>
              <p className="text-muted">We combine sophisticated design with world‑class service to create unforgettable experiences. Whether you’re traveling for business or leisure, our hotel offers the perfect balance of comfort and elegance.</p>
              <ul className="list-unstyled mt-3">
                <li className="mb-2"><i className="bi bi-check2-circle text-primary me-2"></i>Prime locations in major cities</li>
                <li className="mb-2"><i className="bi bi-check2-circle text-primary me-2"></i>Personalized concierge services</li>
                <li className="mb-2"><i className="bi bi-check2-circle text-primary me-2"></i>Award‑winning dining options</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Redefining Luxury Hospitality */}
      <section id="hospitality" className="py-5 stats-section">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-lg-8 text-center">
              <h2 className="mb-3">Redefining Luxury Hospitality</h2>
              <p className="text-muted">For over two decades, Elysia Hotel has been the epitome of luxury and elegance. Our commitment to exceptional service and attention to detail creates unforgettable experiences for discerning travelers from around the world.</p>
            </div>
          </div>
          <div className="row g-3 g-md-4">
            {[ 
              { value: '500+', label: 'Luxury Rooms', icon: 'bi-door-open' },
              { value: '25+', label: 'Years Experience', icon: 'bi-award' },
              { value: '50K+', label: 'Happy Guests', icon: 'bi-emoji-smile' },
              { value: '15+', label: 'Awards Won', icon: 'bi-trophy' }
            ].map((s, i) => (
              <div key={i} className="col-6 col-md-3">
                <div className="stat-card text-center p-4 h-100 bg-white shadow-sm">
                  <div className="stat-icon mb-2"><i className={`bi ${s.icon}`}></i></div>
                  <div className="h3 mb-1 fw-bold">{s.value}</div>
                  <div className="text-muted small">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurants & Bar */}
      <section id="dining" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Restaurants & Bar</h2>
          <div className="row g-4">
            {[ 
              { title: 'Skyline Restaurant', desc: 'Fine dining with panoramic city views and a curated seasonal menu.', img: '/imges/Skyline-Restaurant.jpg' },
              { title: 'Garden Café', desc: 'Relaxed all‑day dining serving international classics and local flavors.', img: '/imges/Garden-Café.jpg' },
              { title: 'The Velvet Bar', desc: 'Signature cocktails, live music, and an intimate atmosphere.', img: '/imges/249.webp' }
            ].map((d, i) => (
              <div key={i} className="col-md-4">
                <div className="card h-100 dining-card shadow-sm">
                  <img src={d.img} onError={handleImgError} className="card-img-top" alt={d.title} />
                  <div className="card-body">
                    <h5 className="card-title">{d.title}</h5>
                    <p className="card-text text-muted">{d.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section id="services" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Additional Services</h2>
          <div className="row g-4">
            {[ 
              { img: '/imges/Sauna.jpg', icon: 'bi-steam', title: 'Sauna', desc: 'Unwind in our premium dry and wet saunas for total relaxation.' },
              { img: '/imges/jacuzzi.jpg', icon: 'bi-droplet', title: 'Jacuzzi', desc: 'Rejuvenate in our hydrotherapy Jacuzzi with mood lighting.' },
              { img: '/imges/spa.jpg', icon: 'bi-flower1', title: 'Spa Treatments', desc: 'Holistic therapies and massages by certified therapists.' },
              { img: '/imges/Beauty-Salon.jpg', icon: 'bi-scissors', title: 'Beauty Salon', desc: 'Professional grooming and beauty services by experts.' }
            ].map((s, i) => (
              <div key={i} className="col-12 col-sm-6 col-lg-3">
                <div className="service-card h-100 p-3 bg-white shadow-sm text-center">
                  <img src={s.img} onError={handleImgError} alt={s.title} />
                  <div className="service-icon mb-2 mt-1"><i className={`bi ${s.icon}`}></i></div>
                  <h6 className="mb-2">{s.title}</h6>
                  <p className="text-muted mb-0">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Experience - Enhanced Gallery Alternative */}
      <section id="gallery" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="mb-3">Experience Elysia Hotel</h2>
            <p className="lead text-muted">Discover the perfect blend of luxury, comfort, and exceptional service</p>
          </div>

          <div className="row g-4">
            {/* Luxury Accommodation */}
            <div className="col-lg-6 col-md-6">
              <div className="experience-card h-100 position-relative overflow-hidden rounded-3 shadow-sm">
                <img src="/imges/Gallery1.jpg" onError={handleImgError} className="w-100 h-100" style={{height: '350px', objectFit: 'cover'}} alt="Luxury Accommodation" />
                <div className="experience-overlay position-absolute w-100 h-100 d-flex align-items-end p-4" style={{background: 'linear-gradient(transparent, rgba(0,0,0,0.7))'}}>
                  <div className="text-white">
                    <h4 className="fw-bold mb-2">Luxury Accommodation</h4>
                    <p className="mb-0">Elegantly designed rooms and suites with premium amenities and stunning views</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fine Dining */}
            <div className="col-lg-6 col-md-6">
              <div className="experience-card h-100 position-relative overflow-hidden rounded-3 shadow-sm">
                <img src="/imges/Gallery2.jpg" onError={handleImgError} className="w-100 h-100" style={{height: '350px', objectFit: 'cover'}} alt="Fine Dining" />
                <div className="experience-overlay position-absolute w-100 h-100 d-flex align-items-end p-4" style={{background: 'linear-gradient(transparent, rgba(0,0,0,0.7))'}}>
                  <div className="text-white">
                    <h4 className="fw-bold mb-2">Fine Dining Experience</h4>
                    <p className="mb-0">World-class restaurants serving exquisite cuisine with panoramic city views</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Wellness & Spa */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="experience-card h-100 position-relative overflow-hidden rounded-3 shadow-sm">
                <img src="/imges/Gallery3.webp" onError={handleImgError} className="w-100 h-100" style={{height: '280px', objectFit: 'cover'}} alt="Wellness & Spa" />
                <div className="experience-overlay position-absolute w-100 h-100 d-flex align-items-end p-3" style={{background: 'linear-gradient(transparent, rgba(0,0,0,0.7))'}}>
                  <div className="text-white">
                    <h5 className="fw-bold mb-1">Wellness & Spa</h5>
                    <p className="mb-0 small">Rejuvenate your body and mind</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Center */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="experience-card h-100 position-relative overflow-hidden rounded-3 shadow-sm">
                <img src="/imges/Gallery4.jpg" onError={handleImgError} className="w-100 h-100" style={{height: '280px', objectFit: 'cover'}} alt="Business Center" />
                <div className="experience-overlay position-absolute w-100 h-100 d-flex align-items-end p-3" style={{background: 'linear-gradient(transparent, rgba(0,0,0,0.7))'}}>
                  <div className="text-white">
                    <h5 className="fw-bold mb-1">Business Center</h5>
                    <p className="mb-0 small">Modern facilities for meetings</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recreation */}
            <div className="col-lg-4 col-md-12">
              <div className="experience-card h-100 position-relative overflow-hidden rounded-3 shadow-sm">
                <img src="/imges/Gallery5.jpeg" onError={handleImgError} className="w-100 h-100" style={{height: '280px', objectFit: 'cover'}} alt="Recreation" />
                <div className="experience-overlay position-absolute w-100 h-100 d-flex align-items-end p-3" style={{background: 'linear-gradient(transparent, rgba(0,0,0,0.7))'}}>
                  <div className="text-white">
                    <h5 className="fw-bold mb-1">Recreation</h5>
                    <p className="mb-0 small">Pool, fitness, and entertainment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">What Our Guests Say</h2>
          <div className="row g-4">
            {[ 
              { name: 'Amina', text: 'An unforgettable experience! Exceptional service and beautiful rooms.', rating: 5 },
              { name: 'Omar', text: 'Great location and amenities. Highly recommended for business trips.', rating: 4 },
              { name: 'Laila', text: 'The spa and pool were amazing. I will definitely come back!', rating: 5 }
            ].map((t, i) => (
              <div key={i} className="col-md-4">
                <div className="testimonial-card h-100 p-4 bg-white shadow-sm rounded text-center">
                  <div className="d-flex flex-column align-items-center mb-3">
                    <div className="avatar mb-2"><i className="bi bi-person"></i></div>
                    <div>
                      <h6 className="mb-1">{t.name}</h6>
                      <div className="text-warning small">
                        {Array.from({length: t.rating}).map((_, s) => <i key={s} className="bi bi-star-fill"></i>)}
                        {Array.from({length: 5 - t.rating}).map((_, s) => <i key={`e${s}`} className="bi bi-star"></i>)}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted mb-0">“{t.text}”</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Contact Us</h2>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title mb-3">Send us a message</h5>
                  <form>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="name">Name</label>
                      <input id="name" className="form-control" type="text" placeholder="Your name" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="email">Email</label>
                      <input id="email" className="form-control" type="email" placeholder="you@example.com" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="message">Message</label>
                      <textarea id="message" className="form-control" rows="4" placeholder="How can we help?" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
                <iframe title="map" src="https://maps.google.com/maps?q=Dubai&t=&z=13&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA (moved to end) */}
      <section id="newsletter" className="py-5 newsletter-section text-white">
        <div className="container">
          <div className="row align-items-center g-3">
            <div className="col-lg-6">
              <h3 className="mb-2">Get exclusive offers in your inbox</h3>
              <p className="mb-0 text-white-50">Subscribe to receive members‑only discounts and updates.</p>
            </div>
            <div className="col-lg-6">
              <form className="d-flex gap-2">
                <input type="email" className="form-control" placeholder="Enter your email" required />
                <button className="btn btn-light fw-semibold" type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (moved to end) */}
      <section id="faq" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="q1"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="true" aria-controls="a1">What is the check‑in and check‑out time?</button></h2>
              <div id="a1" className="accordion-collapse collapse show" aria-labelledby="q1" data-bs-parent="#faqAccordion">
                <div className="accordion-body">Check‑in is from 3:00 PM and check‑out is until 12:00 PM.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="q2"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="a2">Do you offer airport transfer?</button></h2>
              <div id="a2" className="accordion-collapse collapse" aria-labelledby="q2" data-bs-parent="#faqAccordion">
                <div className="accordion-body">Yes, we can arrange airport transfers upon request for an additional fee.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="q3"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="a3">Is breakfast included in the room rate?</button></h2>
              <div id="a3" className="accordion-collapse collapse" aria-labelledby="q3" data-bs-parent="#faqAccordion">
                <div className="accordion-body">Breakfast packages are available; some rates include breakfast. Please check your booking details.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer text-white pt-5 mt-5">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <h5 className="fw-bold mb-3">Elysia Hotel</h5>
              <p className="text-white-50">Experience the finest in luxury accommodations across prime destinations. Exceptional service, elegant design, and unforgettable stays.</p>
              <div className="d-flex justify-content-center gap-3 social mt-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="bi bi-twitter"></i></a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
              </div>
            </div>
            <div className="col-6 col-md-2">
              <h6 className="text-uppercase mb-3">Quick Links</h6>
              <ul className="list-unstyled text-white-50 small mb-0">
                <li><a className="text-decoration-none" href="#availability">Availability</a></li>
                <li><a className="text-decoration-none" href="#rooms">Rooms</a></li>
                <li><a className="text-decoration-none" href="#amenities">Amenities</a></li>
                <li><a className="text-decoration-none" href="#dining">Dining</a></li>
                <li><a className="text-decoration-none" href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div className="col-6 col-md-3">
              <h6 className="text-uppercase mb-3">Contact</h6>
              <ul className="list-unstyled text-white-50 small mb-0">
                <li className="mb-2"><i className="bi bi-telephone me-2"></i> +971 123 456 789</li>
                <li className="mb-2"><i className="bi bi-envelope me-2"></i> info@elysiahotel.com</li>
                <li><i className="bi bi-geo-alt me-2"></i> Dubai, United Arab Emirates</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h6 className="text-uppercase mb-3">Newsletter</h6>
              <form className="d-flex gap-2 justify-content-center">
                <input type="email" className="form-control form-control-sm" placeholder="Email address" required />
                <button className="btn btn-primary btn-sm" type="submit">Subscribe</button>
              </form>
            </div>
          </div>
          <hr className="border-secondary my-4" />
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center small text-white-50">
            <p className="mb-2 mb-md-0 text-center">&copy; {new Date().getFullYear()} Elysia Hotel. All rights reserved.</p>
            <a href="#top" className="btn btn-sm btn-outline-light ms-md-3"><i className="bi bi-arrow-up me-1"></i> Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/book" element={<BookingPage />} />
    </Routes>
  );
}
