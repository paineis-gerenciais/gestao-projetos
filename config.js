/* ============================================================
   config.js — configuração DESTA instalação do Gestão de Projetos.
   (A configuração web do Firebase não é segredo: quem protege os
   dados são as regras do Firestore.)
   ============================================================ */
window.APP_CONFIG = {
  nomeApp: "Gestão de Projetos",
  organizacao: "",
  urlApp: "https://paineis-gerenciais.github.io/gestao-projetos/",
  adminInicial: "paineisgerenciais@gmail.com",

  // Link por e-mail: no plano gratuito do Firebase são só 5 por dia no projeto inteiro.
  // Fica Google + e-mail e senha. Para ligar: plano Blaze e true aqui.
  loginPorLink: false,

  firebase: {
    apiKey: "AIzaSyBSuzgRlMFtfxV7F-63NQOxOWCzzR8mIjk",
    authDomain: "pg-gestao-projetos.firebaseapp.com",
    projectId: "pg-gestao-projetos",
    storageBucket: "pg-gestao-projetos.firebasestorage.app",
    messagingSenderId: "450452159482",
    appId: "1:450452159482:web:2988ca8b49654064768243"
  }
};
