let orders = ["Đơn hàng A", "Đơn hàng B", "Đơn hàng C", "Đơn hàng D", "Đơn hàng E",];
let revenues = [1500, 2800, 1200, -500, 3200];
function check(){
    let minus = revenues.some(order => order<0);
    if (minus) {
        console.log("Có đơn hàng âm: true");
    }else{
        console.log("Có đơn hàng âm: false");
    }
    let allUp500 = revenues.every(order => order>500);
    if (allUp500) {
        console.log("Tất cả trên 500: true");
    }else{
        console.log("Tất cả trên 500: false");       
    }
}
check();