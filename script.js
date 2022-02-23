'use strict';

function exersise1() {
  let value = +prompt();
  let numeralSystem = +prompt();
  let result = [];
  if (isNaN(value) === true || isNaN(numeralSystem) === true) {
    return 'Некорректный ввод!';
  } else if (numeralSystem === 2) {
    while (value > 0) {
      result.push(value % 2);
      value = Math.floor(value / 2);
    }
  } else if (numeralSystem === 3) {
    while (value > 0) {
      result.push(value % 3);
      value = Math.floor(value / 3);
    }
  } else if (numeralSystem === 8) {
    while (value > 0) {
      result.push(value % 8);
      value = Math.floor(value / 8);
    }
  } else {
    return 'Неподдерживаемая система счисления!';
  }
  return result.reverse().join('');
}

function exersise2() {
  let value1 = +prompt();
  if (isNaN(value1) === true) {
    return 'Некорректный ввод!';
  }
  let value2 = +prompt();
  if (isNaN(value2) === true) {
    return 'Некорректный ввод!';
  }
  return `Ответ: ${value1 + value2}, ${value1 / value2}.`;
}
