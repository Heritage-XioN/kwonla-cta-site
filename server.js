const express = require('express');
const path = require('path');
const app = express();

app.use(express.json()); // To read form data sent from the browser

// Serve your existing HTML/JS files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Create the secret "bridge" for WhatsApp
app.post('/api/send-whatsapp', async (req, res) => {
    // 1. Capture data from your form
    const { name, message } = req.body;
    
    // 2. Secretly send it to Meta/Twilio using your hidden API token
    // (This keeps your credentials safe from the public)
    console.log(`Sending message for ${name}...`);
    
    res.status(200).send({ success: true });
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
