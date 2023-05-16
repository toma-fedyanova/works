import Creator from './Creator';
// npm init @eslint/config
// npm install eslint-plugin-import --save-dev  npm i eslint eslint-config-airbnb-base
// npm install -D webpack webpack-cli
// npm install -D html-webpack-plugin и подключить в конфиг класс, удалить dist и запустить npm run build

getStart();
function getStart(num = 10) {
  let element = new Creator(num);
  element.getTitle();
  element.getField();
  element.setButtons();
}

function countClick() {
  let counter = 0;
  let field = document.getElementsByClassName('field')[0];
  const listenerClick = () => counter++;
  
  field.addEventListener('click', function func(event) {
    if (event.target.matches('button_closed')) listenerClick();
  })
  return counter;
}

