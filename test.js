require(__dirname+'/index.js')({css:'.flarp::a .o {background: red;} .xxx::y, .z {background: red;}  .xxx::y > .z {background: red;}'}).then(result=>{
  if(JSON.stringify(result.selectors) === `{".flarp":true,".o":true,".xxx":true,".z":true}`){
    process.exit();
  }else{
    process.exit(1);
  }
})
