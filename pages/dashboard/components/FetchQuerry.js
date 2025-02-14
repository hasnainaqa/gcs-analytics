async function fetchKeywordTrends() {
  const siteUrl = 'sc-domain:fazier.com';

  const response = await fetch('/api/querry', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: user.email,
      startDate: '2024-01-15',
      endDate: '2024-02-15',
      siteUrl: siteUrl,
    }),
  });

  const data = await response.json();
  console.log('Keyword Trends:', data.keywordTrends);
}
