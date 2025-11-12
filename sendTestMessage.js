const admin = require("firebase-admin");
const serviceAccount = require("./pwa-fcm-84f9d-firebase-adminsdk-fbsvc-49debc8ab7.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const message = {
  token: "eR1OIBMRtFAmISJ_2hXAmn:APA91bFRQ-A8wSUjqAj20Tdx_lhSn3715m-dyrpChXS1wSJBW-4GOY9d7tSvRSFum-Gp9aRgoe6ohGjSlKzOtHpdxIWOcW4Nqpg7UKI9iX7oChJqt40MKlM",
  notification: {
    title: "Prueba desde Node.js",
    body: "Mensaje enviado a tu PWA"
  }
};

admin.messaging().send(message)
  .then(response => console.log("Mensaje enviado:", response))
  .catch(error => console.error("Error enviando mensaje:", error));
