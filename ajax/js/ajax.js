$(document).ready(function(){
    $.ajax({
        url : "/ajax/json/data.json",
        tpye : "GET",
        dataType : "json",
        success : function(data){
            console.log(data, typeof data);
            //JSON.parse(data) -> 자바스크립트가 쓸 수 있게 object
            // $("#here").html(data["menu"][0]["category"]) //data["menu"][0]에서 foreach발생

            let gnbli="";
            data["menu"].forEach(function(ele, idx){
                // 순서대로 순회하면서 실행
                console.log(`${idx}번째 데이터는 ${ele}`)
                gnbli +=`<li>${ele["category"]}`;
                gnbli +=`<ul>`;
                ele["subcategories"].forEach(function(eele, iidx){
                    gnbli +=`<li>${eele["name"]}`;
                    gnbli +=`<ul>`;
                    eele["items"].forEach(function(eeele, iiidx){
                        gnbli +=`<li>${eeele}</li>`;
                    })
                    gnbli +=`</ul>`;
                    gnbli +=`</li>`;
                })
                gnbli +=`</ul>`;
                gnbli +=`</li>`
                
            });


            $(".gnb").html(gnbli)

        },

        
        error : function(a, b, c){
            console.log(a, b, c);
        }
    });
})