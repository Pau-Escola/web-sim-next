// pages/api/auth.js
// import jwt from 'jsonwebtoken';

// const SECRET_KEY = 'Lp~#///m!q{P9Z2OUBlIVF9nPs*@3'; // Secure your secret key

// export default function handler(req, res) {
//     const { username, password } = req.body;
//     // Replace with actual authentication logic
//     const worker = { id: 1, username, isAdmin: true };

//     if (username === 'admin' && password === 'admin123') {
//         const token = jwt.sign({ id: worker.id, username: worker.username, isAdmin: worker.isAdmin }, SECRET_KEY, { expiresIn: '1h' });
//         res.status(200).json({ token });
//     } else {
//         res.status(401).json({ error: 'Invalid credentials' });
//     }
// }
