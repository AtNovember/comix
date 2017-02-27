import Scene from './Scene'
import Remark from '../Remark'
import Bubble from '../Bubble'

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
        <img className='Hero' src='' />
      </Scene>
    ))
    .add('Scene width 6 bg wrap hero', () => (
      <Scene
        wrap
        width={6}
        background='http://ic.pics.livejournal.com/dzeso/5786652/215000/215000_original.png'
      >
        <Remark wd={6}>Эта сцена в полэкрана</Remark>
        <Bubble >Чья-то речь</Bubble>
        <img
          className='Hero'
          src='https://2.bp.blogspot.com/-opRV04LGdZ4/VspUN_SFUmI/AAAAAAAAKAU/KVIg-J81TCk/s1600/%25D0%25A1%25D0%25BD%25D0%25B8%25D0%25BC%25D0%25BE%25D0%25BA%2B%25D1%258D%25D0%25BA%25D1%2580%25D0%25B0%25D0%25BD%25D0%25B0%2B%2528306%2529.png'
        />
      </Scene>
    ))
    .add('Scene width 6 bg wrap hero', () => (
      <Scene
        wd={10}
        wrap
        background='http://ic.pics.livejournal.com/dzeso/5786652/215000/215000_original.png'
      >
        <Remark wd={6}>Салон Анны Павловны</Remark>

        <img
          className='Hero'
          src='https://2.bp.blogspot.com/-opRV04LGdZ4/VspUN_SFUmI/AAAAAAAAKAU/KVIg-J81TCk/s1600/%25D0%25A1%25D0%25BD%25D0%25B8%25D0%25BC%25D0%25BE%25D0%25BA%2B%25D1%258D%25D0%25BA%25D1%2580%25D0%25B0%25D0%25BD%25D0%25B0%2B%2528306%2529.png'
        />
        <Bubble
          bottomLeft
          coordTop='10%'
          coordLeft='45%'
        >
          Ну здравствуйте, здравствуйте!
        </Bubble>
        <Bubble
          leftBottom
          coordTop='25%'
          coordLeft='43%'
        >
          Садитесь, рассказывайте!
        </Bubble>
      </Scene>
    ))
}
