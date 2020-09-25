if ('WebSocket' in window) {
  //alert('WebSocket is supported by your Browser!')
  var ws = new WebSocket('ws://localhost:8000')
} else {
  alert(
    'WebSocket is not supported by your Browser, please change to anyother browser'
  )
}

function clicked() {
  const input = document.getElementById('angle').value
  console.log(typeof input)
  const intInput = Number.parseInt(input)
  if (isNaN(intInput) == false) {
    ws.send(intInput)
    console.log('sent')
  } else {
    alert('Please Enter A valid Number')
  }
}
