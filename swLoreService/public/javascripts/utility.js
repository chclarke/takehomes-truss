function getData(e) {
  let uri = "/getData";
  e.preventDefault();
  e.stopPropagation();
  const req = new XMLHttpRequest();
  req.open("GET", uri, true);
  req.onreadystatechange = () => {
    if (req.readyState === XMLHttpRequest.DONE) {
      document.getElementById("result").classList.remove("loader");
      document.getElementById("result").innerHTML = req.responseText;
    }
  };
  req.send();
}

window.addEventListener("load", (e) => {
  getData(e);
});
