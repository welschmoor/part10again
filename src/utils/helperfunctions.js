

export const reduceNum = (num) => { // this function turns number 39,149 into 39K

  if (String(num).length < 4) {
    return String(num)
  }
  else if (String(num).length === 7) {
    return String(num).slice(0, 1) + "." + String(num).slice(4, 5) + 'M'
  }
  else if (String(num).length === 6) {
    return String(num).slice(0, 3) + "." + String(num).slice(3, 4) + 'K'
  }
  else if (String(num).length === 5) {
    return String(num).slice(0, 2) + "." + String(num).slice(2, 3) + 'K'
  }
  else if (String(num).length === 4) {
    return String(num).slice(0, 1) + "." + String(num).slice(1, 2) + 'K'
  }
}