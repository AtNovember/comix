import Hero from './Hero';
import Scene from '../Scene/Scene';

module.exports = function({storiesOf, action}) {
  return storiesOf('Hero', module)
  .add('Hero default', () => (
    <Hero>
      no hero =(
    </Hero>
  ))
  .add('Hero inside descriptions', () => (
    <Hero
      name="Анна Павловна Шерер"
      img="https://2.bp.blogspot.com/-opRV04LGdZ4/VspUN_SFUmI/AAAAAAAAKAU/KVIg-J81TCk/s1600/%25D0%25A1%25D0%25BD%25D0%25B8%25D0%25BC%25D0%25BE%25D0%25BA%2B%25D1%258D%25D0%25BA%25D1%2580%25D0%25B0%25D0%25BD%25D0%25B0%2B%2528306%2529.png"
    />
  ))
  .add('Hero справа', () => (
    <Scene
      wd={12}
      wrap
      background="http://ic.pics.livejournal.com/dzeso/5786652/215000/215000_original.png"
    >
      <Hero
        coordRight={0}
        coordBottom={0}
        name="Анна Павловна Шерер"
        img="https://2.bp.blogspot.com/-opRV04LGdZ4/VspUN_SFUmI/AAAAAAAAKAU/KVIg-J81TCk/s1600/%25D0%25A1%25D0%25BD%25D0%25B8%25D0%25BC%25D0%25BE%25D0%25BA%2B%25D1%258D%25D0%25BA%25D1%2580%25D0%25B0%25D0%25BD%25D0%25B0%2B%2528306%2529.png"
      />
    </Scene>
  ))
  .add('Hero слева', () => (
    <Scene
      wd={12}
      wrap
      background="http://ic.pics.livejournal.com/dzeso/5786652/215000/215000_original.png"
    >
      <Hero
        coorleft={0}
        coordBottom={0}
        name="Анна Павловна Шерер"
        img="https://2.bp.blogspot.com/-opRV04LGdZ4/VspUN_SFUmI/AAAAAAAAKAU/KVIg-J81TCk/s1600/%25D0%25A1%25D0%25BD%25D0%25B8%25D0%25BC%25D0%25BE%25D0%25BA%2B%25D1%258D%25D0%25BA%25D1%2580%25D0%25B0%25D0%25BD%25D0%25B0%2B%2528306%2529.png"
      />
    </Scene>
  ));
};
