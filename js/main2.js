// Global
// Giá tiền 50kw đầu
const FIRST_50_KW = 500;
// Giá tiền 50kw kế
const NEXT_50_KW = 650;
// Giá tiền 100kw kế
const NEXT_100_KW = 850;
// Giá tiền 150kw kế
const NEXT_150_KW = 1100;
// Giá tiền kw còn lại
const remain = 1300;

// Hàm chính: tính tiền điện
function moneyBill(){
    // Lấy giá trị họ và tên
    var name = document.getElementById("name").value;
    // Lấy giá trị số kw
    var numberKW = document.getElementById("numberKW").value;
    console.log(name, numberKW);

    // Gọi hàm tính tiền điện
    var total = calcKW(numberKW);
    if (total == 0){
        document.getElementById("txtBill").innerHTML = "Nhập sai số KW";
    }
    else
        document.getElementById("txtBill").innerHTML = "Họ và tên: " + name + "<br />" + "Tiền điện = " + (new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(total));
}

// Hàm tính tiền điện dựa trên số kw
function calcKW(numberKW){
    var total = 0;
    if (numberKW > 0 && numberKW <= 50){
        total = numberKW * FIRST_50_KW;
    }
    else if (numberKW > 50 && numberKW <= 100){
        total = (50*FIRST_50_KW) + (numberKW-50)*NEXT_50_KW; 
    }
    else if (numberKW > 100 && numberKW <= 200){
        total = (50*FIRST_50_KW) + (50*NEXT_50_KW) + (numberKW-100)*NEXT_100_KW; 
    }
    else if (numberKW > 200 && numberKW <= 350){
        total = (50*FIRST_50_KW) + (50*NEXT_50_KW) + (100*NEXT_100_KW) + (numberKW - 200)*NEXT_150_KW; 
    }
    else if (numberKW > 350){
        total = (50*FIRST_50_KW) + (50*NEXT_50_KW) + (100*NEXT_100_KW) + (150*NEXT_150_KW) + (numberKW - 350)*remain; 
    console.log(total);
    }
    else
        total = 0;
    return total;
    
}
document.getElementById("btnBill").onclick = moneyBill;