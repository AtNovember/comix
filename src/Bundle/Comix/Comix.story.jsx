// import Comix from './Comix'
import Page from '../../General/Page'
import Slide from '../../General/Slide'
import Scene from '../../General/Scene'
import Remark from '../../General/Remark'
import Bubble from '../../General/Bubble'
import {Row} from 'react-bootstrap'
// import Comix from './Comix'

module.exports = function({storiesOf, action}) {
  return storiesOf('Comix', module).add('empty', () => (
    <Page>
      Empty
    </Page>
  )).add('page 1 scene', () => (
    <Page>
      <Scene wd={2}>
        <h2>Часть 1</h2>
      </Scene>
      <Scene wd={10} wrap background='http://ic.pics.livejournal.com/dzeso/5786652/215000/215000_original.png'>
        <Remark wd={6}>Салон Анны Павловны</Remark>

        <img className='Hero' src='https://2.bp.blogspot.com/-opRV04LGdZ4/VspUN_SFUmI/AAAAAAAAKAU/KVIg-J81TCk/s1600/%25D0%25A1%25D0%25BD%25D0%25B8%25D0%25BC%25D0%25BE%25D0%25BA%2B%25D1%258D%25D0%25BA%25D1%2580%25D0%25B0%25D0%25BD%25D0%25B0%2B%2528306%2529.png'/>
        <Bubble bottomLeft coordTop='10%' coordLeft='45%'>
          Ну здравствуйте, здравствуйте!
        </Bubble>
        <Bubble leftBottom coordTop='25%' coordLeft='43%'>
          Садитесь, рассказывайте!
        </Bubble>

      </Scene>
    </Page>
  )).add('page 1 whole scene', () => (
    <Page>
      <Row>

        <Scene wd={2}>
          <h2>Часть 1</h2>

        </Scene>
        <Scene wd={10} wrap background='http://ic.pics.livejournal.com/dzeso/5786652/215000/215000_original.png'>
          <Remark wd={6}>Салон Анны Павловны</Remark>

          <img className='Hero'
            src='https://2.bp.blogspot.com/-opRV04LGdZ4/VspUN_SFUmI/AAAAAAAAKAU/KVIg-J81TCk/s1600/%25D0%25A1%25D0%25BD%25D0%25B8%25D0%25BC%25D0%25BE%25D0%25BA%2B%25D1%258D%25D0%25BA%25D1%2580%25D0%25B0%25D0%25BD%25D0%25B0%2B%2528306%2529.png'
            coordleft='25%'
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

          <img className='Hero'
            src='https://2.bp.blogspot.com/-NKBHbSa3-lU/VspUNzpUZ4I/AAAAAAAAKAQ/qXQdKHA5zC4/s200/%25D0%25A1%25D0%25BD%25D0%25B8%25D0%25BC%25D0%25BE%25D0%25BA%2B%25D1%258D%25D0%25BA%25D1%2580%25D0%25B0%25D0%25BD%25D0%25B0%2B%2528308%2529.png'
            coordRight="25%"
          />
          <Bubble bottomRight coordTop='10%' coordLeft='45%'>
            Fuck you, old bitch!
          </Bubble>

        </Scene>
      </Row>
    </Page>
  ))
}
