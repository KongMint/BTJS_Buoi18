//Câu 1:  
function tinhTong(listNumber) {
  var sum = 0;
  for (var i = 0; i < listNumber.length; i++) {
    sum += listNumber[i];
  }
  return sum;
}

//Câu 2: 
function timSoDuong(listNumber) {
  var soDuong = 0;
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      soDuong += 1;
    }
  }
  return soDuong;
}

//Câu 3: 
function soMin(listNumber) {
  var soMin = listNumber[0];
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] < soMin) {
      soMin = listNumber[i];
    }
  }
  return soMin;
}

//Câu 4: 
function soDuongNhoNhat(listNumber) {
  var soDuongNhoNhat = [];
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      soDuongNhoNhat.push(listNumber[i]);
    }
  }
  var soDuongMin = soDuongNhoNhat[0];
  for (var j = 0; j < soDuongNhoNhat.length; j++) {
    if (soDuongNhoNhat[j] < soDuongMin) {
      soDuongMin = soDuongNhoNhat[j];
    }
  }
  return soDuongMin;
}

//Câu 5: 
function soChanCuoi(listNumber) {
  var chanCuoi = 0;
  for (var i = listNumber.length; i >= 0; i--) {
    if (listNumber[i] % 2 === 0) {
      chanCuoi = listNumber[i];
      return chanCuoi;
    }
  }
  return -1;
}

//Câu 6: 
function myFunction() {
  var number1 = document.getElementById("number1");
  var number2 = document.getElementById("number2");
  var doiCho = document.getElementById("doiCho");
  var x = document.getElementById("mySelect").value;
  if (x === "Đổi chổ") {
    number1.style.display = "block";
    number2.style.display = "block";
    doiCho.style.display = "block";
  } else {
    number1.style.display = "none";
    number2.style.display = "none";
    doiCho.style.display = "none";
  }
}

//Câu 7:
function sortTheoSo(listNumber) {
  var result = listNumber.sort(function (num, numTruoc) {
    return num - numTruoc;
  });
  return result;
}

//Câu 8: 

function checkPrime(n){
  for(var i = 2; i <= n/2; i++){
    if(n%i == 0){
      return false
    }
  }
  return true
}

function isprime(listNumber) {
  for(var i = 0; i < listNumber.length; i++){
    if(checkPrime(listNumber[i])){
      return listNumber[i]
    }
  }
  return -1;
}

//Câu 9: 
function demSoNguyen(listNumber) {
  var demSoNguyen = 0;
  for (var i = 0; i < listNumber.length; i++) {
    if (Number.isInteger(listNumber[i])) {
      demSoNguyen += 1;
    }
  }
  return demSoNguyen;
}

//Câu 10: 
function soSanh(listNumber) {
  var ssDuong = 0;
  var ssAm = 0;
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      ssDuong += 1;
    } else if (listNumber[i] === 0) {
      ssDuong += 0;
      ssAm += 0;
    } else {
      ssAm += 1;
    }
  }
  var ssAmDuong = "";
  if (ssDuong > ssAm) {
    ssAmDuong = "Tổng số dương > Tổng số âm";
  } else if (ssDuong === ssAm) {
    ssAmDuong = "Tổng số âm = Tổng số dương";
  } else {
    ssAmDuong = "Tổng số âm > Tổng số dương";
  }
  return ssAmDuong;
}
