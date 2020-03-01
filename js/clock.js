
function startTime() {
  var months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var mi = Math.floor(today.getMilliseconds()/10);
  var mo = today.getMonth();
  var dy = today.getDate();
  var yr = today.getFullYear();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  mi = checkTime(mi);
  document.getElementById("y").innerHTML = yr;
  document.getElementById("mon").innerHTML = months[mo];
  document.getElementById("dy").innerHTML = dy;
  document.getElementById("h").innerHTML = h;
  document.getElementById("m").innerHTML = m;
  document.getElementById("s").innerHTML = s;
  document.getElementById("mi").innerHTML = mi;
  var t = setTimeout(startTime, 2);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}