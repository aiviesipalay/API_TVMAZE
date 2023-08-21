const form = document.querySelector('#searchForm');
const validationMessage = document.querySelector('#validation-message');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.q.value.trim();
    if (!searchTerm) {
        validationMessage.style.display = 'block';
        return;
    }
    validationMessage.style.display = 'none';
    const config = {
        params: {
            q: searchTerm
        },
        headers: {}
    };
    try {
        const res = await axios.get(`https://api.tvmaze.com/search/shows?`, config);
        displayImage(res.data);
    } catch (error) {
        console.error(error);
        alert('An error occurred while searching for shows');
    }
    form.elements.q.value = '';
});

const searchResults = document.getElementById('search-results');

const displayImage = (shows) => {
    searchResults.innerHTML = ''; // Clear previous search results
    for (let show of shows) {
        if (show.show.image) {
            const img = document.createElement('img');
            img.src = show.show.image.medium;

            const name = document.createElement('div');
            name.textContent = show.show.name;

            const rating = document.createElement('div');
            rating.textContent = `Rating: ${show.show.rating.average}`;

            const genre = document.createElement('div');
            genre.textContent = `Genre: ${show.show.genres.join(', ')}`;

            const summary = document.createElement('div');
            summary.textContent = `Summary: ${show.show.summary}`;

            const showDetails = document.createElement('div');
            showDetails.classList.add('show-details');
            showDetails.appendChild(rating);
            showDetails.appendChild(genre);
            showDetails.appendChild(summary);

            const showContainer = document.createElement('div');
            showContainer.classList.add('show-container');
            showContainer.appendChild(img);
            showContainer.appendChild(name);
            showContainer.appendChild(showDetails);

            // Add event listener to show details when the mouse hovers over the image
            showContainer.addEventListener('mouseover', () => {
                showDetails.style.display = 'block';
            });

            // Hide show details when the mouse moves away from the image
            showContainer.addEventListener('mouseout', () => {
                showDetails.style.display = 'none';
            });

            searchResults.appendChild(showContainer); // Add image to search results container
        }
    }
};
