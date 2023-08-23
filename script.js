const countriesList = document.getElementById('countriesList');

fetch('https://dev-bhsjyfcfhuj8wkm.api.raw-labs.com/json-programming-heroes')
    .then(response => response.json())
    .then(data => {
        // Process the data and create country cards
        data.forEach(country => {
            const countryCard = document.createElement('div');
            countryCard.classList.add('col-md-4', 'mb-4', 'country-card');

            countryCard.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Hero_name: ${country.Hero_name}</h5>
                        <p class="card-text">ero_superpower: ${country.Hero_superpower}</p>
                        <p class="card-text">hero_uniform_color: ${country.hero_uniform_color} sq km</p>
                    </div>
                </div>
            `;

            countriesList.appendChild(countryCard);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
