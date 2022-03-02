// Bai1
/**
 * Tinh tien luong nhan vien
 * Đầu vào: nhập số ngày (tạo biến soNgay)
 * Xử lí:
 * + Lấy soNgay
 * + gán vào công thức tính lương (soNgay * 100000)
 * Đầu ra: xuất kết quả
 */

var soNgay = 3;
var luong = soNgay * 100000;
console.log("Tiền lương của nhân viên trong " + soNgay+ " ngày là " + luong);


/**
 * Tinh gia tri trung binh
 * Đầu vào : Nhập vào 5 số thực (tạo biến soThuc1 - soThuc5)
 * Xử lí;
 * + Lấy 5 biến vừa nhập
 * + gán vào công thức tính trung bình 5 số (tất cả các biến cộng lại chia 5)
 * Đầu ra:xuất kết quả
 */

var soThuc1 = 5;
var soThuc2 = 1;
var soThuc3 = 3;
var soThuc4 = 2;
var soThuc5 = 1;
var ketqua = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5)/5;
console.log("Trung bình tổng cùa 5 số vừa nhập là: " + ketqua);


/**
 * Quy doi tien
 * Đầu vào: Nhập vào số USD (tạo biến soUSD)
 * Xử lí:
 * + Lấy biến vừa nhập
 * + Gán vào công thức tính USD (USD * 23500)
 * Đầu ra: Xuất kết quả
 */

var soUSD = 5;
var doiVND = soUSD * 23500;
console.log(soUSD + " USD = " + doiVND + " VND");

/**
 * Tinh dien tich va chu vi hinh chu nhat
 * Đầu vào : nhập vào chiều dài và chiều rộng của hình chữ nhật (tạo biến cd và cr)
 * Xử lí:
 * + Lấy 2 biến cd và cr
 * + Gán vào công thức tính diện tích và chu vi (diện tích: dài * rộng; chu vi: (dài + rộng)*2)
 * Đầu ra: Xuất kết quả
 */

var cd = 5;
var cr = 4;
var dientich = cd * cr;
var chuvi = (cd + cr)*2;
console.log("Diện tích: " + dientich + "; Chu vi: " + chuvi); 

/**
 * Tính tổng 2 ký số
 * Đầu vào : Nhập vào 1 số có 2 chữ số (tạo biến so)
 * Xử lí:
 * + Lấy biến so
 * + Lấy hàng chục của biến so (so/10) (tạo biến hangChuc)
 * + Lấy hàng đơn vị của biến so (so%10) (tạo biến hangDonVi)
 * + Tính tổng của hangChuc và hangDonVi (tạo biến tong)
 * Đầu ra : Xuất kết quả
 */

var so = 25;
var hangChuc = Math.floor(so/10);
var hangDonVi = so%10;
var tong = hangChuc + hangDonVi;
console.log("Tổng của 2 ký số vừa nhập: " + tong);
