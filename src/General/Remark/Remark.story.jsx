import Remark from './Remark'

module.exports = function({storiesOf, action}) {
  return storiesOf('Remark', module)
  .add('Remark default', () => (
    <Remark>
      Что-то произошло
    </Remark>
  ))
  .add('Remark Много текста', () => (
    <Remark >
      <p>Много</p>
      <b>МНОГО!</b>
      <p>СЛОВ!!!</p>
    </Remark>
  ))
  .add('Remark справа', () => (
    <Remark
      coordRight='0'
    >
      Эта ремарка находится с правого края сцены
    </Remark>
  ))
  .add('Remark справа внизу', () => (
    <Remark
      coordBottom='10px'
      coordRight='10px'
    >
      Эта ремарка тоже находится с правого края сцены, но объявлена по-другому
    </Remark>
  ))
  .add('Remark bottom width 12', () => (
    <Remark
      coordBottom='0'
      wd={12}
    >
    <p>
      я тут внизу   я тут вверху   я тут вверху  я тут вверху  я тут вверху
    </p>
      <a href='йцу'>
        Перейди по ссылке
      </a>
    </Remark>
  ))
  .add('Remark bottom bottom right', () => (
    <Remark
      coordBottom='0%'
      coordRight='0%'
    >
    <p>Ремарка внизу справа </p>
      <a href='йцу'>
        Перейди по ссылке
      </a>
    </Remark>
  ))
}
