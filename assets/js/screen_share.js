/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */

if(!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia){
    alert("Screen sharing not supported in this browser");
}else{
    $("#start-screen-share").bind("click", startScreenShare);
}
function startScreenShare(){
    console.log("Start Screen Share clicked");
    navigator.mediaDevices.getDisplayMedia({video:true})
            .then((stream)=>{
                $("#screen_sharer").prop("srcObject", stream);
                $("#start-screen-share").attr("disabled", true);
            })
            .catch((error)=>{
                console.error("Error while tryingt to screen share", error);
            });
}

