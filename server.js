const express = require('express');
const path = require('path');
const app = express();

// reads port fron .env defaults to 3000
const PORT = process.env.PORT || 3000;

app.use(express.json()); // To read data sent from the browser

// Serve existing HTML/JS files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Create the secret "bridge" for WhatsApp
app.post('/api/send-whatsapp', async (req, res) => {
    // Capture data from your from client
    const { name, role } = req.body
    
    // implement sending to whatsapp api
    console.log(`Sending message for ${name}...`);
    
    res.status(200).send({ success: true });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
