Quagga.init({
  inputStream: {
    name: "Live",
    type: "LiveStream",
    target: document.querySelector('#preview'),
    constraints: {
      width: 640,
      height: 480,
      facingMode: "environment"
    },
  },
  decoder: {
    readers: ["ean_reader"]
  }
}, function(err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Initialization finished. Ready to start");
  Quagga.start();
});

Quagga.onDetected(function(result) {
  var code = result.codeResult.code;
  console.log("Barcode detected: " + code);
  document.getElementById("result").innerText = "Barcode detected: " + code;
});
