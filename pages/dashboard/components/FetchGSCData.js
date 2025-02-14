import { useState } from 'react';

export default function FetchGSCData({ session }) {
  const [searchConsoleData, setSearchConsoleData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const siteUrl = 'sc-domain:fazier.com';

  async function fetchSearchConsoleData() {
    try {
      setLoading(true);
      setError(null);

      // Generate dates (last 30 days)
      const endDate = new Date();
      const startDate = new Date();
      startDate.setDate(endDate.getDate() - 30);

      // Format dates to YYYY-MM-DD
      const requestBody = {
        email: session.user.email,
        siteUrl: siteUrl,
        startDate: startDate.toISOString().split('T')[0],
        endDate: endDate.toISOString().split('T')[0],
      };

      const response = await fetch('/api/searchConsole', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) throw new Error('Failed to fetch');

      const data = await response.json();
      setSearchConsoleData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold">Google Search Console Data</h2>
      <button
        onClick={fetchSearchConsoleData}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
      >
        Fetch Data
      </button>
      {loading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <pre className="p-4 bg-gray-100 rounded-md shadow-md">
          {JSON.stringify(searchConsoleData, null, 2)}
        </pre>
      )}
    </div>
  );
}
