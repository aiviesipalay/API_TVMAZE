function validateForm() {
  const input = document.getElementById("search-input");
  const validationMessage = document.getElementById("validation-message");
  if (input.value === "") {
    validationMessage.style.display = "block";
    return false;
  } else {
    validationMessage.style.display = "none";
    return true;
  }
}

function validateForm() {
  const input = document.getElementById("search-input");
  const validationMessage = document.getElementById("validation-message");
  if (input.value === "") {
    validationMessage.style.display = "block";
    return false;
  } else {
    validationMessage.style.display = "none";
    return true;
  }
}


const trendingNowContainer = document.querySelector('.trending-now .slider-container');
const actionAdventuresContainer = document.querySelector('.action-adventures .slider-container');
const dramasContainer = document.querySelector('.dramas .slider-container');

fetch('https://api.tvmaze.com/shows')
  .then(response => response.json())
  .then(data => {
    const trendingNowShows = data.slice(0, 20);
    const actionAdventuresShows = data.filter(show => show.genres.includes('Adventure') || show.genres.includes('Crime')).slice(0, 20);
    const dramaShows = data.filter(show => show.genres.includes('Romance')).slice(0, 20);

    trendingNowShows.forEach(show => {
      const container = document.createElement('div');
      container.classList.add('show-container');

      const image = document.createElement('img');
      image.src = show.image.medium;
      image.addEventListener('mouseover', () => showDetails(show, image));
      container.appendChild(image);

      const title = document.createElement('h3');
      title.textContent = show.name;
      container.appendChild(title);

      trendingNowContainer.appendChild(container);
    });

    actionAdventuresShows.forEach(show => {
      const container = document.createElement('div');
      container.classList.add('show-container');

      const image = document.createElement('img');
      image.src = show.image.medium;
      image.addEventListener('mouseover', () => showDetails(show, image));
      container.appendChild(image);

      const title = document.createElement('h3');
      title.textContent = show.name;
      container.appendChild(title);

      actionAdventuresContainer.appendChild(container);
    });

    dramaShows.forEach(show => {
      const container = document.createElement('div');
      container.classList.add('show-container');

      const image = document.createElement('img');
      image.src = show.image.medium;
      image.addEventListener('mouseover', () => showDetails(show, image));
      container.appendChild(image);

      const title = document.createElement('h3');
      title.textContent = show.name;
      container.appendChild(title);

      dramasContainer.appendChild(container);
    });

    function showDetails(show, image) {
      const details = document.createElement('div');
      details.classList.add('details');

      const rating = document.createElement('div');
      rating.classList.add('rating');
      rating.textContent = `Rating: ${show.rating.average}`;
      details.appendChild(rating);

      const genres = document.createElement('div');
      genres.classList.add('genres');
      genres.textContent = `Genres: ${show.genres.join(', ')}`;
      details.appendChild(genres);

      const summary = document.createElement('div');
      summary.classList.add('summary');
      summary.innerHTML = `Summary: ${show.summary}`;
      details.appendChild(summary);

      image.parentElement.appendChild(details);
    }
  });


