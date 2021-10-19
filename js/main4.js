// Global
// Biến giá trị phí xử lý hóa đơn của nhà dân
const HOUSE_BILL_FEE = 4.5;
// Biến giá trị phí dịch vụ cơ bản của nhà dân
const HOUSE_BASIC_FEE = 20.5;
// Biến giá trị phí thuê kênh cao cấp của nhà dân
const HOUSE_ADVANCED_FEE = 7.5;

// Biến giá trị phí xử lý hóa đơn của doanh nghiệp
const BUSINESS_BILL_FEE = 15;
// Biến giá trị phí dịch vụ cơ bản của doanh nghiệp
const BUSINESS_BASIC_FEE = 5;
// Biến giá trị phí dịch vụ cơ bản của 10 kết nối đầu của doanh nghiệp
const BUSSINESS_FIRST_10_CONNECTION = 75
// Biến giá trị phí thuê kênh cao cấp của doanh nghiệp
const BUSINESS_ADVANCED_FEE = 50;

// Ẩn hiện ô số kết nối
function myOnChange(){
    document.getElementById("connection").style.display = "none";
    // Biến chứa giá trị loại khách hàng
    var customerType = document.getElementById("customerType").value;
    console.log(customerType);
    if (customerType == "B"){
        document.getElementById("connection").style.display = "block";
    }
    return customerType;
}
myOnChange();

// Hàm chính tính tiền cáp
function networkFee(){
    var customerType = myOnChange();
    // Biến chứa mã khách hàng
    var nameID = document.getElementById("nameID").value;
    // Biến chứa giá trị số lượng kênh cao cấp
    var advanced = document.getElementById("advanced").value;
    // Biến chứa giá trị số lượng kết nối
    var connection = document.getElementById("connection").value;
    console.log(customerType, nameID, advanced, connection);

    // Biến giá trị tổng tiền
    var total = 0;
    
    if (customerType == "H")
        total = houseType(advanced);
    else if (customerType == "B")
        total = bussinessType(advanced, connection);
    else 
        document.getElementById("txtNetwork").innerHTML = "Không tồn tại loại khách hàng";
    console.log(total);
    
    document.getElementById("txtNetwork").innerHTML = "Mã khách hàng: " + nameID + "<br \>" +  "Tổng cộng = " + (new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(total));
}
document.getElementById("btnNetwork").onclick = networkFee;

// Hàm tính tiền đối với loại nhà dân
function houseType(advanced){
    var total = HOUSE_BILL_FEE + HOUSE_BASIC_FEE + (advanced * HOUSE_ADVANCED_FEE);
    return total;
}

// Hàm tính tiền đối với loại doanh nghiệp
function bussinessType(advanced, connection){
    var total = 0;
    if(connection > 0 && connection <= 10){
        total = BUSINESS_BILL_FEE + BUSSINESS_FIRST_10_CONNECTION + (advanced * BUSINESS_ADVANCED_FEE);
    }
    else if(connection > 10){
        total = BUSINESS_BILL_FEE + BUSSINESS_FIRST_10_CONNECTION + (connection - 10)*BUSINESS_BASIC_FEE + (advanced * BUSINESS_ADVANCED_FEE);
    }
    return total;
}

