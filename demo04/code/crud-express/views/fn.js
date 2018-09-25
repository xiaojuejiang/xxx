function fn(callback){
    setTimeout(function(){
        var data=1;
        callback(data);
    }, 1000);
}
fn(function(data){
    console.log(data)
});