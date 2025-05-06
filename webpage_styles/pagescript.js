// Open the sidebar
function openSidebar() {
    document.getElementById("mySidebar").style.width = "250px";
}
// Close the Sidebar
function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0";
}
// Function to filter sidebar links based on search input
function searchSidebar() {
    const input = document.getElementById('searchBar');
    const filter = input.value.toUpperCase();
    const sidebar = document.getElementById('mySidebar');
    const links = sidebar.getElementsByTagName('a');

    for (let i = 0; i < links.length; i++) {
        const txtValue = links[i].textContent || links[i].innerText;
        links[i].style.display = txtValue.toUpperCase().indexOf(filter) > -1 ? '' : 'none';
    }
}
// Function to scroll smoothly to a section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}


// Function to handle login form submission
function handleLoginFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login functionality (e.g., validate credentials)
    console.log('Login form submitted:', { username, password });

    // Display a success message
    const loginResponseMessage = document.getElementById('loginResponseMessage');
    loginResponseMessage.style.display = 'block';

    // Optionally, clear the form fields
    document.getElementById('loginForm').reset();
}

    // Attach the event listener to the form
    if (document.getElementById('loginForm')) {
        document.getElementById('loginForm').addEventListener('submit', handleLoginFormSubmission);
    }