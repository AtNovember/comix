import Slide from '../Slide'
import SimpleSlider from './Slides'

// for comix test
// import Page from '../Page'
// import Slide from '../Slide'
import Scene from '../Scene'
import Hero from '../Hero'
import Remark from '../Remark'
import Bubble from '../Bubble'
import {Row} from 'react-bootstrap'


module.exports = function({storiesOf, action}) {
  return storiesOf('SimpleSlider', module).add('tags', () => (
    <SimpleSlider>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </SimpleSlider>
  )).add('images', () => (
    <SimpleSlider>
      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
    </SimpleSlider>
  )).add('my React Components', () => (
    <SimpleSlider>
      <Slide full image='http://www.setwalls.ru/large/201308/61695.jpg'>
        Try it now
      </Slide>
      <Slide full image='http://placehold.it/1000x400/ffffff/c0392b/&text=slide6'>
        Try it now 2
      </Slide>
    </SimpleSlider>
  ))
  .add('my Comix Slides', () => (
    <SimpleSlider>
      <Slide full image='http://www.setwalls.ru/large/201308/61695.jpg'>
        Try it now
      </Slide>
      <Slide full>
        <Scene wd={2}>
          <h2>Часть 1</h2>
        </Scene>
        <Scene wd={10} wrap background='http://ic.pics.livejournal.com/dzeso/5786652/215000/215000_original.png'>
          <Remark wd={6}>Салон Анны Павловны</Remark>
          <Hero
            coordBottom={0}
            src='https://2.bp.blogspot.com/-opRV04LGdZ4/VspUN_SFUmI/AAAAAAAAKAU/KVIg-J81TCk/s1600/%25D0%25A1%25D0%25BD%25D0%25B8%25D0%25BC%25D0%25BE%25D0%25BA%2B%25D1%258D%25D0%25BA%25D1%2580%25D0%25B0%25D0%25BD%25D0%25B0%2B%2528306%2529.png'
          />
          <Bubble bottomLeft coordTop='10%' coordLeft='45%'>
            Ну здравствуйте, здравствуйте!
          </Bubble>
          <Bubble leftBottom coordTop='25%' coordLeft='43%'>
            Садитесь, рассказывайте!
          </Bubble>
        </Scene>
      </Slide>
    </SimpleSlider>
  ))
  .add('my Comix Page', () => (
    <SimpleSlider>
      <Slide>
        <Row>
          <Scene wd={2}>
            <h2>Часть 1</h2>
          </Scene>
          <Scene wd={10} wrap background='http://ic.pics.livejournal.com/dzeso/5786652/215000/215000_original.png'>
            <Remark wd={6}>Салон Анны Павловны</Remark>
            <Hero
              coorleft='25%'
              coordBottom={0}
              name="Анна Павловна Шерер"
              img="https://2.bp.blogspot.com/-opRV04LGdZ4/VspUN_SFUmI/AAAAAAAAKAU/KVIg-J81TCk/s1600/%25D0%25A1%25D0%25BD%25D0%25B8%25D0%25BC%25D0%25BE%25D0%25BA%2B%25D1%258D%25D0%25BA%25D1%2580%25D0%25B0%25D0%25BD%25D0%25B0%2B%2528306%2529.png"
            />
            <Bubble bottomLeft coordTop='10%' coordLeft='45%'>
              Ну здравствуйте, здравствуйте!
            </Bubble>
            <Bubble leftBottom coordTop='25%' coordLeft='43%'>
              Садитесь, рассказывайте!
            </Bubble>
          </Scene>
        </Row>
        <Row>
          <Scene wd={12} wrap background='http://ic.pics.livejournal.com/dzeso/5786652/215000/215000_original.png'>
            <Hero
              wd={4}
              coordRight='0'
              coordBottom={0}
              name='Василий Курагин'
              img='https://2.bp.blogspot.com/-NKBHbSa3-lU/VspUNzpUZ4I/AAAAAAAAKAQ/qXQdKHA5zC4/s200/%25D0%25A1%25D0%25BD%25D0%25B8%25D0%25BC%25D0%25BE%25D0%25BA%2B%25D1%258D%25D0%25BA%25D1%2580%25D0%25B0%25D0%25BD%25D0%25B0%2B%2528308%2529.png'
            />
            <Bubble bottomRight coordTop='10%' coordRight='35%'>
              Fuck you, old bitch!
            </Bubble>
            <Bubble right coordTop='25%' coordRight='33%'>
              Are you dead, yet?
            </Bubble>
          </Scene>
        </Row>
        <Row>
          <Scene wd={10} background="http://ic.pics.livejournal.com/dzeso/5786652/215427/215427_original.png">
            <Hero
              img="http://funkyimg.com/u2/179/606/17.jpg"
              coordBottom={0}
              coordLeft='10%'
            />
          </Scene>
          <Scene wd={2}>
            <h2>Все затихли и что-то там...</h2>
          </Scene>
        </Row>
      </Slide>
      <Slide>
        <Row>

          <Scene wd={2}>
            <h2>Часть 2</h2>

          </Scene>
          <Scene wd={10} wrap background='http://ic.pics.livejournal.com/dzeso/5786652/215000/215000_original.png'>
            <Remark wd={6}>Салон Анны Павловны</Remark>

            <Hero
              coorleft='25%'
              coordBottom={0}
              name="Анна Павловна Шерер"
              img="https://2.bp.blogspot.com/-opRV04LGdZ4/VspUN_SFUmI/AAAAAAAAKAU/KVIg-J81TCk/s1600/%25D0%25A1%25D0%25BD%25D0%25B8%25D0%25BC%25D0%25BE%25D0%25BA%2B%25D1%258D%25D0%25BA%25D1%2580%25D0%25B0%25D0%25BD%25D0%25B0%2B%2528306%2529.png"
            />
            <Bubble bottomLeft coordTop='10%' coordLeft='45%'>
              Ну здравствуйте, здравствуйте!
            </Bubble>
            <Bubble leftBottom coordTop='25%' coordLeft='43%'>
              Садитесь, рассказывайте!
            </Bubble>
          </Scene>
        </Row>
        <Row>
          <Scene wd={12} wrap background='http://ic.pics.livejournal.com/dzeso/5786652/215000/215000_original.png'>
            <Hero
              wd={4}
              coordRight='0'
              coordBottom={0}
              name='Василий Курагин'
              img='https://2.bp.blogspot.com/-NKBHbSa3-lU/VspUNzpUZ4I/AAAAAAAAKAQ/qXQdKHA5zC4/s200/%25D0%25A1%25D0%25BD%25D0%25B8%25D0%25BC%25D0%25BE%25D0%25BA%2B%25D1%258D%25D0%25BA%25D1%2580%25D0%25B0%25D0%25BD%25D0%25B0%2B%2528308%2529.png'
            />
            <Bubble bottomRight coordTop='10%' coordRight='35%'>
              Fuck you, old bitch!
            </Bubble>
            <Bubble right coordTop='25%' coordRight='33%'>
              Are you dead, yet?
            </Bubble>
          </Scene>
        </Row>
        <Row>
          <Scene wd={10} background="http://ic.pics.livejournal.com/dzeso/5786652/215427/215427_original.png">
            <Hero
              img="http://funkyimg.com/u2/179/606/17.jpg"
              coordBottom={0}
              coordLeft='10%'
            />
          </Scene>
          <Scene wd={2}>
            <h2>Все затихли и что-то там...</h2>
          </Scene>
        </Row>
      </Slide>
    </SimpleSlider>
  ));
};
