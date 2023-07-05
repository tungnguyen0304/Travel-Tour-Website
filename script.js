// Nó lấy hai phần tử HTML từ trang: một phần tử có id là menu-btn
let menu = document.querySelector("#menu-btn");
// một phần tử có class là navbar nằm trong một phần tử có class là header
let navbar = document.querySelector(".header .navbar");

// định nghĩa một hàm xử lý sự kiện cho sự kiện onclick của phần tử menu
menu.onclick = () => {
  // Khi người dùng nhấp vào phần tử menu, hàm xử lý sự kiện sẽ được gọi và nó sẽ thêm hoặc xóa class fa-times cho phần tử menu
  menu.classList.toggle("fa-times");
  // và class active cho phần tử navbar
  navbar.classList.toggle("active");
};

// Nó định nghĩa một hàm sẽ được thực thi khi người dùng cuộn trang.
window.onscroll = () => {
  // nó sẽ gỡ bỏ class fa-times khỏi phần tử menu
  menu.classList.remove("fa-times");
  //   gỡ bỏ class active khỏi phần tử navbar
  navbar.classList.remove("active");
};

// sử dụng thư viện Swiper
// Nó tạo ra một đối tượng Swiper mới cho phần tử có class home-slider
var swiper = new Swiper(".home-slider", {
  // khi cuộn đến cuối danh sách, nó sẽ quay lại đầu danh sách
  loop: true,
  // Thuộc tính navigation cho phép người dùng điều hướng qua lại giữa các slide
  // bằng cách sử dụng các nút có class swiper-button-next và swiper-button-prev
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".reviews-sliders", {
  loop: true,
  // khoảng cách 20px giữa các slide
  spaceBetween: 20,
  // chiều cao của Swiper sẽ tự động thay đổi để phù hợp với chiều cao của slide hiện tại
  autoHeight: true,
  // con trỏ chuột sẽ thay đổi thành hình bàn tay khi di chuột qua Swiper để người dùng biết rằng họ có thể kéo Swiper
  grabCursor: true,
  // số lượng slide hiển thị trên một dòng sẽ thay đổi tùy thuộc vào kích thước màn hình
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// chọn phần tử có class là btn nằm trong phần tử có class là load-more, nằm trong phần tử có class là packages
let loadMoreBtn = document.querySelector(".packages .load-more .btn");
let seeLessBtn = document.querySelector(".packages .see-less .btn");
let currentItem = 6;

// gán một hàm ẩn danh cho sự kiện onclick của phần tử được lưu trữ trong biến loadMoreBtn.
// Điều này có nghĩa là khi người dùng nhấp vào phần tử này, hàm ẩn danh sẽ được thực thi.
loadMoreBtn.onclick = () => {
  // Dòng này khai báo một biến boxes và gán giá trị cho nó bằng một mảng các phần tử
  // được trả về từ phương thức querySelectorAll với đối số là chuỗi CSS selector .packages .box-container .box
  // Điều này có nghĩa là chọn tất cả các phần tử có class là box nằm trong phần tử có class là box-container, nằm trong phần tử có class là packages.
  let boxes = [...document.querySelectorAll(".packages .box-container .box")];
  for (var i = currentItem; i < currentItem + 3; i++) {
    boxes[i].style.display = "inline-block";
  }
  currentItem += 3;
  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = "none";
    seeLessBtn.style.display = "inline-block";
  }
};

seeLessBtn.onclick = () => {
  let boxes = [...document.querySelectorAll(".packages .box-container .box")];
  for (var i = currentItem - 1; i > currentItem - 4; i--) {
    boxes[i].style.display = "none";
  }
  currentItem -= 3;
  if (currentItem <= 6) {
    seeLessBtn.style.display = "none";
    loadMoreBtn.style.display = "inline-block";
  }
};
