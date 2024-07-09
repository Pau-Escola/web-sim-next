import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;  // Replace with your backend API base URL
const AUTH_HEADER = 'Bearer ';

export default async function handler(req, res) {
    const { method, body, query: { id } } = req;
    const token = req.headers.authorization;

    try {
        const axiosConfig = {
            headers: {
                Authorization: AUTH_HEADER + token  // Concatenate Bearer token
            }
        };

        switch (method) {
            case 'GET': {
                const url = id ? `${API_BASE_URL}/products/${id}` : `${API_BASE_URL}/products`;
                const response = await axios.get(url, axiosConfig);
                res.status(200).json(response.data);
                break;
            }
            case 'POST': {
                const response = await axios.post(`${API_BASE_URL}/products`, body, axiosConfig);
                res.status(201).json(response.data);
                break;
            }
            case 'PUT': {
                const url = `${API_BASE_URL}/products/${id}`;
                const response = await axios.put(url, body, axiosConfig);
                res.status(200).json(response.data);
                break;
            }
            case 'DELETE': {
                const url = `${API_BASE_URL}/products/${id}`;
                await axios.delete(url, axiosConfig);
                res.status(204).end();
                break;
            }
            default:
                res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
                res.status(405).end(`Method ${method} Not Allowed`);
        }
    } catch (error) {
        const { response: { status, data } } = error;
        res.status(status || 500).json({ error: data || 'Internal server error' });
    }
}
