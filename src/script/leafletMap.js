export const initializeLeafletMap = () => {
  console.log("hoge")

  const map = L.map('map').setView([35.604399, 139.683831], 18);

  L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院</a>'
  }).addTo(map);

  //マーカー表示の記述
  L.marker([35.604399, 139.683831]).addTo(map)
    .bindPopup('ここにいます')
    .openPopup();
}