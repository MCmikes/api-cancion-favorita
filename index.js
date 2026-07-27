const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json(
        {
            nombre: "Miguel Angel Sac Hernández",
            albumFavorito: "Sobredosis"
        }
    );
});

app.listen(3000, () => console.log('API corriendo en http://localhost:3000'));