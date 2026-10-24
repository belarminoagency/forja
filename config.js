// Cole aqui o firebaseConfig do projeto "forja" no Firebase (veja LEIA-ME.md).
// Enquanto apiKey for "COLE_AQUI", o app abre em modo demonstração.
window.FIREBASE_CONFIG = {
  apiKey: "COLE_AQUI",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Quem pode liberar e tirar acesso dos clientes (também precisa estar em firestore.rules)
window.ADMIN_EMAILS = ['agencia.mkt.belarmino@gmail.com'];

// Seu WhatsApp com DDI e DDD, só números (ex.: '5511999999999').
// Aparece como botão na tela "Aguardando liberação". Deixe vazio para esconder.
window.WHATSAPP = '';
