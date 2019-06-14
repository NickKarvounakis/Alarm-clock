

 import alarm from './static/images/alam-clock.gif'
 import digital from './static/images/digital-alarm-clock.gif'
 import bird from './static/images/bird.gif'
 import acoustic_guitar from './static/images/acoustic-guitar.gif'

 const tileData = [
   {
     img: alarm,
     title: 'Classic  clock',
     author: '6',
     mp3_name: 'classic alarm ',
     mp3_path: './sounds/classic-alarm-clock.mp3',
     loudness:6,
     loud_class:'loud'
   },
   {
     img: digital,
     title: 'Digital alarm',
     author: '7',
     mp3_name: 'digital alarm ',
     mp3_path: './sounds/digital-alarm-clock.mp3',
     loudness:7,
     loud_class:'loud'
   },
   {
     img: bird,
     title: 'Rainy Bird',
     author: '0',
     mp3_name: 'Rainy-birds',
     mp3_path: './sounds/bird-singing.mp3',
     loudness:0,
     loud_class:'not-loud'
   },
   {
     img: acoustic_guitar,
     title: 'Acoustic guitar',
     author: 'unknown',
     mp3_name: 'Acoustic guitar',
     mp3_path:  './sounds/Acoustic-guitar.mp3',
     loudness:4,
     loud_class:'not-loud'
   },
   {
     img: alarm,
     title: 'Classic alarm clock',
     author: 'unknown',
     mp3_name: 'classic alarm',
     mp3_path: './sounds/classic-alarm-clock.mp3',
     loudness:6,
     loud_class:'loud'
   },
   {
     img: alarm,
     title: 'Classic alarm clock',
     author: 'unknown',
     mp3_name: 'classic alarm',
     mp3_path: './sounds/classic-alarm-clock.mp3',
     loudness:6,
     loud_class:'loud'
   },
 ]
export  default tileData
