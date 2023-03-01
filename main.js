//https://teachablemachine.withgoogle.com/models/hQ71FQghM/
WebKitCSSMatrix.attach('#camera');

camera = document.getElementById("camera");

Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
});

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}
console.log('m15 version:', m15.version);

classifier = m15.imageClassifier('https://teachablemachine.withgoogle.com/models/VK6X7UYHV/model.json',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}