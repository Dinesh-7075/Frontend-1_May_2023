//your JS code here. If required.
function selectAndRemove() {
  var x = document.getElementById("colorSelect");
  x.remove(x.selectedIndex);
}

function getFormvalue() {
  //Write your code here
  //    var fname = document.getElementsByTagName("input")[0].value;
  //    var lname = document.getElementsByTagName("input")[1].value;
  var fname = document.querySelector("[name=fname]").value;
  var lname = document.querySelector("[name=lname]").value;
  alert(`${fname} ${lname}`);
}

//your JS code here. If required.
function browerInfo() {
  // console.log(navigator.userAgent);
  // document.querySelector("#browser-info").innerText= `You are using ${navigator.userAgent}` ;

  var result = bowser.getParser(window.navigator.userAgent);
  console.log(result);
  document.querySelector("#browser-info").innerText =
    "You are using" +
    result.parsedResult.browser.name +
    "version" +
    result.parsedResult.browser.version;
}
browerInfo();
