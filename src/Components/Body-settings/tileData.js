
// GIF IMAGES IMPORT
 import alarm from './static/images/alam-clock.gif'
 import digital from './static/images/digital-alarm-clock.gif'
 import bird from './static/images/bird.gif'
 import acoustic_guitar from './static/images/acoustic-guitar.gif'
 import alert from './static/images/siren2.gif'
 import siren_extreme from './static/images/siren_extreme.gif'
 import tv_static from './static/images/static.gif'

 const tileData = [
   {
   img: alert,
   title: 'Siren',
   mp3_name: 'Siren',
   mp3_path:  './sounds/siren.mp3',
   loudness:10,
   loud_class:'extremely-loud'
  },
  {
    img: digital,
    title: 'Digital alarm',
    mp3_name: 'Digital alarm',
    mp3_path: './sounds/digital-alarm-clock.mp3',
    loudness:7,
    loud_class:'loud'
  },
   {
     img: alarm,
     title: 'Classic alarm',
     mp3_name: 'Classic alarm',
     mp3_path: './sounds/classic-alarm-clock.mp3',
     loudness:6,
     loud_class:'loud'
   },
   {
     img: acoustic_guitar,
     title: 'Acoustic guitar',
     mp3_name: 'Acoustic guitar',
     mp3_path:  './sounds/Acoustic-guitar.mp3',
     loudness:4,
     loud_class:'not-loud'
   },
   {
     img: bird,
     title: 'Rainy Bird',
     mp3_name: 'Rainy Birds',
     mp3_path: './sounds/bird-singing.mp3',
     loudness:0,
     loud_class:'not-loud'
   },
   {
     img: siren_extreme,
     title: '???',
     mp3_name: 'Dont use this',
     mp3_path: './sounds/siren_extreme.mp3',
     loudness:999,
     loud_class:'extremely-loud'
   },
   {
     img: tv_static,
     title: 'TV Static',
     mp3_name: 'TV Static',
     mp3_path: './sounds/tv_static.mp3',
     loudness:9,
     loud_class:'extremely-loud'
   },


 ]
export  default tileData
