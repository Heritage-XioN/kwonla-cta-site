document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value || 'Not provided';
            const school = document.getElementById('school').value;
            const role = document.getElementById('role').value;
            
            // Format the message for WhatsApp
            const whatsappMessage = 
`*New Contact Form Submission*

*Name:* ${name}
*Phone:* ${phone}
*Email:* ${email}
*school:* ${school}
*role:* ${role}

_Sent via Contact Form_`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Replace with your actual WhatsApp number (remove +, spaces, dashes)
    // Example: if number is +1 (234) 567-890, use 1234567890
    const whatsappNumber = "2348078583559"; // CHANGE THIS TO YOUR NUMBER
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Show success message
    const successDiv = document.getElementById('successMessage');
    successDiv.style.display = 'block';
    
    // Open WhatsApp in new tab after a short delay
    setTimeout(() => {
        window.open("./success/index.html", '_blank');
        // Reset form
        document.getElementById('contactForm').reset();
        // Hide success message after 5 seconds
        setTimeout(() => {
            successDiv.style.display = 'none';
        }, 5000);
    }, 1000);
});

// Simple phone number formatting
document.getElementById('phone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.substring(0, 11);
    e.target.value = value;
});