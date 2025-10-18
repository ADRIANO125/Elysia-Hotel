import React, { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ROOM_FEATURES = {
  WIFI: 'WiFi',
  BREAKFAST: 'Breakfast',
  SEA_VIEW: 'Sea View',
  BALCONY: 'Balcony',
  MINIBAR: 'Minibar',
  POOL_ACCESS: 'Pool Access',
  SPA_ACCESS: 'Spa Access',
  AIR_CONDITIONING: 'Air Conditioning'
};

export default function BookingPage() {
  const navigate = useNavigate();

  const allRooms = useMemo(() => {
    const base = [
      { id: 1, name: 'Deluxe Room', description: 'Spacious room with a king-sized bed and city view', price: 199, size: '45 m²', maxGuests: 2, beds: '1 King Bed', bedCount: 1, image: '/imges/Deluxe-Room.jpg', features: [ROOM_FEATURES.WIFI, ROOM_FEATURES.AIR_CONDITIONING, ROOM_FEATURES.MINIBAR], type: 'room', rating: 4 },
      { id: 2, name: 'Executive Suite', description: 'Luxurious suite with separate living area and premium amenities', price: 349, size: '65 m²', maxGuests: 3, beds: '1 King Bed + 1 Sofa Bed', bedCount: 2, image: '/imges/Executive-Suite.jpg', features: [ROOM_FEATURES.WIFI, ROOM_FEATURES.BREAKFAST, ROOM_FEATURES.SEA_VIEW, ROOM_FEATURES.AIR_CONDITIONING], type: 'suite', rating: 5 },
      { id: 3, name: 'Presidential Suite', description: 'Ultimate luxury with panoramic views and premium services', price: 599, size: '120 m²', maxGuests: 4, beds: '1 King Bed + 2 Single Beds', bedCount: 3, image: '/imges/Presidential-Suite.jpg', features: [ROOM_FEATURES.WIFI, ROOM_FEATURES.BREAKFAST, ROOM_FEATURES.SEA_VIEW, ROOM_FEATURES.BALCONY, ROOM_FEATURES.MINIBAR, ROOM_FEATURES.POOL_ACCESS, ROOM_FEATURES.SPA_ACCESS, ROOM_FEATURES.AIR_CONDITIONING], type: 'suite', rating: 5 },
      { id: 4, name: 'Family Room', description: 'Spacious accommodation perfect for families', price: 279, size: '55 m²', maxGuests: 4, beds: '1 Queen Bed + 2 Single Beds', bedCount: 3, image: '/imges/Family-Room.webp', features: [ROOM_FEATURES.WIFI, ROOM_FEATURES.AIR_CONDITIONING, ROOM_FEATURES.MINIBAR], type: 'room', rating: 4 },
      { id: 5, name: 'Superior Twin Room', description: 'Comfortable twin room ideal for friends or colleagues', price: 179, size: '32 m²', maxGuests: 2, beds: '2 Single Beds', bedCount: 2, image: '/imges/Superior-Twin-Room.jpg', features: [ROOM_FEATURES.WIFI, ROOM_FEATURES.AIR_CONDITIONING], type: 'room', rating: 3 },
      { id: 6, name: 'Honeymoon Suite', description: 'Romantic suite with private balcony and sea view', price: 429, size: '70 m²', maxGuests: 2, beds: '1 King Bed', bedCount: 1, image: '/imges/Honeymoon-Suite.jpg', features: [ROOM_FEATURES.SEA_VIEW, ROOM_FEATURES.BALCONY, ROOM_FEATURES.WIFI, ROOM_FEATURES.BREAKFAST], type: 'suite', rating: 5 }
    ];
    const extras = [
      { name: 'Junior Suite', price: 259, size: '50 m²', maxGuests: 3, beds: '1 Queen Bed + Sofa', bedCount: 2, type: 'suite', features: [ROOM_FEATURES.WIFI, ROOM_FEATURES.BREAKFAST, ROOM_FEATURES.AIR_CONDITIONING], image: '/imges/Junior-Suite.avif' },
      { name: 'City View Room', price: 209, size: '38 m²', maxGuests: 2, beds: '1 King Bed', bedCount: 1, type: 'room', features: [ROOM_FEATURES.WIFI, ROOM_FEATURES.MINIBAR, ROOM_FEATURES.AIR_CONDITIONING], image: '/imges/City-View.jpg' },
      { name: 'Sea View Deluxe', price: 329, size: '48 m²', maxGuests: 3, beds: '1 King Bed', bedCount: 1, type: 'room', features: [ROOM_FEATURES.SEA_VIEW, ROOM_FEATURES.WIFI, ROOM_FEATURES.AIR_CONDITIONING, ROOM_FEATURES.BREAKFAST], image: '/imges/Sea-View-Deluxe.jpg' },
      { name: 'Twin Executive', price: 289, size: '42 m²', maxGuests: 2, beds: '2 Single Beds', bedCount: 2, type: 'room', features: [ROOM_FEATURES.WIFI, ROOM_FEATURES.AIR_CONDITIONING], image: '/imges/Twin-Executive.jpg' },
      { name: 'Garden Suite', price: 379, size: '68 m²', maxGuests: 4, beds: '1 King Bed + Sofa', bedCount: 2, type: 'suite', features: [ROOM_FEATURES.BALCONY, ROOM_FEATURES.WIFI, ROOM_FEATURES.MINIBAR], image: '/imges/Garden-Suite.webp' },
      { name: 'Family Suite', price: 309, size: '60 m²', maxGuests: 5, beds: '1 Queen Bed + 2 Single Beds', bedCount: 3, type: 'suite', features: [ROOM_FEATURES.WIFI, ROOM_FEATURES.MINIBAR, ROOM_FEATURES.AIR_CONDITIONING], image: '/imges/Family-Suite.jpg' },
      { name: 'Premium King', price: 239, size: '40 m²', maxGuests: 2, beds: '1 King Bed', bedCount: 1, type: 'room', features: [ROOM_FEATURES.WIFI, ROOM_FEATURES.AIR_CONDITIONING], image: '/imges/Premium-King.jpg' },
      { name: 'Corner Suite', price: 459, size: '75 m²', maxGuests: 3, beds: '1 King Bed', bedCount: 1, type: 'suite', features: [ROOM_FEATURES.SEA_VIEW, ROOM_FEATURES.BALCONY, ROOM_FEATURES.WIFI, ROOM_FEATURES.SPA_ACCESS], image: '/imges/Corner-Suite.jpg' },
      { name: 'Standard Twin', price: 169, size: '28 m²', maxGuests: 2, beds: '2 Single Beds', bedCount: 2, type: 'room', features: [ROOM_FEATURES.WIFI], image: '/imges/Standard-Twin.jpg' },
      { name: 'Studio Suite', price: 319, size: '55 m²', maxGuests: 3, beds: '1 King Bed + Sofa', bedCount: 2, type: 'suite', features: [ROOM_FEATURES.MINIBAR, ROOM_FEATURES.WIFI, ROOM_FEATURES.AIR_CONDITIONING], image: '/imges/Studio-Suite.jpg' },
      { name: 'Terrace Suite', price: 499, size: '80 m²', maxGuests: 4, beds: '1 King Bed + Sofa', bedCount: 2, type: 'suite', features: [ROOM_FEATURES.BALCONY, ROOM_FEATURES.SEA_VIEW, ROOM_FEATURES.WIFI], image: '/imges/Terrace-Suite.jpg' },
      { name: 'Economy Room', price: 129, size: '24 m²', maxGuests: 2, beds: '1 Queen Bed', bedCount: 1, type: 'room', features: [ROOM_FEATURES.WIFI], image: '/imges/Economy-Room.jpg' },
      { name: 'Business King', price: 219, size: '38 m²', maxGuests: 2, beds: '1 King Bed', bedCount: 1, type: 'room', features: [ROOM_FEATURES.WIFI, ROOM_FEATURES.BREAKFAST], image: '/imges/Business-King.jpg' }
    ].map((r, idx) => ({ id: 100 + idx, rating: 4, ...r }));

    // Premium rooms and suites with higher prices
    const premiumRooms = [
      { name: 'Royal Suite', price: 799, size: '150 m²', maxGuests: 6, beds: '1 King Bed + 2 Queen Beds', bedCount: 3, type: 'suite', features: [ROOM_FEATURES.WIFI, ROOM_FEATURES.BREAKFAST, ROOM_FEATURES.SEA_VIEW, ROOM_FEATURES.BALCONY, ROOM_FEATURES.MINIBAR, ROOM_FEATURES.POOL_ACCESS, ROOM_FEATURES.SPA_ACCESS, ROOM_FEATURES.AIR_CONDITIONING], image: '/imges/Presidential-Suite.jpg', description: 'The ultimate in luxury with multiple bedrooms and exclusive amenities' },
      { name: 'Penthouse Suite', price: 999, size: '200 m²', maxGuests: 8, beds: '2 King Beds + 2 Single Beds', bedCount: 4, type: 'suite', features: [ROOM_FEATURES.WIFI, ROOM_FEATURES.BREAKFAST, ROOM_FEATURES.SEA_VIEW, ROOM_FEATURES.BALCONY, ROOM_FEATURES.MINIBAR, ROOM_FEATURES.POOL_ACCESS, ROOM_FEATURES.SPA_ACCESS, ROOM_FEATURES.AIR_CONDITIONING], image: '/imges/Executive-Suite.jpg', description: 'Exclusive penthouse with panoramic views and private terrace' },
      { name: 'Ambassador Suite', price: 699, size: '130 m²', maxGuests: 5, beds: '1 King Bed + 1 Queen Bed + Sofa', bedCount: 3, type: 'suite', features: [ROOM_FEATURES.WIFI, ROOM_FEATURES.BREAKFAST, ROOM_FEATURES.SEA_VIEW, ROOM_FEATURES.BALCONY, ROOM_FEATURES.MINIBAR, ROOM_FEATURES.SPA_ACCESS, ROOM_FEATURES.AIR_CONDITIONING], image: '/imges/Corner-Suite.jpg', description: 'Diplomatic-level luxury with separate dining and living areas' },
      { name: 'Ocean View Villa', price: 1299, size: '300 m²', maxGuests: 10, beds: '3 King Beds + 2 Single Beds', bedCount: 5, type: 'suite', features: [ROOM_FEATURES.WIFI, ROOM_FEATURES.BREAKFAST, ROOM_FEATURES.SEA_VIEW, ROOM_FEATURES.BALCONY, ROOM_FEATURES.MINIBAR, ROOM_FEATURES.POOL_ACCESS, ROOM_FEATURES.SPA_ACCESS, ROOM_FEATURES.AIR_CONDITIONING], image: '/imges/Terrace-Suite.jpg', description: 'Private villa with direct ocean access and personal butler service' },
      { name: 'Executive Ocean Suite', price: 549, size: '95 m²', maxGuests: 4, beds: '1 King Bed + 1 Queen Bed', bedCount: 2, type: 'suite', features: [ROOM_FEATURES.WIFI, ROOM_FEATURES.BREAKFAST, ROOM_FEATURES.SEA_VIEW, ROOM_FEATURES.BALCONY, ROOM_FEATURES.MINIBAR, ROOM_FEATURES.AIR_CONDITIONING], image: '/imges/Sea-View-Deluxe.jpg', description: 'Premium ocean-facing suite with executive lounge access' },
      { name: 'Luxury Family Villa', price: 899, size: '180 m²', maxGuests: 8, beds: '2 King Beds + 3 Single Beds', bedCount: 5, type: 'suite', features: [ROOM_FEATURES.WIFI, ROOM_FEATURES.BREAKFAST, ROOM_FEATURES.BALCONY, ROOM_FEATURES.MINIBAR, ROOM_FEATURES.POOL_ACCESS, ROOM_FEATURES.AIR_CONDITIONING], image: '/imges/Family-Suite.jpg', description: 'Spacious family villa with private pool and garden area' }
    ].map((r, idx) => ({ id: 200 + idx, rating: 5, ...r }));

    return [...base, ...extras, ...premiumRooms];
  }, []);


  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 1000,
    selectedFeatures: [],
    roomType: 'all',
    checkIn: '',
    checkOut: '',
    adults: 2,
    withChildren: false,
    children: 0,
    beds: 1
  });

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFilters(prev => ({ ...prev, [name]: checked }));
      return;
    }
    if (name === 'selectedFeatures') return;
    setFilters(prev => ({ ...prev, [name]: type === 'number' ? parseInt(value || 0, 10) : value }));
  };

  const handleFeatureToggle = (feature, isChecked) => {
    setFilters(prev => ({
      ...prev,
      selectedFeatures: isChecked
        ? [...prev.selectedFeatures, feature]
        : prev.selectedFeatures.filter(f => f !== feature)
    }));
  };

  const filteredRooms = allRooms.filter(room => {
    const totalGuests = filters.adults + (filters.withChildren ? filters.children : 0);
    const matchesPrice = room.price >= filters.minPrice && room.price <= filters.maxPrice;
    const matchesType = filters.roomType === 'all' || room.type === filters.roomType;
    const matchesFeatures = filters.selectedFeatures.length === 0 || filters.selectedFeatures.every(f => room.features.includes(f));
    const matchesGuests = room.maxGuests >= Math.max(1, totalGuests);
    const matchesBeds = room.bedCount >= (filters.beds || 1);
    return matchesPrice && matchesType && matchesFeatures && matchesGuests && matchesBeds;
  });

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {/* Navbar (same as homepage, solid background) */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">Elysia Hotel</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/book">Book Now</Link></li>
              <li className="nav-item"><a className="nav-link" href="/#rooms">Rooms</a></li>
              <li className="nav-item"><a className="nav-link" href="/#amenities">Amenities</a></li>
              <li className="nav-item"><a className="nav-link" href="/#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="/#dining">Dining</a></li>
              <li className="nav-item"><a className="nav-link" href="/#services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="/#gallery">Gallery</a></li>
              <li className="nav-item"><a className="nav-link" href="/#testimonials">Testimonials</a></li>
              <li className="nav-item"><a className="nav-link" href="/#contact">Contact</a></li>
              <li className="nav-item"><a className="nav-link" href="/#faq">FAQ</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="card border-0 shadow-sm overflow-hidden">
            <div className="card-header bg-primary bg-gradient text-white py-3">
              <h5 className="mb-0"><i className="bi bi-search me-2"></i>Find Your Perfect Room</h5>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleSearch}>
                <div className="row g-4">
                  {/* Date Range */}
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="form-group">
                      <label htmlFor="checkIn" className="form-label small fw-bold text-muted mb-1">CHECK-IN</label>
                      <div className="input-group">
                        <span className="input-group-text bg-white"><i className="bi bi-calendar3 text-primary"></i></span>
                        <input type="date" className="form-control" id="checkIn" name="checkIn" value={filters.checkIn} onChange={handleFilterChange} required />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="form-group">
                      <label htmlFor="checkOut" className="form-label small fw-bold text-muted mb-1">CHECK-OUT</label>
                      <div className="input-group">
                        <span className="input-group-text bg-white"><i className="bi bi-calendar3 text-primary"></i></span>
                        <input type="date" className="form-control" id="checkOut" name="checkOut" value={filters.checkOut} onChange={handleFilterChange} required />
                      </div>
                    </div>
                  </div>

                  {/* Guests */}
                  <div className="col-6 col-md-4 col-lg-2">
                    <label htmlFor="adults" className="form-label small fw-bold text-muted mb-1">ADULTS</label>
                    <div className="input-group">
                      <span className="input-group-text bg-white"><i className="bi bi-person text-primary"></i></span>
                      <select className="form-select" id="adults" name="adults" value={filters.adults} onChange={handleFilterChange}>
                        {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Adult' : 'Adults'}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <label className="form-label small fw-bold text-muted mb-1 d-flex justify-content-between">
                      <span>CHILDREN</span>
                      <div className="form-check form-switch d-inline-block align-middle m-0">
                        <input className="form-check-input" type="checkbox" id="withChildren" name="withChildren" checked={filters.withChildren} onChange={handleFilterChange} />
                      </div>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-white"><i className="bi bi-people text-primary"></i></span>
                      <select className="form-select" id="children" name="children" value={filters.children} onChange={handleFilterChange} disabled={!filters.withChildren}>
                        {[0,1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Child' : 'Children'}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="col-12 col-md-6 col-lg-3">
                    <label className="form-label small fw-bold text-muted mb-1">PRICE RANGE</label>
                    <div className="row g-2">
                      <div className="col-6">
                        <div className="input-group">
                          <span className="input-group-text bg-white text-muted">$</span>
                          <input type="number" className="form-control" placeholder="Min" value={filters.minPrice} onChange={(e) => setFilters({...filters, minPrice: e.target.value})} style={{minWidth: '80px'}} />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="input-group">
                          <span className="input-group-text bg-white text-muted">$</span>
                          <input type="number" className="form-control" placeholder="Max" value={filters.maxPrice} onChange={(e) => setFilters({...filters, maxPrice: e.target.value})} style={{minWidth: '80px'}} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Room Type */}
                  <div className="col-6 col-md-3 col-lg-2">
                    <label htmlFor="roomType" className="form-label small fw-bold text-muted mb-1">ROOM TYPE</label>
                    <div className="input-group">
                      <span className="input-group-text bg-white"><i className="bi bi-door-open text-primary"></i></span>
                      <select className="form-select" id="roomType" name="roomType" value={filters.roomType} onChange={handleFilterChange}>
                        <option value="all">All Types</option>
                        <option value="room">Room</option>
                        <option value="suite">Suite</option>
                      </select>
                    </div>
                  </div>

                  {/* Beds */}
                  <div className="col-6 col-md-3 col-lg-2">
                    <label htmlFor="beds" className="form-label small fw-bold text-muted mb-1">BEDS</label>
                    <div className="input-group">
                      <span className="input-group-text bg-white"><i className="bi bi-moon text-primary"></i></span>
                      <select className="form-select" id="beds" name="beds" value={filters.beds} onChange={handleFilterChange}>
                        <option value="1">1+ Bed</option>
                        <option value="2">2+ Beds</option>
                        <option value="3">3+ Beds</option>
                        <option value="4">4+ Beds</option>
                      </select>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="col-12">
                    <div className="mb-3 small fw-bold text-muted">AMENITIES</div>
                    <div className="row g-3">
                      <div className="col-12">
                        <div className="d-flex flex-wrap gap-3">
                          {Object.entries({
                            'wifi': 'WiFi',
                            'tv': 'TV',
                            'snow': 'Air Conditioning',
                            'cup-hot': 'Breakfast',
                            'water': 'Sea View',
                            'door-open': 'Balcony',
                            'safe': 'Minibar',
                            'shield-check': 'Pool Access'
                          }).map(([icon, label]) => (
                            <div className="form-check form-check-inline" key={icon}>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id={`feat-${icon}`}
                                checked={filters.selectedFeatures.includes(label)}
                                onChange={(e) => handleFeatureToggle(label, e.target.checked)}
                              />
                              <label className="form-check-label small fw-medium" htmlFor={`feat-${icon}`}>
                                <i className={`bi bi-${icon} me-1 text-primary`}></i> {label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="col-12 mt-2">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-muted small">
                        <i className="bi bi-info-circle me-1"></i> {filteredRooms.length} {filteredRooms.length === 1 ? 'room' : 'rooms'} available
                      </span>
                      <button type="submit" className="btn btn-primary px-4">
                        <i className="bi bi-search me-2"></i>Search Rooms
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h3 className="mb-4">Available Rooms</h3>
          <div className="row g-4">
            {filteredRooms.map(room => (
              <div key={room.id} className="col-lg-4 col-md-6">
                <div className="card h-100 shadow-sm room-card border-0 overflow-hidden">
                  <div className="position-relative">
                    <img src={room.image} className="card-img-top" alt={room.name} style={{ height: '220px', objectFit: 'cover' }} />
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
        </div>
      </section>

      {/* Footer (same as homepage) */}
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
                <li><a className="text-decoration-none" href="/#availability">Availability</a></li>
                <li><a className="text-decoration-none" href="/#rooms">Rooms</a></li>
                <li><a className="text-decoration-none" href="/#amenities">Amenities</a></li>
                <li><a className="text-decoration-none" href="/#dining">Dining</a></li>
                <li><a className="text-decoration-none" href="/#faq">FAQ</a></li>
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
