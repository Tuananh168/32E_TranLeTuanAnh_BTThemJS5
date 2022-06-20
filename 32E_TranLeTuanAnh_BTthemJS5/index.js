// Bài tập 3 :Viết chương trình nhập vào thông tin của 1 cá nhân (Họ tên, tổng thu nhập năm, số người phụ thuộc). Tính và xuất thuế thu nhập cá nhân phải trả theo quy định


document.getElementById('btntinhTienThue').onclick = function() {
    var hoTen = document.getElementById('nhapHoTen').value;
    var Tien = Number(document.getElementById('nhapTien').value)
    var soNguoi = Number(document.getElementById('nhapSoNguoi').value)

    var thuNhapChiuThue = 0;
    var thuNhapChiuThue = Tien - 4000000 - soNguoi * 1600000;
    var tongTien = 0;

    if (thuNhapChiuThue > 0 && thuNhapChiuThue <= 60000000) {
        tongTien = thuNhapChiuThue * 0.05
    } else if (thuNhapChiuThue > 6000000 && thuNhapChiuThue <= 120000000) {
        tongTien = thuNhapChiuThue * 0.1
    } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
        tongTien = thuNhapChiuThue * 0.15
    } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
        tongTien = thuNhapChiuThue * 0.2
    } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
        tongTien = thuNhapChiuThue * 0.25
    } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
        tongTien = thuNhapChiuThue * 0.30
    } else {
        tongTien = thuNhapChiuThue * 0.35
    }



    document.getElementById('ketQua_b3').innerHTML = 'Họ Tên : ' + hoTen + '; Tiền thuế thu nhập cá nhân : ' + tongTien.toLocaleString() + 'VND';
}

// Bài tập 4 : Viết chương trình tính hóa đơn khách hàng cho một công ty cáp. Có 2 loại khách hàng: Nhà dân và doanh nghiệp.

function disableInput() {
    var selCustomer = document.getElementById('selCustomer').value;
    var tagInput = document.getElementById('inputConnect');
    if (selCustomer == 'company') {
        tagInput.style.display = 'block';
    } else {
        tagInput.style.display = 'none';
    }
}

document.getElementById('btntinhTienCap').onclick = function() {
    var selCustomer = document.getElementById('selCustomer').value;
    var tagInput = Number(document.getElementById('inputConnect').value);
    var inputId = document.getElementById('inputId').value;
    var inputChanel = Number(document.getElementById('inputChanel').value);

    var tongTien = 0;

    if (selCustomer === 'user') {
        tongTien = inputChanel * 7.5 + 4.5 + 20.5;
    } else if (selCustomer === 'company' && tagInput <= 10 && tagInput > 0) {
        tongTien = inputChanel * 50 + 75 + 15;
    } else if (selCustomer === 'company' && tagInput > 10) {
        tongTien = inputChanel * 50 + (tagInput - 10) * 5 + 75 + 15;
    } else {
        tongTien = 'none';
    }
    document.getElementById('ketQua_b4').innerHTML = 'Mã khách hàng : ' + inputId + '; Tiền cáp: $' + tongTien.toLocaleString();
}