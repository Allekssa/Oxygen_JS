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

    if (user == "Admin") {
        let pass = prompt("Пароль?", "");
        if (pass == 'Черный властелин') {
            alert('Добро пожаловать!');
        } else if (pass == '' || null) {
            alert( 'Вход отменен' );
        } else {
            alert( 'Пароль неверен' );
        }
    } else if (user == '' || null) {
        alert('Вход отменен');
    } else {
        alert('Я вас не знаю')
    }
}