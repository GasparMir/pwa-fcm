// Importamos las versiones compat de Firebase para SW
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

// Configuración igual que en app.js
firebase.initializeApp({
  apiKey: "AIzaSyCQNmG4mxKCqvgFMBfLdONBQFGhUpS4jb8",
  authDomain: "pwa-fcm-84f9d.firebaseapp.com",
  projectId: "pwa-fcm-84f9d",
  storageBucket: "pwa-fcm-84f9d.firebasestorage.app",
  messagingSenderId: "198165974263",
  appId: "1:198165974263:web:b8b14dcc914f0fb82617f2"
});

const messaging = firebase.messaging();

// Evento cuando llega un mensaje en segundo plano
messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "Notificación";
  const options = {
    body: payload.notification?.body || "",
    icon: payload.notification?.icon || "/firebase-logo.png",
  };
  self.registration.showNotification(title, options);
});

// Manejar clics en la notificación
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});