const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'; // Example API endpoint

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('API data:', data);
    
  })
  .catch(error => {
   
    console.error('Error fetching data:', error);
  });