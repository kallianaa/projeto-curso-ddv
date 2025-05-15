function dizerOi(callback) {
  console.log('Olá');
  callback();
}

dizerOi(() => {
    console.log('Olá eu sou a callback');
})

setInterval(() => {
    console.log('Executando ...');
}, 1000);