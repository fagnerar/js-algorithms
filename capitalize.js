function letterCapitalize(str) {
  const words = str.split(' ');

  for (let i = 0; i < words.length; i++) {
    const first = words[i].charAt(0).toUpperCase();
    const others = words[i].substr(1);
    words[i] = first + others;
  }

  return words.join(' ');
}

console.log(letterCapitalize('sol Andes ênfase')); //Sol Andes Ênfase
