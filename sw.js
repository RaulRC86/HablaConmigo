self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('hablaconmigo-v2').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/style.css',
          '/comida/assets/img/fideos.jpeg',
          '/comida/assets/img/galletas.png',
          '/comida/assets/img/jugo.png',
          '/comida/assets/img/manzana.png',
          '/comida/assets/img/naranja.png',
          '/comida/assets/img/pan.png',
          '/comida/assets/img/platano.png',
          '/comida/assets/img/yogurt.png',
          '/public/emociones.png',
          '/public/auto.png',
          '/public/logo.png',  
          '/public/comida.png',
          '/public/ayuda.png',
          '/public/volver.png',
          '/emociones/index.html',
          '/emociones/assets/img/calor.png',
          '/emociones/assets/img/contento.png',
          '/emociones/assets/img/dolor-cabeza.png',
          '/emociones/assets/img/dolor-diente.png',
          '/emociones/assets/img/dolor-estomago.png',
          '/emociones/assets/img/dolor-pie.png',
          '/emociones/assets/img/frio.png',
          '/emociones/assets/img/triste.png',
          '/viajes/index.html',
          '/viajes/assets/img/auto.jpeg',
          '/viajes/assets/img/caminar.png',
          '/viajes/assets/img/parque.png',
          '/viajes/assets/img/perro.png',
          '/viajes/assets/img/escuela.png',
          '/viajes/assets/img/trabajar.png',
          '/ayuda/index.html',
          '/ayuda/assets/img/calcetines.png',
          '/ayuda/assets/img/hacer_Cama.png',
          '/ayuda/assets/img/ducha.png',
          '/ayuda/assets/img/polera.png',
          '/ayuda/assets/img/pantalon.png',
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