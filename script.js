// Contact Form Submission Simulation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out, Dawn will get back to you soon!');
    // Reset form
    e.target.reset();
});
