function buttonClick() {
    let value = prompt('Каково официальное название JavaScript?', '');

    if (value === 'EcmaScript') {
        alert('Верно!');
    } else
        alert('Не знаете? EcmaScript!');
}
function myScript() {
    let value = prompt('Введите число', 0);

    if (value > 0) {
        alert( 1 );
    } else if (value < 0) {
        alert( -1 );
    } else {
        alert( 0 );
    }
}
function login() {
    let user = prompt("Кто пришел?", "");

    if (user === "Admin") {
        let pass = prompt("Пароль?", "");
        console.log(pass)
        if (pass === 'Черный властелин') {
            alert('Добро пожаловать!');
        } else if (pass === '' || pass === null) {
            alert( 'Вход отменен' );
        } else {
            alert( 'Пароль неверен' );
        }
    } else if (user === '' || user === null) {
        alert('Вход отменен');
    } else {
        alert('Я вас не знаю')
    }
    console.log(user)
}
//function buttonCycle() {
 //   for (var i = 0; i < 3; i++) {
   //     alert("номер" + i + "!");
  //  }
    function buttonCycle() {
    let i = 0;
    while (i < 3) {
        alert("номер" + i + "!");
        i++;
}
}
function buttonNumber() {
    let value = prompt("Введите число больше 100 ");
    while (value => 100) {
        if (value < 100) {
            value = prompt("Введите число больше 100 ");
        } else {
            alert (value);
        }
        if (!value) break;
    }
}