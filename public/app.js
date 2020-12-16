// fetch data buttons
const regionsButton = document.getElementById('_get_all_regions');
const vpcsButton = document.getElementById('_get_all_vpcs');
const subnetsButton = document.getElementById('_get_all_subnets');

const dataSection = document.getElementById('_data_section');

// event listeners
regionsButton.addEventListener('click', () => {
  fetchRegions();
});

// fetch regions
const fetchRegions = () => {
  fetch('/api/regions')
    .then((response) => response.json())
    .then((data) => {
      createRegionsHTML(data.data);
    });
};

const createRegionsHTML = (regions) => {
  console.log(regions);

  regions.forEach((region) => {
    let card = document.createElement('div');
    card.classList.add('card');
    let template;

    template = `
        <h1 class="card__heading">${region.RegionName}</h1>
        <h2 class="card__endpoint">${region.Endpoint}</h2>
    `;

    card.innerHTML = template;

    dataSection.appendChild(card);
  });
};
