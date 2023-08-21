fetch("https://api.tvmaze.com/shows")
  .then(response => response.json())
  .then(data => {
    // Filter shows based on genres
    const trendingShows = data.filter(show => show.genres.includes("Trending"));
    const adventureShows = data.filter(show => show.genres.includes("Adventure"));
    const dramaShows = data.filter(show => show.genres.includes("Drama"));

    // Create HTML elements and append the data
    const trendingContainer = document.getElementById("trending-container");
    const adventureContainer = document.getElementById("adventure-container");
    const dramaContainer = document.getElementById("drama-container");

    trendingShows.forEach(show => {
      const showElement = document.createElement("p");
      showElement.textContent = show.name;
      trendingContainer.appendChild(showElement);
    });

    adventureShows.forEach(show => {
      const showElement = document.createElement("p");
      showElement.textContent = show.name;
      adventureContainer.appendChild(showElement);
    });

    dramaShows.forEach(show => {
      const showElement = document.createElement("p");
      showElement.textContent = show.name;
      dramaContainer.appendChild(showElement);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });
