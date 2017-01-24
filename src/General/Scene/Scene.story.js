import Scene from './Scene'

module.exports = function ({ storiesOf, action }) {
  return storiesOf('Scene', module)
    .add('Scene default no bg no hero no width', () => (
      <Scene>
        <h1>Заголовок сцены</h1>
        <p>Чья-то речь</p>
        <button>Какая-то кнопка</button>
      </Scene>
    ))
    .add('Scene width 6', () => (
      <Scene
        wd={6}
      >
        <h1>Эта сцена в полэкрана</h1>
        <p>Чья-то речь</p>
      </Scene>
    ))
    .add('Scene width 6 bg wrap', () => (
      <Scene
        wrap
        width={6}
        background='http://ic.pics.livejournal.com/dzeso/5786652/215000/215000_original.png'
      >
        <h1>Эта сцена в полэкрана</h1>
        <p>Чья-то речь</p>
      </Scene>
    ))
}
