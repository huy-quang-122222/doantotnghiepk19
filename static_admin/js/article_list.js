

 src="https://code.jquery.com/jquery-3.6.0.min.js">

    // Sử dụng JavaScript để bắt sự kiện khi nhấp vào nút "Sửa"
    document.addEventListener("DOMContentLoaded", function () {
        const editCommentLinks = document.querySelectorAll(".edit-comment-link");
        const editCommentForm = document.querySelector(".edit-comment-form");
        const editCommentIDInput = editCommentForm.querySelector(".edit-comment-id");

        editCommentLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                const feedbackID = link.getAttribute("data-id");
                editCommentIDInput.value = feedbackID;
                editCommentForm.style.display = "block";
            });
        });
    });

    $(document).ready(function () {
        // Xử lý sự kiện khi người dùng nhấn nút "Phản hồi"
        $('.reply-comment-link').click(function () {
            // Lấy ID của bình luận cha
            var commentID = $(this).data('id');

            // Hiển thị biểu mẫu phản hồi
            $('.add-comment-form').show();

            // Đặt giá trị trường ẩn "EditCommentID" với ID của bình luận cha
            $('#EditCommentID').val(commentID);
        });
    });
/////          map                //////////////////////
    const locationsJsonString = document.getElementById('locations').getAttribute('data-locations');
    const locationsData = JSON.parse(locationsJsonString);
    mapboxgl.accessToken = 'pk.eyJ1IjoiaHV5MTIzIiwiYSI6ImNsbjV0Z3J2cDA5cXUya2w4aDJicnp3cGMifQ.3DIORczJ5ZOFOvOs4ePJfw';
    // Tạo một bản đồ
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [locationsData.longitude, locationsData.latitude],
        zoom: 6
    });

    // Thêm một điểm đánh dấu màu đỏ
    const marker = new mapboxgl.Marker({
        color: 'red'
    })
        .setLngLat([locationsData.longitude, locationsData.latitude])
        .addTo(map);

 
    // Thêm một layer để vẽ chấm đổ bóng
    map.on('load', () => {
        map.addLayer({
            id: 'custom-marker',
            type: 'circle',
            source: {
                type: 'geojson',
                data: {
                    type: 'FeatureCollection',
                    features: [{
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: [locationsData.longitude, locationsData.latitude]
                        }
                    }]
                }
            },
            paint: {
                'circle-radius': 20, // Điều chỉnh bán kính của chấm đánh dấu
                'circle-color': 'red', // Màu sắc của chấm đánh dấu
                'circle-opacity': 0.7, // Độ trong suốt của chấm đánh dấu
                'circle-blur': 1 // Điều chỉnh độ bóng của chấm đánh dấu
            }
        });
    });
  //// chọn vùng ///////////////////////
    // Use the DOMContentLoaded event to ensure that JavaScript runs after the DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        var selectElement = document.querySelector('select#id_vung_trong');
        
        if (selectElement) {
            selectElement.addEventListener('change', function() {
                var selectedRegion = this.value;
                if (selectedRegion) {
                    // Variable selectedRegion has a value
                    console.log("selectedRegion has a value: " + selectedRegion);
                    var url = "{% url 'post:show_related_articles' %}?region_id=" + selectedRegion;
                    window.location.href = url;
                } else {
                    // Variable selectedRegion is empty
                    console.log("selectedRegion is empty");
                }
            });
        }
    });



