
const deepCopy = (arr) => {
  let copy = [];
  arr.forEach(elem => {
     copy.push(deepCopyObject(elem))
  })
  return copy;
}


const deepCopyObject = (obj) => {
  let tempObj = {};
  for (let [key, value] of Object.entries(obj)) {

        tempObj[key] = value
      }
  return tempObj;
}

export function bubbleSort(arr) {
  let bigArr = [];
  for(let i = 0; i < arr.length; i++) {
     arr[i].current = true
     bigArr.push(deepCopy(arr))
    for (let j = i + 1; j < arr.length; j++) {
       arr[j].active = true
       arr[j - 1].toSwap = false
       arr[j - 1].active = false
       bigArr.push(deepCopy(arr))
       if(arr[j].value < arr[i].value) {
        arr[j].toSwap = true
        bigArr.push(deepCopy(arr))
         let temp = arr[i]
         arr[i] = arr[j]
         arr[j] = temp
         arr[j].current = false
         arr[i].toSwap = false
         arr[i].current = true
        bigArr.push(deepCopy(arr))
       }
       if(j === arr.length - 1) {
         arr[j].active = false
         bigArr.push(deepCopy(arr))
       }
    }
     arr[i].inPlace = true
    bigArr.push(deepCopy(arr))
  }
  return bigArr
}


export function selectionSort(arr) {
  let bigArr = []
  for(let i = 0; i < arr.length; i++) {
    let minIndex = i;
      arr[i].current = true
      bigArr.push(deepCopy(arr))
    for(let j = i + 1; j <  arr.length; j++) {
      arr[j].active = true
      bigArr.push(deepCopy(arr))
         if(arr[minIndex].value > arr[j].value) {
           arr[minIndex].toSwap = false
            minIndex = j
            arr[minIndex].toSwap = true
      bigArr.push(deepCopy(arr))
         }
       arr[j].active = false
      bigArr.push(deepCopy(arr))
    }

    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
    arr[i].toSwap = false
    arr[i].inPlace = true
    arr[minIndex].current = false
    bigArr.push(deepCopy(arr))
  }
  return bigArr
}



export function insertionSort(arr) {
    let bigArr = []
    let j
    for(let i = 1; i < arr.length; i++) {
       j = i
      arr[j].current = true
      bigArr.push(deepCopy(arr))
        while(j >= 1 && arr[j - 1].value > arr[j].value) {
          arr[j - 1].toSwap = true
          bigArr.push(deepCopy(arr))
          let temp = arr[j]
          arr[j - 1].toSwap = false
          arr[j] = arr[j - 1]
          arr[j].current = false
          arr[j - 1] = temp
          bigArr.push(deepCopy(arr))
          j--
        }
        arr[j].current = false
        bigArr.push(deepCopy(arr))
    }
   for(let i = 0; i < arr.length; i++) {
     arr[i].inPlace = true
   }
    bigArr.push(deepCopy(arr))
    return bigArr
}
