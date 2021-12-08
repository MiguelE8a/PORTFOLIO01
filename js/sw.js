
const CACHE_NAME = 'v1_cache_portafolios_MiguelE8A',
urlsToCache = [
    './',
    'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto&display=swap',
    './index.js',
    '.././css/styles.css',
    '.././css/styles.css.map',
    '.././images/aa.png',
    '.././sass/styles.scss',
    '../index.html',
]
console.log('dedos')
//durante la fase de instalacion, generalmente se almacena en chaché los archivos estáticos//
self.addEventListener('install', e=>{
    // e.waitUntil(
    //     caches.open(CACHE_NAME)
    //     .then(chache =>{
    //         return caches.addAll(urlsToCache)
    //         .then(()=>self.skipWaiting())
    //     })
    //     .catch(err => console.log('Fallo registro de caché', err))
    // )
})

//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexion//
self.addEventListener('activate', e=>{

    const cacheWhitelist = [CACHE_NAME]

    e.waitUntil(
        caches.keys()
        .then(cachesNames => {
            cachesNames.map(cacheName => {
            //Eliminamos lo que ya no necesita el cache 
            if(cacheWhitelist.indexOf(cacheName) === -1){
                return caches.delete(cacheName)
            }
            })
        })
        //le indica al SW activar el cache actual
        .then(() => self.clients.claim())
    )
})


self.addEventListener('fetch', e=>{
//Responder ya sea con el objeto en caché o continuar y buscar la url real
console.log('dardo')
console.log(e)
// e.respondWith( fetch( e, Request))
// e.repondWith(caches.match(e.request)
// .then( res => {
//     if(res){
//     //recuperar el cache
//     return res     
//     }
//     //request de la posicion a la url
//     return fetch(e.request)
// }))
})