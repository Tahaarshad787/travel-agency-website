function resetForm() {
    // Prevent the form from actually submitting for demonstration purposes
    event.preventDefault();

    // Reset the form fields
    document.querySelector('.contact-form').reset();
}
