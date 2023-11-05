function goNowgg() {
  var url = document.getElementById("url").value;

  var regex = /^https:\/\/now\.gg\/play\/([^/]+)\/(\d+)\/([^/]+)$/;
  if (regex.test(url)) {
    url = url.replace("https://now.gg", "");
    window.open(url);
  } else {
    alert("Please enter a valid Now.gg URL and try again (Use https:// at the start of your URL)!");
  }
}
function goNowggButtons(url) {

  var regex = /^https:\/\/now\.gg\/play\/([^/]+)\/(\d+)\/([^/]+)$/;
  if (regex.test(url)) {
    url = url.replace("https://now.gg", "");
    window.open(url);
  } else {
    alert("Please enter a valid Now.gg URL and try again (Use https:// at the start of your URL)!");
  }
}
