require(__dirname+'/index.js')({css:`a[href^=/].daisy, .daisy:has(nav) > a[href]:lt($var).give.me.your.answer.do {content:' ';} .im.half.crazy::a .all.for {background: red;}    @keyframes fa-spin { 0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); } 100% { -webkit-transform: rotate(359deg); transform: rotate(359deg); } }      .the::y, .love {background: red;}  .of::y > .you {background: red;}`}).then(result=>{
  if(result.classNames.join(" ") === "daisy give me your answer do im half crazy all for the love of you"){
    process.exit();
  }else{
    process.exit(1);
  }
})
