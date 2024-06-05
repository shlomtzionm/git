const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');
const cors = require('cors');

app.use([cors(), express.json()]);

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'notes'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

app.get('/categories', (req, res) => {
    db.query('SELECT id, category FROM category', (err, rows) => {
        if (err) {
            console.error('Error fetching categories:', err);
            return;
        }
        res.json(rows);
    });
});

app.post('/notes', (req, res) => {
    const { create_time, title, description, category_id } = req.body;

    const query = 'INSERT INTO notes (title, description, category_id) VALUES (?, ?, ?)';
    const values = [ title, description, category_id];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('Error inserting data');
            return;
        }
        const note = { id: result.insertId, title, description, category_id };
        res.status(201).json(note);
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
