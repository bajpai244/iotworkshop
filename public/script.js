if ('WebSocket' in window) {
  // It means your browser supoort WebSocket
  var ws = new WebSocket('ws://localhost:8000')
} else {
  alert(
    'WebSocket is not supported by your Browser, please use any other browser'
  )
}

function clicked() {}
