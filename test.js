function loadHtml() {
    fetch('test.html')
    .then(response => response.text())
    .then(text => document.getElementsByTagName("body").innerHtml = text)
}
loadHtml();