document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const grade = document.getElementById('grade').value;

    // Simple validation
    if (name && email && age && grade) {
        document.getElementById('message').innerText = 'Registration successful!';
        const apiUrl = 'http://localhost:5000/api/v1/registration';
const data = {
  name: name,
  email: email,
  age: age,
  grade: grade,
};

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
};
fetch(apiUrl, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    outputElement.textContent = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    console.error

('Error:', error);
  });
    } else {
        document.getElementById('message').innerText = 'Please fill in all fields.';
    }
});
