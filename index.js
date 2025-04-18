document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting
    var passcode = document.getElementById('passcode').value;
    var messageSection = document.getElementById('message-section');
    var errorMessage = document.getElementById('error-message');
    
    if (passcode === '080224') {
        messageSection.style.display = 'block';
        this.style.display = 'none';
    } else {
        errorMessage.style.display = 'block';
        setTimeout(function() {
            errorMessage.style.display = 'none';
        }, 3000); // Hide error message after 3 seconds
    }

    document.querySelector('.envelope').addEventListener('click', function() {
        var letter = this.querySelector('.letter');
        if (letter.style.transform === 'translateY(0%)') {
            letter.style.transform = 'translateY(100%)';
        } else {
            letter.style.transform = 'translateY(0%)';
        }
    });
});