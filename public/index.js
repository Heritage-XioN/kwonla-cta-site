document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value || 'Not provided';
            const school = document.getElementById('school').value;
            const role = document.getElementById('role').value;
            
            // Format the message
            const whatsappMessage = {
                "name": name,
                "Phone": phone,
                "Email": email,
                "school": school,
                "role": role
            }

            try {
                // send data to api
                async function send_message(params) {
                    const res = await fetch("/api/send-whatsapp", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(whatsappMessage)
                })
                    return res
                }
                send_message()
                // Show success message
                const successDiv = document.getElementById('successMessage');
                successDiv.style.display = 'block';
                
                // open to the success page
                setTimeout(() => {
                    window.open("./success/index.html", "_self");
                    // Reset form
                    document.getElementById('contactForm').reset();
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        successDiv.style.display = 'none';
                    }, 5000);
                }, 1000);   
            } catch (error) {
                // implement onces api is set
            }       
});

// Simple phone number formatting
document.getElementById('phone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.substring(0, 11);
    e.target.value = value;
});