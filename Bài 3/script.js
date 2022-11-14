function printFibo() {
    let number = Number(prompt('Nhập số:'))
    
    let a = [1,1]

    let text = ''

    for(let i = 0; i < number-2; i++) {
        a[i+2] = a[i] + a[i+1]
    }

    console.log(a);

    for(let j=0; j < a.length; j++) {
        text += a[j] + `<br>`
    }

    document.getElementById('result').innerHTML = text;
}
