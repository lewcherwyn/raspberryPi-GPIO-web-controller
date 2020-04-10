
$(document).ready(function() {
        //判断选中还是未选中
    var tog1 = document.getElementById("toggle1");
    var tog2 = document.getElementById("toggle2");
    var tog3 = document.getElementById("toggle3");
    var tog4 = document.getElementById("toggle4");
    var tog5 = document.getElementById("toggle5");
    //存储被选中checkbox的个数以及value值
        //tog1.checked = false;
    var pin_status = Server.docontent; //
    for(var i=0;i<pin_status.length;i++){
        arrvalue=pin_status[i];//数组的索引是从0开始的
        if (arrvalue ==15){
            tog1.checked = true;};
        if (arrvalue ==16){
            tog2.checked = true;};
	if (arrvalue ==20){
            tog3.checked = true;};
	if (arrvalue ==21){
            tog4.checked = true;};
	if (arrvalue ==25){
            tog5.checked = true;};
        console.log(arrvalue);}
    console.log(pin_status);
    $(".docontent").html(pin_status)
        
    $("#toggle1").click(function(){
        pin_num = "15";
        var turn_on = "/PinOn/" + pin_num;
        var turn_off = "/PinOff/" + pin_num;
        if($("#toggle1").is(":checked")===true){
                $.ajax({
                    type:'POST',
                    url: encodeURI(turn_on),
                    success: function() {
                        console.log("Turn on the pin successfully!");
                    },
                    error: function() {
                        alert("Failed to turn the pin");
                        console.log("Failed to turn off the pin!");
                    }
                });
            }else{
                $.ajax({
                    type:'POST',
                    url: encodeURI(turn_off),
                    success: function() {
                        console.log("Close the pin successfully!");
                    },
                    error: function() {
                        alert("Failed to turn the pin!");
                        console.log("Failed to turn off the pin!");
                    }
                });
            }
        
    });

    $("#toggle2").click(function(){
        pin_num = "16";
        var turn_on = "/PinOn/" + pin_num;
        var turn_off = "/PinOff/" + pin_num;
        if($("#toggle2").is(":checked")===true){
                $.ajax({
                    type:'POST',
                    url: encodeURI(turn_on),
                    success: function() {
                        console.log("Turn on the pin successfully!");
                    },
                    error: function() {
                        alert("Failed to turn the pin");
                        console.log("Failed to turn off the pin!");
                    }
                });
            }else{
                $.ajax({
                    type:'POST',
                    url: encodeURI(turn_off),
                    success: function() {
                        console.log("Close the pin successfully!");
                    },
                    error: function() {
                        alert("Failed to turn the pin!");
                        console.log("Failed to turn off the pin!");
                    }
                });
            }
    });
    $("#toggle3").click(function(){
        pin_num = "20";
        var turn_on = "/PinOn/" + pin_num;
        var turn_off = "/PinOff/" + pin_num;
        if($("#toggle3").is(":checked")===true){
                $.ajax({
                    type:'POST',
                    url: encodeURI(turn_on),
                    success: function() {
                        console.log("Turn on the pin successfully!");
                    },
                    error: function() {
                        alert("Failed to turn the pin");
                        console.log("Failed to turn off the pin!");
                    }
                });
            }else{
                $.ajax({
                    type:'POST',
                    url: encodeURI(turn_off),
                    success: function() {
                        console.log("Close the pin successfully!");
                    },
                    error: function() {
                        alert("Failed to turn the pin!");
                        console.log("Failed to turn off the pin!");
                    }
                });
            }
    });
    $("#toggle4").click(function(){
        pin_num = "21";
        var turn_on = "/PinOn/" + pin_num;
        var turn_off = "/PinOff/" + pin_num;
        if($("#toggle4").is(":checked")===true){
                $.ajax({
                    type:'POST',
                    url: encodeURI(turn_on),
                    success: function() {
                        console.log("Turn on the pin successfully!");
                    },
                    error: function() {
                        alert("Failed to turn the pin");
                        console.log("Failed to turn off the pin!");
                    }
                });
            }else{
                $.ajax({
                    type:'POST',
                    url: encodeURI(turn_off),
                    success: function() {
                        console.log("Close the pin successfully!");
                    },
                    error: function() {
                        alert("Failed to turn the pin!");
                        console.log("Failed to turn off the pin!");
                    }
                });
            }
    });
    $("#toggle5").click(function(){
        pin_num = "25";
        var turn_on = "/PinOn/" + pin_num;
        var turn_off = "/PinOff/" + pin_num;
        if($("#toggle5").is(":checked")===true){
                $.ajax({
                    type:'POST',
                    url: encodeURI(turn_on),
                    success: function() {
                        console.log("Turn on the pin successfully!");
                    },
                    error: function() {
                        alert("Failed to turn the pin");
                        console.log("Failed to turn off the pin!");
                    }
                });
            }else{
                $.ajax({
                    type:'POST',
                    url: encodeURI(turn_off),
                    success: function() {
                        console.log("Close the pin successfully!");
                    },
                    error: function() {
                        alert("Failed to turn the pin!");
                        console.log("Failed to turn off the pin!");
                    }
                });
            }
    });
});


                
