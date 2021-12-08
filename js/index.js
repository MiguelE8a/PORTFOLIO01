if('serviceWorker' in navigator){
  // window.addEventListener('load', function(){
    console.log('PEDO')
    navigator.serviceWorker.register('./js/sw.js')
    .then(reg => console.log('registro de SW Exisoto', reg))
    .catch(err => console.warn('Error al tratatr de registrar el sw', err))
  // })

  }