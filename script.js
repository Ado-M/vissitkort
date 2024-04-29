document.addEventListener("DOMContentLoaded", function() {
    fetchUserData();
});

function fetchUserData() {
    fetch('https://randomuser.me/api')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            document.getElementById('profilePicture').src = user.picture.large;
            document.getElementById('fullName').textContent = `${user.name.first} ${user.name.last}`;
            document.getElementById('email').textContent = `Email: ${user.email}`;
            document.getElementById('address').textContent = `Address: ${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`;
            document.getElementById('id').textContent = `ID: ${user.id.name} ${user.id.value}`;
        })
        .catch(error => console.error('Error fetching data:', error));
}
