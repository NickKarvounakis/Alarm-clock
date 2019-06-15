
// GIF IMAGES IMPORT
 import alarm from './static/images/alam-clock.gif'
 import digital from './static/images/digital-alarm-clock.gif'
 import bird from './static/images/bird.gif'
 import acoustic_guitar from './static/images/acoustic-guitar.gif'

 const tileData = [
   {
     img: alarm,
     title: 'Classic alarm',
     author: '6',
     mp3_name: 'Classic alarm',
     mp3_path: './sounds/classic-alarm-clock.mp3',
     loudness:6,
     loud_class:'loud'
   },
   {
     img: digital,
     title: 'Digital alarm',
     author: '7',
     mp3_name: 'Digital alarm',
     mp3_path: './sounds/digital-alarm-clock.mp3',
     loudness:7,
     loud_class:'loud'
   },
   {
     img: bird,
     title: 'Rainy Bird',
     author: '0',
     mp3_name: 'Rainy Birds',
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

 ]
export  default tileData
