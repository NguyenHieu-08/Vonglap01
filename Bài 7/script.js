let text = '';
for(let i = 1; i<=100; i++) {
    if(i%3==0) {
        document.write(i);
        text = 'Fizz' + `<br>`
    }
    if(i%5==0) {
        document.write(i);
        text = 'Buzz' + `<br>`
    }
    if(i%3==0 && i%5==0) {
        document.write(i);
        text = 'FizzBuzz' + `<br>`
    }
    document.write(text);
}

