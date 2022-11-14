function playgame() {
    let limit = (Number(prompt('Nhập số bạn muốn đoán trong khoảng: ')));
    let amount = 0;

    while (amount <= 3) {
        let number = (Number(prompt('Nhập số đoán:')));
        if (number === (Math.floor(Math.random() * limit))) {
            alert('Chúc mừng bạn đã thắng');
            break;
        }
        else if (number < (Math.floor(Math.random() * limit))) {
            alert('Bé hơn số dự đoán');
            amount++;
        } else {
            alert('Lớn hơn số dự đoán');
            amount++;
        }
    }
}
