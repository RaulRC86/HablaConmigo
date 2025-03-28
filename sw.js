self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('hablaconmigo-v2').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/assets/css/style.css',
          '/assets/img/fideos.jpeg',
          '/assets/img/galletas.png',
          '/assets/img/pan.png',
          '/public/emociones.png',
          '/public/auto.png',
          '/public/logo.png',  
          '/emociones/index.html',
          '/emociones/calor.png',
          '/emociones/contento.png',
          '/emociones/dolor-cabeza.png',
          '/emociones/dolor-diente.png',
          '/emociones/dolor-estomago.png',
          '/emociones/frio.png',
          '/emociones/triste.png',
          '/emociones/index.html',
          '/emociones/auto.png',
          '/emociones/comida.png',
          '/emociones/emociones.png',
          '/emociones/logo.png',
          '/emociones/voler.png',
          '/viajes/index.html',
          '/viajes/auto.jpeg',
          '/viajes/caminar.png',
          '/viajes/parque.png',
          '/viajes/perro.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });