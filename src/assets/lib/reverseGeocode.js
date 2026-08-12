export async function reverseGeocodeCity(lat, lon) {
  const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('reverse geocode failed');
  const data = await res.json();
  return data.city || data.locality || data.principalSubdivision || 'Your Location';
}
