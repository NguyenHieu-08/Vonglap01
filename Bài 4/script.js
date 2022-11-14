function printFibo() {
    let number = Number(prompt('Nhập số:'))
    
    let a = [1,1]

    let text = ''
    let temp = '';

    for(let i = 0; i < number-2; i++) {
        a[i+2] = a[i] + a[i+1]
    }

    for(let k=0; k < a.length; k++) {
        if(a[k] % 5 === 0) {
            text += a[k] + ' '
        }
    }

    document.getElementById('result').innerHTML = text;
}
