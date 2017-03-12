import React, {Component} from 'react'
import {Grid} from 'react-bootstrap'
import importcss from 'importcss'
// import A from '../../components/A'
// import Comix from './Comix'
// import Page from '../../components/Page'
import SimpleSlider from '../../components/Slides'
import Slide from '../../components/Slide'
import Scene from '../../components/Scene'
import Hero from '../../components/Hero'
import Remark from '../../components/Remark'
import Bubble from '../../components/Bubble'

@importcss(require('./Comix.css'))
export default class Comix extends Component {
  render() {
    return <div styleName='root'>
      <Grid>
        <SimpleSlider>
          <Slide full>
            <Scene wd={2}>
              <h3> Часть 1 </h3>
            </Scene>
            <Scene wd={10} wrap
              background='https://image.ibb.co/eQuPRF/apsalonbg01.png'
            >
             <Remark wd={6}>Салон Анны Павловны</Remark>

             <Hero coorleft='25%' coordBottom={0}
               name="Анна Павловна Шерер"
               img="https://image.ibb.co/bB9PRF/apsherer01.png"/>
             <Bubble bottomLeft coordTop='10%' coordLeft='45%'>
               Ну здравствуйте, здравствуйте!
             </Bubble>
             <Bubble leftBottom coordTop='25%' coordLeft='43%'>
               Садитесь, рассказывайте!
             </Bubble>
           </Scene>
           <Scene wd={12} wrap background='https://image.ibb.co/eQuPRF/apsalonbg01.png'>
             <Remark wd={10} coordBottom='10px'>
               отвечал, нисколько не смутясь такою встречей, вошедший князь, в придворном, шитом мундире, в чулках, <br/>
                башмаках и звездах, с светлым выражением плоского лица.
             </Remark>
             <Hero wd={4} coordRight='0' coordBottom={0}
               name='Василий Курагин'
               img='https://image.ibb.co/ivYJmF/vakuragin01.png'/>
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

           <Scene wd={10} background="https://image.ibb.co/eQuPRF/apsalonbg01.png">
              <Hero img="https://image.ibb.co/gNBSfa/apsherer02.png" coordBottom={0} coordLeft='2%'/>
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
          </Slide>
          <Slide full background="gray">
            <Scene wd={10}>
            {/* <Bubble wd={8}>
              <p>Ах, не говорите мне про Австрию!</p>
              <p>Я ничего не понимаю, может быть, но Австрия никогда не хотела и не хочет войны. Она предает нас.
              Россия одна должна быть спасительницей Европы. Наш благодетель знает свое высокое призвание
              и будет верен ему. Вот одно, во что я верю. Нашему доброму и чудному государю предстоит
              величайшая роль в мире, и он так добродетелен и хорош, что Бог не оставит его,
              и он исполнит свое призвание задавить гидру революции,
              которая теперь еще ужаснее в лице этого убийцы и злодея.</p>

                <p>Мы одни должны искупить кровь праведника. На кого нам надеяться, я вас спрашиваю?..</p>

                <p>Англия с своим коммерческим духом не поймет и не может понять всю высоту души императора Александра.
              Она отказалась очистить Мальту. Она хочет видеть, ищет заднюю мысль наших действий.</p>
                <p>Что они сказали Новосильцеву? Ничего.</p>

                <p>Они не поняли, они не могли понять самоотвержения нашего императора,
              который ничего не хочет для себя и все хочет для блага мира.</p>

              <p>И что они обещали? Ничего. И что обещали, и того не будет!
              Пруссия уже объявила, что Бонапарте непобедим и что вся Европа ничего не может против него...</p>

                <p>И я не верю ни в одном слове ни Гарденбергу, ни Гаугвицу.</p>

                <p>Cette fameuse neutralité prussienne, ce n'est qu'un piège.</p>

                <p>Я верю в одного Бога и в высокую судьбу нашего милого императора. Он спасет Европу!..</p>
            </Bubble> */}
         </Scene>
         <Scene wd={12} background="https://image.ibb.co/crMSfa/apsalon02.png">
           <Bubble wd={6}
             coordBottom='40%'
             coordRight='30%'
             coordLeft='10%'>
             <p>Ах, не говорите мне про Австрию!</p>
             <p>Я ничего не понимаю, может быть, но Австрия никогда не хотела и не хочет войны. Она предает нас.
             Россия одна должна быть спасительницей Европы. Наш благодетель знает свое высокое призвание
             и будет верен ему. Вот одно, во что я верю. Нашему доброму и чудному государю предстоит
             величайшая роль в мире, и он так добродетелен и хорош, что Бог не оставит его,
             и он исполнит свое призвание задавить гидру революции,
             которая теперь еще ужаснее в лице этого убийцы и злодея.</p>

               <p>Мы одни должны искупить кровь праведника. На кого нам надеяться, я вас спрашиваю?..</p>

               <p>Англия с своим коммерческим духом не поймет и не может понять всю высоту души императора Александра.
             Она отказалась очистить Мальту. Она хочет видеть, ищет заднюю мысль наших действий.</p>
               <p>Что они сказали Новосильцеву? Ничего.</p>

               <p>Они не поняли, они не могли понять самоотвержения нашего императора,
             который ничего не хочет для себя и все хочет для блага мира.</p>

             <p>И что они обещали? Ничего. И что обещали, и того не будет!
             Пруссия уже объявила, что Бонапарте непобедим и что вся Европа ничего не может против него...</p>

               <p>И я не верю ни в одном слове ни Гарденбергу, ни Гаугвицу.</p>

               <p>Cette fameuse neutralité prussienne, ce n'est qu'un piège.</p>

               <p>Я верю в одного Бога и в высокую судьбу нашего милого императора. Он спасет Европу!..</p>
           </Bubble>
           <Hero
             wd={4}
             // style={{ height: '250px' }}
             img="https://image.ibb.co/gNBSfa/apsherer02.png"
             coordBottom={0}
             coordRight={0}
            />
         </Scene>
          </Slide>
          <Slide full>
            <Scene wd={12}>
              <Remark>

                  To be continued...

              </Remark>
            </Scene>
          </Slide>
        </SimpleSlider>
      </Grid>
    </div>
  }
}
