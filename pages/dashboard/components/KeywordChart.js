'use client';
import { useState } from 'react';

export default function GSCButton() {
    const [sites, setSites] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchSites = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/gsc/sites');
            const data = await response.json();
            setSites(data.sites || []);
        } catch (error) {
            console.error('Error fetching sites:', error);
        }
        setLoading(false);
    };

    return (
        <div>
            <button onClick={fetchSites} disabled={loading} className="p-2 bg-blue-500 text-white rounded">
                {loading ? 'Fetching...' : 'Get GSC Site URLs'}
            </button>
            <ul className="mt-4">
                {sites?.map((site, index) => (
                    <li key={index} className="p-2 border-b">{site}</li>
                ))}
            </ul>
        </div>
    );
}