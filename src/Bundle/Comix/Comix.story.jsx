import Comix from './Comix'
import Page from '../../General/Page'
import SimpleSlider from '../../General/Slides'
import Slide from '../../General/Slide'
import Scene from '../../General/Scene'
import Hero from '../../General/Hero'
import Remark from '../../General/Remark'
import Bubble from '../../General/Bubble'
import { Row } from 'react-bootstrap'
// import Comix from './Comix'

module.exports = function({storiesOf, action}) {
  return storiesOf('Comix', module).add('Comix FUN', () => (
    <Comix>
      <SimpleSlider>
        <Slide full background="">
          <Row>
            <Scene wd={2}>
              <h2>Часть 1</h2>

            </Scene>
            <Scene wd={10} wrap background='http://ic.pics.livejournal.com/dzeso/5786652/215000/215000_original.png'>
              <Remark wd={6}>Салон Анны Павловны</Remark>

              <Hero coorleft='25%' coordBottom={0} name="Анна Павловна Шерер" img="https://2.bp.blogspot.com/-opRV04LGdZ4/VspUN_SFUmI/AAAAAAAAKAU/KVIg-J81TCk/s1600/%25D0%25A1%25D0%25BD%25D0%25B8%25D0%25BC%25D0%25BE%25D0%25BA%2B%25D1%258D%25D0%25BA%25D1%2580%25D0%25B0%25D0%25BD%25D0%25B0%2B%2528306%2529.png"/>
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
              <Remark wd={10} coordBottom='10px'>
                отвечал, нисколько не смутясь такою встречей, вошедший князь, в придворном, шитом мундире, в чулках, <br/>
                 башмаках и звездах, с светлым выражением плоского лица.
              </Remark>
              <Hero wd={4} coordRight='0' coordBottom={0} name='Василий Курагин' img='https://2.bp.blogspot.com/-NKBHbSa3-lU/VspUNzpUZ4I/AAAAAAAAKAQ/qXQdKHA5zC4/s200/%25D0%25A1%25D0%25BD%25D0%25B8%25D0%25BC%25D0%25BE%25D0%25BA%2B%25D1%258D%25D0%25BA%25D1%2580%25D0%25B0%25D0%25BD%25D0%25B0%2B%2528308%2529.png'/>
              <Bubble bottomRight coordTop='10%' coordRight='35%' tooltip="Господи, какое горячее нападение!">
                Dieu, quelle virulente sortie!
              </Bubble>
              <Bubble right coordTop='25%' coordRight='33%' tooltip="Прежде всего скажите, как ваше здоровье, милый друг?">
                Avant tout dites-moi, comment vous allez, chère amie?
              </Bubble>
              <Bubble right coordTop='40%' coordRight='33%'>
                Успокойте меня
              </Bubble>
            </Scene>
          </Row>
          <Row>
            <Scene wd={10} background="http://ic.pics.livejournal.com/dzeso/5786652/215427/215427_original.png">
              <Hero img="http://funkyimg.com/u2/179/606/17.jpg" coordBottom={0} coordLeft='10%'/>
              <Bubble bottom coordTop='25%' coordRight='33%'>
                Как можно быть здоровой...
              </Bubble>
              <Bubble bottom coordTop='40%' coordRight='33%'>
                Когда нравственное страдаешь?
              </Bubble>
              <Bubble left coordTop='55%' coordRight='33%'>
                Разве можно, имея чувство, оставаться спокойною в наше время?
              </Bubble>
            </Scene>
            <Scene wd={2}>
              <h2>В середине разговора про политические действия Анна Павловна разгорячилась...</h2>
            </Scene>
          </Row>
        </Slide>
        <Slide full background="">
          <Row>
            <Scene wd={12}></Scene>
          <Scene wd={10}>
             <Bubble wd={8}>
               Ах, не говорите мне про Австрию!
               Я ничего не понимаю, может быть, но Австрия никогда не хотела и не хочет войны. Она предает нас.
               Россия одна должна быть спасительницей Европы. Наш благодетель знает свое высокое призвание
               и будет верен ему. Вот одно, во что я верю. Нашему доброму и чудному государю предстоит
               величайшая роль в мире, и он так добродетелен и хорош, что Бог не оставит его,
               и он исполнит свое призвание задавить гидру революции,
               которая теперь еще ужаснее в лице этого убийцы и злодея.

               Мы одни должны искупить кровь праведника. На кого нам надеяться, я вас спрашиваю?..

               Англия с своим коммерческим духом не поймет и не может понять всю высоту души императора Александра.
               Она отказалась очистить Мальту. Она хочет видеть, ищет заднюю мысль наших действий.
               Что они сказали Новосильцеву? Ничего.

               Они не поняли, они не могли понять самоотвержения нашего императора,
               который ничего не хочет для себя и все хочет для блага мира.

               И что они обещали? Ничего. И что обещали, и того не будет!
               Пруссия уже объявила, что Бонапарте непобедим и что вся Европа ничего не может против него...

               И я не верю ни в одном слове ни Гарденбергу, ни Гаугвицу.

               Cette fameuse neutralité prussienne, ce n'est qu'un piège.

               Я верю в одного Бога и в высокую судьбу нашего милого императора. Он спасет Европу!..
             </Bubble>
          </Scene>
          <Scene wd={12}>
            <Hero
              wd={4}
              // style={{ height: '250px' }}
              img="https://www.prime-movies.ru/wp-content/uploads/2014/12/000645.jpg"
              coordBottom={0}
              coordRight={0}
             />
          </Scene>
        </Row>
        </Slide>
        <Slide full background="">
          <Remark>
            <h3>Продолжение следует...</h3>
          </Remark>

        </Slide>
      </SimpleSlider>
    </Comix>
  ));
};
