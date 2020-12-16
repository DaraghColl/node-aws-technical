// fetch data buttons
const regionsButton = document.getElementById('_get_all_regions');
const vpcsButton = document.getElementById('_get_all_vpcs');
const subnetsButton = document.getElementById('_get_all_subnets');

// event listeners
regionsButton.addEventListener('click', () => {
  fetchRegions();
});

// fetch regions
function fetchRegions() {
  fetch('/api/regions')
    .then((response) => response.json())
    .then((data) => console.log(data));
}
