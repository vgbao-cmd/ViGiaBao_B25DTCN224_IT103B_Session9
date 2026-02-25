

const wareHouse = [
    ["iPhone 15 Pro Max", 1199, 200],
    ["iPhone 15 Pro", 999, 150],
    ["iPhone 15", 799, 1],
    ["iPhone 14 Pro Max", 1099, 120],
    ["Samsung Galaxy A54", 449, 300],
    ["Xiaomi Redmi Note 13", 299, 0],
    ["Oppo A78", 349, 280],
    ["Realme 11", 279, 0],
    ["Nokia G42", 89, 220],
    ["Oppo Find X6 Pro", 90, 0],
    ["Google Pixel 8 Pro", 999, 130]
];

let choice;
do {
    choice = +prompt(`
        -------HỆ THỐNG QUẢNG LÝ KHO HÀNG------
        1.Lọc sản phẩm cao cấp (>500)
        2.Kiểm định trạng thái dữ liệu (Hết hàng/Giá sàn)
        3.Phân tích giá trị vốn hóa (Tổng tài sản)
        4.Triển khai chiến dịch chiết khấu (Giảm 10%)
        5.Truy vấn sản phẩm theo từ khóa
        6.Báo cáo tình trạng tồn kho
        7.Thoát chương trình 
        Vui lòng nhập lựa chọn của bạn từ(1-7)
`);
    switch (choice) {
        case 1:
            filterProduct();
            break;
        case 2:
            checkData();
            break;
        case 3:
            analyzeCapital();
            break;
        case 4:
            discountProduct();
            break;
        case 5:
            findProduct();
            break;
        case 6:
            inventory();
            break;
        case 7:
            alert("Thoát chương trình thành công");
            break;
        default:
            console.log("Vui lòng nhập dữ liệu hợp lệ!");
            break;
    }
} while (choice != 7);

function filterProduct() {
    let result = wareHouse.filter(product => product[1] > 500);
    let productName = result.map(product => product[0]).join(", ");
    alert(productName);
}
function checkData() {


    let hasZeroStock = wareHouse.some(product => product[2] == 0);
    let allAbove100 = wareHouse.every(product => product[1] > 100);

    let message = "Kết quả kiểm định:\n"
        + "- Có sản phẩm hết hàng: " + (hasZeroStock ? "Có" : "Không") + "\n"
        + "- Tất cả sản phẩm giá > 100: " + (allAbove100 ? "Đúng" : "Sai");
    alert(message);
}
function analyzeCapital() {
    let total = wareHouse.reduce((sum, product) => {
        return sum + (product[1] * product[2]);

    }, 0);
    alert("Tổng giá trị tài sản trong kho: "
        + total.toLocaleString("vi-VN") + " USD")
}
function discountProduct() {
    let discount = wareHouse.forEach((product) => {
        return product * (10 / 100);
    });
    alert("đã cập nhật giảm giá 10% cho tất cả các sản phẩm!");
}

function findProduct() {
    let findNameProduct = prompt("Nhập tên sản phẩm muốn tìm");
    const filterProduct = wareHouse.filter(product => product[0].toLowerCase().includes(findNameProduct.toLowerCase()));
    let productFindName = filterProduct.map(product => product[0]);
    alert(productFindName.join("\n"));


}
function inventory() {
    let report = "Báo cáo tồn kho \n";

    wareHouse.forEach(product => {
        let name = product[0];
        let stock = product[2];

        if (stock > 0) {
            report += `${name} còn hàng (${stock})\n`;
        } else {
            report += `${name} hết hàng (${stock})\n`;
        }
    });
    alert(report);
}