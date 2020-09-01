//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname, 'dist/school')))

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/school/index.html'))
})

// Start the app by listening on the default Heroku port
const port = process.env.PORT || 3000
app.listen(port, function() {
	console.log('Server running on localhost:' + port)
});