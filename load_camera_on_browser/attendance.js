var camera_btn = document.querySelector("#start-camera")
var video = document.querySelector("#video")
var click_btn = document.querySelector("#click-photo")
var canvas = document.querySelector("#canvas")

camera_btn.addEventListener("click", async function(){
    var stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
    })
    video.srcObject = stream
    video.style.display = "block";
    canvas.style.display = "none";
})

click_btn.addEventListener("click", function(){
    canvas.getContext("2d").drawImage(video, 0 , 0, canvas.width, canvas.height)
    var img_data_url = canvas.toDataURL("image/jpeg");
    canvas.style.display = "block";
    video.style.display = "none";
})
