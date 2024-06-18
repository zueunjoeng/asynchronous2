$(document).ready(function(){
    $.ajax({
        url : "/ajax/json/data.json",
        tpye : "GET",
        dataType : "json",
        success : function(data){
            console.log(data, typeof data);
            //JSON.parse(data) -> 자바스크립트가 쓸 수 있게 object
        },
        error : function(a, b, c){
            console.log(a, b, c);
        }
    })
})