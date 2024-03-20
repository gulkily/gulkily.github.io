function SetPreview(size, unit, color, background) {
  //alert('SetPreview: size = ' + size + '; unit = ' + unit + '; color = ' + color + '; background = ' + background);

  var fieldSize = document.getElementById('size');
  var fieldUnit = document.getElementById('unit');
  var fieldColor = document.getElementById('color');
  var fieldBackground = document.getElementById('background');

  fieldSize.value = size;
  fieldUnit.value = unit;
  fieldColor.value = color;
  fieldBackground.value = background;

  var buttonSubmit = document.getElementById('submit');
  //buttonSubmit.click();
  return false;
}

function SaveSetting() {
  // we started writing this, but did not finish
  // it does not actually do anything useful yet
  
  return; // exit without doing anything
  
  var fieldSize = document.getElementById('size').value;
  var fieldUnit = document.getElementById('unit').value;
  var fieldColor = document.getElementById('color').value;

  alert('SaveSetting: size = ' + fieldSize + '; unit = ' + fieldUnit + '; color = ' + fieldColor);

  var HistoryList = document.getElementById('HistoryList');

  var linkOnclick = "SetPreview(" + fieldSize + ", '" + fieldUnit + "', '" + fieldColor + "')"; 
  var linkText = fieldSize + " " + fieldUnit + ", " + fieldColor;
  
  var linkNew = document.createElement('a');
  linkNew.setAttribute('href', '#');
  linkNew.setAttribute('onclick', linkOnclick);
  linkNew.innerHTML = linkText;

  /*
  <div style="float:right" id=HistoryList>
  <a href=# onclick="SetPreview(35, 'pt', 'red')">35 pt, red</a>
  */
  
}
