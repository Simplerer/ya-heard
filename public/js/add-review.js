async function newFormHandler(event) {
  event.preventDefault();
  const title = document.querySelector('#title').value;
  const comment = document.querySelector('#comment').value;
  const category = document.querySelector('#category_id');
  const category_id = category.value;

  const location = document.querySelector('#location_id');
  const location_id = location.value;

  if (category_id = "1") {
    category_name = 'Arts and Entertainment'
  } else if (category_id = "2") {
    category_name = 'Food and Beverages'
  } else if (category_id = "3") {
    category_name = 'Shopping and Retail'
  } else if(category_id = "4") {
    category_name = 'Services'
  };

  if (location_id = "1") {
    location_name = 'Charlotte'
  } else if (location_id = "2") {
    location_name = 'Asheville'
  } else if (location_id = "3") {
    location_name = 'France'
  } else if(location_id = "4") {
    location_name = 'Ecuador'
  };
  // Send fetch request to add a new review

  const response = await fetch(`/recommendation`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      comment,
      category_name,
      location_name,
    }),

  });
  //if the recommendation is added
  if (response.ok) {
    document.location.replace('/recommendation');
  } else {
    alert('Failed to add recommendation');
  }
}

document.querySelector('.new-recommendation-form').addEventListener('submit', newFormHandler);
