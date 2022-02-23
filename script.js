'use strict';

function converter() {
  let value = +prompt();
  const numeralSystem = +prompt();
  const errorMessage1 = 'Некорректный ввод!';
  const errorMessage2 = 'Неподдерживаемая система счисления!';
  const result = [];

  function conversion() {
    while (value > 0) {
      result.push(value % numeralSystem);
      value = Math.floor(value / numeralSystem);
    }
  }

  if (isNaN(numeralSystem) || isNaN(value)) {
    return errorMessage1;
  }

  switch (numeralSystem) {
    case 2:
      conversion();
      break;
    case 3:
      conversion();
      break;
    case 8:
      conversion();
      break;
    default:
      return errorMessage2;
  }

  return result.reverse().join('');
}

function sumAndDiv() {
  const value1 = +prompt();
  const errorMessage = 'Некорректный ввод!';

  if (isNaN(value1)) {
    return errorMessage;
  }

  const value2 = +prompt();

  if (isNaN(value2)) {
    return errorMessage;
  }

  return `Ответ: ${value1 + value2}, ${value1 / value2}.`;
}
