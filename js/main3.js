const BELOW_60 = 0.05;
const FROM_60_TO_120 = 0.1;
const FROM_120_TO_210 = 0.15;
const FROM_210_TO_384 = 0.2;
const FROM_384_TO_624 = 0.25;
const FROM_624_TO_960 = 0.3;
const UPPER_960 = 0.35;

function tax(){
    var name = document.getElementById("nameTax").value;
    var income = Number(document.getElementById("income").value);
    var people = Number(document.getElementById("people").value);
    console.log(name, income, people);

    var money = incomeValue(income,people);
    var total = taxCondition(money);

    document.getElementById("txtTax").innerHTML = "Họ và tên: " + name + "<br \>" + "Tiền thuế = " + (new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(total));

}
function incomeValue(income, people){
    var money = income - 4*Math.pow(10,6) - (people*1600000);
    console.log(money);
    return money;
}
function taxCondition(money){
        var total = 0;
    if(money > 0 && money <= 60*Math.pow(10,6)){
        total = money*BELOW_60;
    }
    else if (money > 60*Math.pow(10,6) && money <= 120*Math.pow(10,6)){
        total = money*FROM_60_TO_120;
    }
    else if (money > 120*Math.pow(10,6) && money <= 210*Math.pow(10,6)){
        total = money*FROM_120_TO_210;
    }
    else if (money > 210*Math.pow(10,6) && money <= 384*Math.pow(10,6)){
        total = money*FROM_210_TO_384;
    }
    else if (money > 384*Math.pow(10,6) && money <= 624*Math.pow(10,6)){
        total = money*FROM_384_TO_624;
    }
    else if (money > 624*Math.pow(10,6) && money <= 960*Math.pow(10,6)){
        total = money*FROM_624_TO_960;
    }
    else if (money > 960*Math.pow(10,6)){
        total = money*UPPER_960;
    }
    else{
        total = 0;
    }
    console.log(total);
    return total;
}
document.getElementById("btnTax").onclick = tax;
