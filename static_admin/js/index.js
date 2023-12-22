
  mapboxgl.accessToken = 'pk.eyJ1IjoiaHV5MTIzIiwiYSI6ImNsbjV0Z3J2cDA5cXUya2w4aDJicnp3cGMifQ.3DIORczJ5ZOFOvOs4ePJfw';

  const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [108.2022, 16.0471],
      zoom: 4
  });
  

  map.addControl(new mapboxgl.NavigationControl());

  // Tạo một danh sách dữ liệu điểm đánh dấu từ biến locationsData
  const markers = [];
  
  // Lấy danh sách vị trí từ biến locations
  const locations = JSON.parse(document.getElementById('locations').getAttribute('data-locations'));
  
  // Sử dụng vòng lặp để thêm mỗi vị trí vào mảng markers
  for (const location of locations) {
      markers.push({
          type: 'Feature',
          geometry: {
              type: 'Point',
              coordinates: [location.Longitude, location.Latitude]
          },
          properties: {
              title: location.Name,
              description: `Latitude: ${location.Latitude}, Longitude: ${location.Longitude}`
          }
      });
  }

  // Sử dụng biến markers để tạo các điểm đánh dấu
  markers.forEach(marker => {
      // Tạo một mảng các thuộc tính cho điểm đánh dấu
      const properties = marker.properties;
      
      // Tạo một điểm đánh dấu và đặt lớp CSS 'custom-marker'
      const customMarker = new mapboxgl.Marker({ element: createCustomMarkerElement() })
          .setLngLat(marker.geometry.coordinates) // Đặt tọa độ
          .setPopup(new mapboxgl.Popup() // Tạo một popup cho điểm đánh dấu
              .setHTML(`<h3>${properties.title}</h3><p>${properties.description}</p>`) // Nội dung popup
          )
          .addTo(map); // Thêm điểm đánh dấu vào bản đồ
      
      // Thêm lớp CSS 'custom-marker' vào điểm đánh dấu
      customMarker.getElement().classList.add('custom-marker');
  });

  // Hàm để tạo phần tử HTML cho điểm đánh dấu với lớp CSS 'custom-marker'
  function createCustomMarkerElement() {
      const customMarker = document.createElement('div');
      customMarker.className = 'custom-marker';
      return customMarker;
  }


           