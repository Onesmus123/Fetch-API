const filtersPerResource = {
  posts: ['userId', 'id', 'title'],
  comments: ['postId', 'id', 'email'],
  albums: ['userId', 'id', 'title'],
  photos: ['albumId', 'id', 'title'],
  todos: ['userId', 'id', 'completed'],
  users: ['id', 'username', 'email']
};

// Generate filter inputs based on selected resource
function updateFilters() {
  const resource = document.getElementById('resource').value; // e.g., "posts"
  const filters = filtersPerResource[resource]; // get allowed filters
  const filterContainer = document.getElementById('filterFields');

  filterContainer.innerHTML = ''; // clear previous filters

  filters.forEach(key => {
    const input = document.createElement('input'); // create input field
    input.type = 'text';
    input.placeholder = `Filter by ${key}`; // e.g., "Filter by title"
    input.name = key;
    filterContainer.appendChild(input); // add to page
  });
}

// Fetch data using selected filters
function fetchData() {
  const resource = document.getElementById('resource').value;
  const inputs = document.querySelectorAll('#filterFields input');
  const params = {}; // to hold filters

  inputs.forEach(input => {
    if (input.value.trim() !== '') {
      params[input.name] = input.value.trim(); // {title: "something"}
    }
  });

  const queryString = new URLSearchParams(params).toString();
  const url = `https://jsonplaceholder.typicode.com/${resource}${queryString ? '?' + queryString : ''}`;

  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error("Fetch error");
      return res.json();
    })
    .then(data => {
      document.getElementById('results').textContent = JSON.stringify(data, null, 2);
    })
    .catch(err => {
      document.getElementById('results').textContent = `Error: ${err.message}`;
    });
}

// Initialize filter fields on load
updateFilters();
