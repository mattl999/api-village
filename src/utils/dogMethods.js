function requestedBreedName(str) {
  let recording = false;
  let count = 0;
  let breedName = ''
  for (let i = 0; i < str.length; i++) {
    if(count > 4){
        break
    }
    if(recording){
        breedName += str[i]
    }
    if(str[i] === '/'){
        count ++
        console.log(count);      
    }
    if(count ===  4 && !recording){
        recording = true
         
    }       
  }
  return breedName.slice(0,-1)
}

function deHyphenate(name){
    let arr = name.split("-")
    arr.forEach((word, i) => {
        // 
        arr[i] = word.charAt(0).toUpperCase() + word.slice(1)
    })
    return arr.reverse().join(" ")
     
}

deHyphenate("ridgeback-rhodesian")

module.exports = {
    requestedBreedName,
    deHyphenate
}