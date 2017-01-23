import Bubble from './Bubble'

module.exports = function({storiesOf, action}) {
  return storiesOf('Bubble', module)
  .add('Просто текст', () => (
    <Bubble>
      Чья-то речь
    </Bubble>
  ))
  .add('Много текста', () => (
    <Bubble >
      <p>Много</p>
      <b>МНОГО!</b>
      <p>СЛОВ!!!</p>
    </Bubble>
  ))
  .add('Говорящий справа', () => (
    <Bubble right>
      Я справа, и я говорю, что я справа
    </Bubble>
  ))
  .add('Говорящий справа 2', () => (
    <Bubble
      speaker="right"
    >
      Я справа, и я говорю, что я справа
    </Bubble>
  ))
  .add('Говорящий слева', () => (
    <Bubble left>
      Я слева, и я говорю, что я слева
    </Bubble>
  ))
  .add('Bubble top', () => (
    <Bubble top>
      я тут вверху
    </Bubble>
  ))
  .add('Bubble topRight', () => (
    <Bubble topRight>
      я тут вверху
    </Bubble>
  ))
  .add('Bubble topLeft', () => (
    <Bubble topLeft>
      я тут вверху
    </Bubble>
  ))
  .add('Bubble bottom', () => (
    <Bubble bottom>
      я тут внизу
      <a href='йцу'>
        Перейди по ссылке
      </a>
    </Bubble>
  ))
}
