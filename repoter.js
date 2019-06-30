var btn = document.querySelector("#btn");
var preview = document.querySelector('.view');
btn.style.opacity = 0;
// pic wghite size
var img = document.getElementById('btn').value;
document.getElementById('view').value = img;

function returnFileSize(number) {
    if (number < 1024) {
        return number + 'bytes';
    } else if (number >= 1024 && number < 1048576) {
        return (number / 1024).toFixed(1) + 'KB';
    } else if (number >= 1048576) {
        return (number / 1048576).toFixed(1) + 'MB';
    }
}
var elm = document.getElementById('image'),
    img = elm.files[0],
    fileName = img.name, // not path
    fileSize = img.size; // bytes
// By Parsing File
var reader = new FileReader(),
    binary, base64;
reader.addEventListener('loadend', function() {
    binary = reader.result; // binary data (stored as string), unsafe for most actions
    base64 = btoa(binary); // base64 data, safer but takes up more memory
}, false);
reader.readAsBinaryString(img);
// code  event 
/*document.getElementById("filepicker").addEventListener("change", function(event) {
  let output = document.getElementById("listing");
  let files = event.target.files;

  for (let i=0; i<files.length; i++) {
    let item = document.createElement("li");
    item.innerHTML = files[i].webkitRelativePath;
    output.appendChild(item);
  };
}, false);
 */