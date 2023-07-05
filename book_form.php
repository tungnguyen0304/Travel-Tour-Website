<?php
    // Dòng này khởi tạo một kết nối đến cơ sở dữ liệu book_db trên máy chủ localhost
    // bằng cách sử dụng tên người dùng root và mật khẩu rỗng.
    $connection = mysqli_connect('localhost', 'root', '', 'book_db');

    // Dòng này kiểm tra xem liệu biến $_POST['send'] có được thiết lập hay không.
    // Nếu có, điều này có nghĩa là người dùng đã nhấn nút gửi (send) trên form đặt chỗ.
    if(isset($_POST['send'])){
        // Dòng này gán giá trị của biến $_POST['name'] cho biến $name. 
        // Biến $_POST['name'] chứa giá trị của trường nhập liệu name trên form đặt chỗ.
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $address = $_POST['address'];
        $location = $_POST['location'];
        $guests = $_POST['guests'];
        $arrivals = $_POST['arrivals'];
        $leaving = $_POST['leaving'];

        // Dòng này khai báo một chuỗi chứa câu lệnh SQL để chèn một bản ghi mới vào bảng book_form.
        // Các giá trị được chèn vào bảng là các giá trị được lưu trữ trong các biến 
        // $name, $email, $phone, $address, $location, $guests, $arrivals, và $leaving.
        $request = " insert into book_form(name, email, phone, address, location, guests, arrivals, leaving) values
        ('$name', '$email', '$phone', '$address', '$location', '$guests', '$arrivals', '$leaving')";

        // Dòng này thực thi câu lệnh SQL được lưu trữ trong biến $request, 
        // sử dụng kết nối cơ sở dữ liệu được lưu trữ trong biến $connection.
        mysqli_query($connection, $request);

        // Dòng này chuyển hướng người dùng đến trang book.php.
        header('location: book.php');
    }else {
        echo 'something went wrong try again';
    }
