
function tmp(){
    console.log("tmp");
    setTimeout(tmp(),1000);
}

tmp();
