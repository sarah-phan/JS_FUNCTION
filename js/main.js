// Global
// Biến lưu trữ điểm cộng cho từng khu vực A, B, C
const khuVucA = 2;
const khuVucB = 1;
const khuVucC = 0.5;

// Biến lưu trữ điểm cộng cho đối tượng sinh viên 1, 2, 3
const doiTuong1 = 2.5;
const doiTuong2 = 1.5;
const doiTuong3 = 1;

// function chính
function graduation(){
    // biến lấy giá trị điểm chuẩn
    var diemChuan = document.getElementById("diemChuan").value;
    // biến lấy giá trị khu vực
    var khuVuc = document.getElementById("khuVuc").value;
    // biến lấy giá trị đối tượng
    var doiTuong = document.getElementById("doiTuong").value;
    // biến lấy điểm thứ 1
    var diem1 = document.getElementById("diem1").value;
    // biến lấy điểm thứ 2
    var diem2 = document.getElementById("diem2").value;
    // biến lấy điểm thứ 3
    var diem3 = document.getElementById("diem3").value;
    console.log(diemChuan, khuVuc, doiTuong, diem1, diem2, diem3);
    
    // Xét điều kiện không có môn nào = 0
    if((diem1 == 0) || (diem2 == 0) || (diem3 == 0)){
        document.getElementById("txtGraduation").innerHTML = "Bạn đã rớt. Do có điểm nhỏ hơn 0";
        return;
    }
    else{
        // gọi hàm
        var KV = checkKhuVuc(khuVuc);
        var DT = checkDoiTuong(doiTuong);
        var total = totalScore(diem1, diem2, diem3, KV, DT); 
    }    
    
    // xét đậu hoặc rớt
    if (total < diemChuan){
        document.getElementById("txtGraduation").innerHTML = "Bạn đã rớt. Tổng điểm = " + total;
    }
    else
        document.getElementById("txtGraduation").innerHTML = "Bạn đã đậu. Tổng điểm = " + total;   
}
document.getElementById("btnGraduation").onclick = graduation;

// Hàm tính tổng điểm
function totalScore(diem1, diem2, diem3, khuVuc, doiTuong){
    var total = Number(diem1) + Number(diem2) + Number(diem3) + Number(khuVuc) + Number(doiTuong);
    console.log(total);
    return total;
}

// Hàm kiểm tra khu vực và lấy điểm cộng tương ứng
function checkKhuVuc(khuVuc){
    var KV = 0;
    switch(khuVuc){
        case "A":
            KV = khuVucA;
            break;
        case "B":
            KV = khuVucB;
            break;
        case "C":
            KV = khuVucC;
            break;
        default:
            KV = 0;
            break;
    }
    console.log(KV);
    return KV;
}

// Hàm kiểm tra đối tượng và lấy điểm cộng tương ứng
function checkDoiTuong(doiTuong){
    var DT = 0;
    switch(doiTuong){
        case "1":
            DT = doiTuong1;
            break;
        case "2":
            DT = doiTuong2;
            break;
        case "3":
            DT = doiTuong3;
            break;
        default:
            DT = 0;
            break;
    }
    console.log(DT);
    return DT;
}

