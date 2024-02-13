document.getElementById('form-selection').addEventListener('change', function() {
    var privateForm = document.getElementById('private-form');
    var businessForm = document.getElementById('business-form');
    if (document.getElementById('private').checked) {
        privateForm.style.display = 'block';
        businessForm.style.display = 'none';
    } else {
        privateForm.style.display = 'none';
        businessForm.style.display = 'block';
    }
});