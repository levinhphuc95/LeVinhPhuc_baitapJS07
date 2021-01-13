var arr = [];

//Tao mang
function themGiaTri(event) {
  event.preventDefault();

  var num = +getele("txtNum").value;
  if (isNaN(num)) {
    arr.push(0);
  } else {
    arr.push(num);
  }
  getele("mangFooter").innerHTML = "Array: " + arr;
  console.log(arr);
}

//Tong so duong
function tongSoDuong(event) {
  var tong = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      tong += arr[i];
    }
  }
  getele("bt1Footer").innerHTML = "Tổng số dương trong mảng: " + tong;
}

//Dem so duong
function demSoDuong(event) {
  var dem = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      dem++;
    }
  }
  getele("bt2Footer").innerHTML = "Số lượng số dương trong mảng: " + dem;
}

//Tìm số nhỏ nhất
function soMin(event) {
  var soMin = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < soMin) {
      soMin = arr[i];
    }
  }
  getele("bt3Footer").innerHTML = "Số nhỏ nhất trong mảng: " + soMin;
}

//Tìm số dương nhỏ nhất
function soDuongMin(event) {
  var soDuongMin = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < soDuongMin && arr[i] > 0) {
      soMin = arr[i];
    }
  }
  if (soDuongMin > 0) {
    getele("bt4Footer").innerHTML =
      "Số dương nhỏ nhất trong mảng: " + soDuongMin;
  } else {
    getele("bt4Footer").innerHTML = "Mảng không có số dương";
  }
}

//Tìm số chẵn cuối cùng trong mảng
function soChan(event) {
  var soChanCuoi = -1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      soChanCuoi = arr[i];
    }
  }
  getele("bt5Footer").innerHTML = "Số chẵn cuối cùng trong mảng: " + soChanCuoi;
}

//Đổi vị trí 2 số trong mảng
function doiViTri(event) {
  var bt6ViTri1 = +getele("bt6ViTri1").value;
  var bt6ViTri2 = +getele("bt6ViTri2").value;
  if (
    bt6ViTri1 > arr.length ||
    bt6ViTri2 > arr.length ||
    bt6ViTri1 < 0 ||
    bt6ViTri2 < 0
  ) {
    getele("bt6Footer").innerHTML =
      "Chỉ số nhập vào bé hơn 0 hoặc lớn hơn độ dài của mảng, vui lòng nhập lại";
  } else {
    var temp = arr[bt6ViTri1];
    arr[bt6ViTri1] = arr[bt6ViTri2];
    arr[bt6ViTri2] = temp;
    getele("bt6Footer").innerHTML = "Chuỗi mới là: " + arr;
  }
}

//Sắp xếp mảng theo thứ tự tăng dần
function sapXep(event) {
  var arr7 = arr;
  arr7.sort();
  getele("bt7Footer").innerHTML = "Mảng đã sắp xếp: " + arr7;
}

function getele(id) {
  return document.getElementById(id);
}
