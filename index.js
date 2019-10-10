const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let record = array.find( s => s === "W" )
  if (record) {
    return record.year
  }
