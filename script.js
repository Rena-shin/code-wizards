
// Get the search bar and results container elements
const searchInput = document.getElementById('search');
const resultsContainer = document.getElementById('results');
const searchButton = document.getElementById('search-btn');

const hospitals = [
    { id:1, name: 'Kerala Institute of Medical Sciences', address: 'P.B.No.1, Anayara P.O, Thiruvananthapuram, Kerala 695029', distance: '2.5 km' },
    { id:2,name: 'Government Medical College, Thiruvananthapuram', address: 'Medical College P.O, Thiruvananthapuram, Kerala 695011', distance: '4.2 km' },
    { id:3,name: 'SUT Royal Hospital', address: 'Trivandrum, Kerala', distance: '6.1 km' },
    { id:4,name: 'KIMS Al Shifa Super Speciality Hospital', address: 'KIMS Health City, Thiruvananthapuram, Kerala', distance: '8.5 km' },
    { id:5, name: 'Ananthapuri Hospitals and Research Institute', address: 'Chacka, Thiruvananthapuram, Kerala 695024', distance: '10.2 km' },
    { id: 7, name: 'Caritas Hospital', address: 'Thiruvananthapuram, Kerala', distance: '11.5 km' },
    { id: 8, name: 'Sree Uthradom Thirunal Hospital', address: 'Thiruvananthapuram, Kerala', distance: '12.8 km' },
    { id: 9, name: 'Medical College Hospital', address: 'Thiruvananthapuram, Kerala', distance: '13.2 km' },
    { id: 10, name: 'Sree Chitra Tirunal Institute for Medical Sciences and Technology', address: 'Thiruvananthapuram, Kerala', distance: '14.5 km' },
    { id: 11, name: 'Kerala Cancer Institute', address: 'Thiruvananthapuram, Kerala', distance: '15.1 km' },
    { id: 12, name: 'Regional Cancer Centre', address: 'Thiruvananthapuram, Kerala', distance: '15.6 km' },
    { id: 13, name: 'SUT Institute of Medical Sciences', address: 'Thiruvananthapuram, Kerala', distance: '16.3 km' },
    { id: 14, name: 'Pushpagiri Medical College Hospital', address: 'Thiruvalla, Kerala', distance: '17.1 km' },
    { id: 15, name: 'Believers Church Medical College Hospital', address: 'Thiruvalla, Kerala', distance: '17.8 km' },
    { id: 16, name: 'Mannam Memorial Mission Hospital', address: 'Marthandom, Kerala', distance: '18.5 km' },
    { id: 17, name: 'CSI Mission Hospital', address: 'Neyyoor, Kerala', distance: '19.2 km' },
    { id: 18, name: 'St. Thomas Hospital', address: 'Kozhencherry, Kerala', distance: '20.1 km' },
    { id: 19, name: 'Muthoot Medical Centre', address: 'Pathanamthitta, Kerala', distance: '20.8 km' },
    { id: 20, name: 'Pushpagiri Medical College Hospital', address: 'Tiruvalla, Kerala', distance: '21.5 km' },
    { id: 21, name: 'St. Gregorios Mission Hospital', address: 'Parumala, Kerala', distance: '22.2 km' },
    { id: 22, name: 'Mannam Memorial N.S.S Medical Mission Hospital', address: 'Karuvatta, Kerala', distance: '23.1 km' },
    { id: 23, name: 'S.H. Medical Centre', address: 'Kottarakara, Kerala', distance: '23.8 km' },
    { id: 24, name: 'Karuna Medical College Hospital', address: 'Palakkad, Kerala', distance: '24.5 km' },
    { id: 25, name: 'Al-Shifa Hospital', address: 'Perintalmanna, Kerala', distance: '25.2 km' },
    { id: 26, name: 'Moulana Hospital', address: 'Perintalmanna, Kerala', distance: '25.9 km' },
    { id: 27, name: 'MES Medical College Hospital', address: 'Perinthalmanna, Kerala', distance: '26.6 km' },
    { id: 28, name: 'Malabar Medical College Hospital', address: 'Ulliyeri, Kerala', distance: '27.3 km' },
    { id: 29, name: 'Kerala Institute of Medical Sciences', address: 'Kottayam, Kerala', distance: '28.1 km' },
    { id: 30, name: 'Caritas Hospital', address: 'Kottayam, Kerala', distance: '28.8 km' },
    { id: 31, name: 'St. Thomas Hospital', address: 'Kottayam, Kerala', distance: '29.5 km' },
    { id: 32, name: 'Matha Hospital', address: 'Kottayam, Kerala', distance: '30.2 km' },
    { id: 33, name: 'Kottayam Medical College Hospital', address: 'Kottayam, Kerala', distance: '30.9 km' },
      ];

// Define a function to retrieve the nearest hospital details
function getNearestHospitals(query) {
  // Mock data for hospitals
    console.log(query)


  // Create a list of hospital results with links
  const resultsHtml = hospitals.map((hospital) => {
    return `
      <div class="hospital-result">
        <a href="hospital-details.html?id=${hospital.id}" class="hospital-link">
          <h2>${hospital.name}</h2>
          <p>${hospital.address}</p>
          <p>Distance: ${hospital.distance}</p>
        </a>
      </div>
    `;
  }).join('');

  // Update the results container with the hospital results
  resultsContainer.innerHTML = resultsHtml;
}

// Add an event listener to the search button
searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  console.log("cliked")
  if (query !== '') {
    getNearestHospitals(query);
  } else {
    resultsContainer.innerHTML = 'please search any place';
  }
});

// Optionally, prevent form submission if you have a form surrounding the search bar
searchInput.form?.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent page reload
  const query = searchInput.value.trim();
  if (query !== '') {
    getNearestHospitals(query);
  } else {
    resultsContainer.innerHTML = 'please search any place';
  }
});
