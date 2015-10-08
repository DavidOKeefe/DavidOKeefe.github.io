var cheatSheetDropdown = document.getElementById('cheatSheetDropdown')
var rubyBasics = document.getElementById('rubyBasics')
var rubyEnumerables = document.getElementById('rubyEnumerables')
var rubyHashArray = document.getElementById('rubyHashArray')
var javascriptObjects = document.getElementById('javascriptObjects')
var javascriptPrototypes = document.getElementById('javascriptPrototypes')
var looping = document.getElementById('looping')
var htmlBasics = document.getElementById('htmlBasics')
var cssBasics = document.getElementById('cssBasics')
var cssPositioning = document.getElementById('cssPositioning')
var gitBasics = document.getElementById('gitBasics')
var sqlBasics = document.getElementById('sqlBasics')


function displayCheatsheet(){
  hideAllElements();
  if(cheatSheetDropdown.value == 'rubyBasics'){
    rubyBasics.style.display = "block";
  } else if (cheatSheetDropdown.value == 'rubyEnumerables'){
    rubyEnumerables.style.display = "block";
  } else if (cheatSheetDropdown.value == 'rubyHashArray'){
    rubyHashArray.style.display = "block";
  } else if (cheatSheetDropdown.value == 'javascriptObjects'){
    javascriptObjects.style.display = "block";
  } else if (cheatSheetDropdown.value == 'javascriptPrototypes'){
    javascriptPrototypes.style.display = "block";
  } else if (cheatSheetDropdown.value == 'looping'){
    looping.style.display = "block";
  } else if (cheatSheetDropdown.value == 'htmlBasics'){
    htmlBasics.style.display = "block";
  } else if (cheatSheetDropdown.value == 'cssBasics'){
    cssBasics.style.display = "block";
  } else if (cheatSheetDropdown.value == 'cssPositioning'){
    cssPositioning.style.display = "block";
  } else if (cheatSheetDropdown.value == 'gitBasics'){
    gitBasics.style.display = "block";
  } else if (cheatSheetDropdown.value == 'sqlBasics'){
    sqlBasics.style.display = "block";
  }

}

function hideAllElements(){
  rubyBasics.style.display = "none";
  rubyEnumerables.style.display = "none";
  rubyHashArray.style.display = "none";
  javascriptObjects.style.display = "none";
  javascriptPrototypes.style.display = "none";
  looping.style.display = "none";
  htmlBasics.style.display = "none";
  cssBasics.style.display = "none";
  cssPositioning.style.display = "none";
  gitBasics.style.display = "none";
  sqlBasics.style.display = "none";
}
