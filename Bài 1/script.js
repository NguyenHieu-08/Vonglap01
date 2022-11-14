let number = '';
for(let i = 1; i <= 100; i++) {
    number = number + i + '<br>'
    if(i===99) {
        alert('Hoàn Tất');
        break;
    }
}
document.getElementById('primenumber').innerHTML = number;