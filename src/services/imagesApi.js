const apiKey = '19922290-d1fcc8d698349f9cb6de79e81';

function fetchImages(searchQuery, page) {
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`;

  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(({ hits }) => {
      return hits;
    });
}

export default fetchImages;
