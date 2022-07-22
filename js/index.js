//Task #1 Создай класс, который будет создавать пользователей с именем и фамилией. Добавить к классу метод для
//   вывода имени и фамилии
// class User {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   showUser() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// const user = new User(prompt('Enter Your firstname'), prompt('Enter your lastname'));
// document.querySelector('body').innerHTML = user.showUser();
//-------------------------------------------------------------------------
// Task #2  Создай список состоящий из 4 листов. Используя джс обратись к 2 li и с
// использованием навигации по DOM дай 1 элементу синий фон, а 3 красный

const li2 = document.getElementsByTagName('li')[1];
li2.previousElementSibling.style.color = 'blue';
li2.nextElementSibling.style.color = 'red';
//----------------------------------------------------------------------------
//Task 3  Создай див высотой 400 пикселей и добавь на него событие наведения мышки. При наведении мышки
// выведите текстом координаты, где находится курсор мышки

const div = document.getElementById('div');
div.onmousemove = function (e) {
  this.innerHTML = ` X: ${e.offsetX}, Y: ${e.offsetY}`;
};
// div.onmouseover = function (e) {
//   this.innerHTML = ` X: ${e.offsetX}, Y: ${e.offsetY}`;
// };
//-------------------------------------------------------------------------------
//Task 4 Создай кнопки 1,2,3,4 и при нажатии на кнопку выведи информацию о том какая кнопка была нажата

const btns = document.querySelectorAll('button');
console.log(btns);
btns.forEach(function (btn) {
  btn.onclick = function () {
    console.log(`Clicked: ${btn.innerText}`);
  };
});

//-------------------------------------------------------------------------------
//Task 5 Создай див и сделай так, чтобы при наведении на див, див изменял свое положение на странице

let speed = 10, // the box will move by 10 pixels on every step
  direction = 1, // 1 = move right; -1 = move left
  boxElement = document.getElementById('theIdOfTheBox');

if (boxElement) {
  boxElement.addEventListener('mousemove', function () {
    // Calculate and store some of the box coordinates:
    let boxLeftPos = boxElement.offsetLeft,
      boxRightPos = boxLeftPos + boxElement.offsetWidth;
    // When right side of the box goes too far - change direction:
    if (boxRightPos > document.body.offsetWidth) {
      direction = -1;
    }
    // When left side of the box goes too far - change direction:
    if (boxLeftPos < 0) {
      direction = 1;
    }
    // Recalculate position:
    boxElement.style.left = boxLeftPos + speed * direction + 'px';
  });
}
//----------------------------------------------------------------------
//Task #6 Создай поле для ввода цвета, когда пользователь выберет какой-то цвет сделай его фоном body
const chooseTheColor = document.getElementById('head');
chooseTheColor.addEventListener('change', watchChosenColor, false);

function watchChosenColor(ev) {
  document.getElementsByTagName('body');
  document.body.style.backgroundColor = ev.target.value;
  console.log(chooseTheColor.value);
}
//--------------------------------------------------------------------------
//Task #7  Создай инпут для ввода логина, когда пользователь начнет Вводить данные в инпут выводи их в консоль
const loginInput = document.createElement('input');
loginInput.placeholder = 'Enter login';
document.body.append(loginInput);
loginInput.addEventListener('input', (e) => {
  console.log(loginInput.value);
});
//-----------------------------------------------------------------------------
//Task #8 Создайте поле для ввода данных поле введения данных выведите текст под полем
const inputData = document.createElement('input'),
  span = document.createElement('span');

inputData.placeholder = 'Enter data';

document.body.append(inputData);

inputData.addEventListener('input', (e) => {
  document.body.append(span);
  span.style.display = 'flex';
  span.innerHTML = e.target.value;
});
