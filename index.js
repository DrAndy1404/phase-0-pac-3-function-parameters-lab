function introduction(name =  `Andrew`) {
    console.log(`Hi, my name is ${name}.`);
}
introduction();

function introductionWithLanguage(name, language) {
    console.log(`Hi, my name is ${name} and I'm learning to program in ${language}.`);
}
introductionWithLanguage('Andrew', 'JavaScript');


  function introductionWithLanguageOptional(name, language = `JavaScript`)  {
    console.log(`Hi, my name is ${name} and I'm learning to program in ${language}.`);
  }
introductionWithLanguageOptional(`Andrew`);
