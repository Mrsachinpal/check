mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map", // container ID
  center: [80.9462, 26.8467], // starting position [lng, lat]
  zoom: 9, // starting zoom
  style: "mapbox://styles/mapbox/streets-v11", // add map style
});
console.log(coordinates);

const marker1 = new mapboxgl.Marker()
  .setLngLat([listing.geometry.coordinates]) // Listing.geometry.coordinates
  .addTo(map);
