/*!
Theme: Newstalgia
Version: 1
Author: MariesNavarro
23 de Noviembre del 2018
 */
"use strict";
window.console.log("%cCoded by Maries Navarro", "color:#34408f;  font-size: 10px; background:#000; padding:20px;");
function _(el){return document.querySelector(el); }
function __(el){return document.querySelectorAll(el); }

function changeLevel(n){
  var tit = _("#titulo").children[0];
  console.log(tit);
  tit.setAttribute("src", "'img/tit/"+n+".png");
}


$(function(){
  $('.seq_1').spritespin({
      source: SpriteSpin.sourceArray('/img/seq18/cap-{frame}.png', {
      frame: [0,17],
      digits: 1
    }),
    width: 1200,
    height: 675,
    sense: 1,
    animate: false,
    responsive: true,
    plugins: [
      '360',
      'move'
    ]
  });
});
