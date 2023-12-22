// weather.js
// Định nghĩa đối tượng JavaScript chứa URL hình ảnh tùy thuộc vào tình trạng thời tiết
var weatherIcons = {
    "Clear": "https://nchmf.gov.vn/Upload/WeatherSymbol/icon_resized/2501.png",
    "Rain": "https://nchmf.gov.vn/Upload/WeatherSymbol/icon_resized/2301.png",
    "Clouds": "https://nchmf.gov.vn/Upload/WeatherSymbol/icon_resized/2001.png"
    // Thêm các tình trạng thời tiết khác và URL hình ảnh tương ứng ở đây
};

// Hàm JavaScript để cập nhật hình ảnh dựa trên tình trạng thời tiết và chỉ số
function updateWeatherIcon(index) {
    var weatherStatus = document.getElementById("weather-status-" + index).textContent;
    var imageUrl = weatherIcons[weatherStatus];
    var imgElement = document.getElementById("weather-icon-" + index);
    if (imgElement) {
        imgElement.src = imageUrl;
    }
}
