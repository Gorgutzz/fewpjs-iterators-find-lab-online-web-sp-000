const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let record = array.find(s => s === "W" )
  return record ? record.year: undefined
}
