import Scene from './Scene'
// import SlideInner from '../SlideInner/SlideInner'
// import SlideInfoPic from '../SlideInfoPic/SlideInfoPic'
// import SlideLink from '../SlideLink/SlideLink'
// import Button from '../Button/Button'

// import { Row, Col, Button } from 'react-bootstrap'
// import { Row, Col } from 'react-bootstrap'

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
        background='//ic.pics.livejournal.com/dzeso/5786652/215000/215000_original.png'
      >
        <h1>Эта сцена в полэкрана</h1>
        <p>Чья-то речь</p>
      </Scene>
    ))
}
