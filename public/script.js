if ('WebSocket' in window) {
  // It means your browser supoort WebSocket
  var ws = new WebSocket('ws://localhost:8000')
} else {
  alert(
    'WebSocket is not supported by your Browser, please use any other browser'
  )
}

function clicked() {
  const input = document.getElementById('angle').value
  const intInput = Number.parseInt(input)

  if (isNaN(intInput) == false) {
    ws.send(intInput)
    console.log('sent')
  } else {
    alert('Please Enter A valid Number')
  }
}
