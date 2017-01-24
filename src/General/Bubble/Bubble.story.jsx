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
      Я справа, и я говорю, что я справа   я тут вверху  я тут вверху
    </Bubble>
  ))
  .add('Говорящий слева', () => (
    <Bubble left>
      Я слева, и я говорю, что я слева  я тут вверху  я тут вверху  я тут вверху
    </Bubble>
  ))
  .add('Bubble top', () => (
    <Bubble top>
      <p>я тут вверху   я тут вверху  я тут вверху  я тут вверху  я тут вверху</p>
    </Bubble>
  ))
  .add('Bubble topRight', () => (
    <Bubble topRight>
      я тут вверху  я тут вверху  я тут вверху  я тут вверху  я тут вверху  я тут вверху
    </Bubble>
  ))
  .add('Bubble topLeft', () => (
    <Bubble topLeft>
      я тут вверху  я тут вверху  я тут вверху  я тут вверху  я тут вверху  я тут вверху
    </Bubble>
  ))
  .add('Bubble bottom', () => (
    <Bubble bottom>
    <p>
      я тут внизу   я тут вверху   я тут вверху  я тут вверху  я тут вверху
    </p>

      <a href='йцу'>
        Перейди по ссылке
      </a>
    </Bubble>
  ))
  .add('Bubble bottom top left', () => (
    <Bubble
      bottom
      xtop='0%'
      yleft='0%'
      // right={null}
      // bottom={null}
    >
    <p>  я тут внизу   я тут вверху  я тут вверху  я тут вверху  я тут вверху</p>
      <a href='йцу'>
        Перейди по ссылке
      </a>
    </Bubble>
  ))
  .add('Bubble bottom bottom right', () => (
    <Bubble
      bottom
      xbottom='0%'
      yright='0%'
      // right={null}
      // bottom={null}
    >
    <p>  я тут внизу   я тут вверху  я тут вверху  я тут вверху  я тут вверху</p>
      <a href='йцу'>
        Перейди по ссылке
      </a>
    </Bubble>
  ))
}
