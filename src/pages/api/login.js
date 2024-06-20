import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';  // Your backend API base URL

export default async function handler(req, res) {
    const { method, body } = req;

    try {
        switch (method) {
            case 'POST': {
                const response = await axios.post(`${API_BASE_URL}/auth/login`, body);
                res.status(200).json(response.data);
                break;
            }
            default:
                res.setHeader('Allow', ['POST']);
                res.status(405).end(`Method ${method} Not Allowed`);
        }
    } catch (error) {
        const { response: { status, data } = {} } = error;
        res.status(status || 500).json({ error: data || 'Internal server error' });
    }
}
