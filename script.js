function activateLink(link) {
    // Remove active class from all links
    var links = document.querySelectorAll('.nav-item-header a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });

    // Add active class to the clicked link
    link.classList.add('active');
}

// For Download Resume Button
document.getElementById('downloadBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default action of the link
    alert('Muhammad Sarib Is Working On This Site');
    window.location.href = 'index.html'; // Redirect to the resume download after the alert
});

// For My Portfolios Button
function showAlert() {
    alert("If You Want To See Muhammad Sarib Created Websites Portfolios Then Contact This Number! +92 333 2891903");
}