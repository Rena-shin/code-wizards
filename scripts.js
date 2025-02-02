// Get the hospital ID from the URL query string
const hospitalId = new URLSearchParams(window.location.search).get('hospitalId');

// Get the hospital details from the hospitals array
const hospital = hospitals.find((hospital) =| hospital.id === parseInt(hospitalId));

// Update the hospital image
document.getElementById('hospital-image').src = hospital.image;

// Update the hospital details on the page
document.getElementById('hospital-name').textContent = hospital.name;
document.getElementById('hospital-address').textContent = hospital.address;
document.getElementById('hospital-phone-number').textContent = hospital.phoneNumber;
document.getElementById('hospital-email').textContent = hospital.email;

// Update the filter details on the page
document.getElementById('hospital-specialty').textContent = Specialty: ${hospital.specialty};
document.getElementById('hospital-rating').textContent = Rating: ${hospital.rating};
document.getElementById('hospital-location').textContent = Location: ${hospital.location};

// Initialize the Google Map
function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: parseFloat(hospital.latitude), lng: parseFloat(hospital.longitude) },
    zoom: 15,
  });

  const marker = new google.maps.Marker({
    position: { lat: parseFloat(hospital.latitude), lng: parseFloat(hospital.longitude) },
    map: map,
  });
}

// Load the Google Maps API
function loadGoogleMaps() {
  const script = document.createElement('script');
  script.src = https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap;
  document.body.appendChild(script);
}

loadGoogleMaps(); 