

//  src="https://code.jquery.com/jquery-3.6.0.min.js"

    // Sử dụng JavaScript để bắt sự kiện khi nhấp vào nút "Sửa"
    // document.addEventListener("DOMContentLoaded", function () {
    //     const editCommentLinks = document.querySelectorAll(".edit-comment-link");
    //     const editCommentForm = document.querySelector(".edit-comment-form");
    //     const editCommentIDInput = editCommentForm.querySelector(".edit-comment-id");

    //     editCommentLinks.forEach(function (link) {
    //         link.addEventListener("click", function () {
    //             const feedbackID = link.getAttribute("data-id");
    //             editCommentIDInput.value = feedbackID;
    //             editCommentForm.style.display = "block";
    //         });
    //     });
    // });

    // $(document).ready(function () {
    //     // Xử lý sự kiện khi người dùng nhấn nút "Phản hồi"
    //     $('.reply-comment-link').click(function () {
    //         // Lấy ID của bình luận cha
    //         var commentID = $(this).data('id');

    //         // Hiển thị biểu mẫu phản hồi
    //         $('.add-comment-form').show();

    //         // Đặt giá trị trường ẩn "EditCommentID" với ID của bình luận cha
    //         $('#EditCommentID').val(commentID);
    //     });
    // });

  //// chọn vùng ///////////////////////
    
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



