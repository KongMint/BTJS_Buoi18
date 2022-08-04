var listNumber = [];

document.getElementById("themSo").onclick = function () {
  var number = document.getElementById("number").value * 1;

  listNumber.push(number);

  document.getElementById("thongBao").innerHTML = listNumber;
};

//Câu 1: 
document.getElementById("tinhTong").onclick = function () {
  var output = 0;
  output = tinhTong(listNumber);
  document.getElementById("thongBao2").innerHTML = "Tính tổng: " + output;
};

//Câu 2: 
document.getElementById("soDuong").onclick = function () {
  var output = 0;
  output = timSoDuong(listNumber);
  document.getElementById("thongBao2").innerHTML = "Số dương: " + output;
};

//Câu 3: 
document.getElementById("soNhoNhat").onclick = function () {
  var output = 0;
  output = soMin(listNumber);
  document.getElementById("thongBao2").innerHTML = "Số nhỏ nhất: " + output;
};

//Câu 4: 
document.getElementById("soDuongNhoNhat").onclick = function () {
  var output = 0;
  output = soDuongNhoNhat(listNumber);
  document.getElementById("thongBao2").innerHTML =
    "Số dương nhỏ nhất: " + output;
};

//Câu 5: 
document.getElementById("soChanCuoi").onclick = function () {
  var output = 0;
  output = soChanCuoi(listNumber);
  document.getElementById("thongBao2").innerHTML =
    "Số chẵn cuối cùng: " + output;
};

//Câu 6:
document.getElementById("doiCho").onclick = function () {
  var number1 = document.getElementById("number1").value * 1;
  var number2 = document.getElementById("number2").value * 1;

  var number = listNumber;
  [listNumber[number1], listNumber[number2]] = [
    listNumber[number2],
    listNumber[number1],
  ];

  document.getElementById("thongBao").innerHTML = number;
};

//Câu 7: 
document.getElementById("sapXep").onclick = function () {
  var output = 0;
  output = sortTheoSo(listNumber);
  document.getElementById("thongBao2").innerHTML =
    "Sắp xếp tăng dần: " + output;
};

//Câu 8: 

document.getElementById("soNguyenTo").onclick = function () {
  var output = 0;
  output = isprime(listNumber);
  document.getElementById("thongBao2").innerHTML =
    "Số nguyên tố dầu tiên: " + output;
};

//Câu 9: 
document.getElementById("demSoNguyen").onclick = function () {
  var output = 0;
  output = demSoNguyen(listNumber);
  document.getElementById("thongBao2").innerHTML = "Số nguyên: " + output;
};

//Câu 10: 
document.getElementById("soSanh").onclick = function () {
  var output;
  output = soSanh(listNumber);
  document.getElementById("thongBao2").innerHTML = output;
};
