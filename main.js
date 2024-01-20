nose_x_position = 0;
nose_y_position = 0;
Left_eye_x_position = 0;
Left_eye_y_position = 0;
right_eye_x_position = 0;
right_eye_y_position = 0;
function preload() {
    left_eye = loadImage("EYE.png");
    right_eye = loadImage("EYE.png");
    clown_nose = loadImage("Clown_nose_large.webp");
    clown_hat = loadImage("Clown_hat.png")
    lips = loadImage("lips.png")
}
function setup() {
    canvas = createCanvas(300, 300)
    canvas.position(600, 100);
    Video = createCapture(VIDEO);
    Video.hide();
    Video.size(300, 300);
    poseNet = ml5.poseNet(Video, modelLoaded);
    poseNet.on("pose", gotResults);
}
function draw() {

    image(Video, 0, 0, 350, 350);
    // filter(INVERT);
    image(clown_nose, nose_x_position - 15, nose_y_position - 10, 80, 80);
    image(clown_hat, Left_eye_x_position - 50, Left_eye_y_position - 155, 130, 130);
    image(left_eye, Left_eye_x_position - 35, Left_eye_y_position, 40, 40);
    image(right_eye, right_eye_x_position + 40, right_eye_y_position, 40, 40);
    image(lips, nose_x_position - 15, nose_y_position + 20, 80, 80);


}
function modelLoaded() {
    console.log("Success");
}
function gotResults(results) {
    console.log(results);
    if (results.length > 1) {

        nose_x_position = results[0].pose.nose.x;
        nose_y_position = results[0].pose.nose.y;
        Left_eye_x_position = results[0].pose.leftEye.x;
        Left_eye_y_position = results[0].pose.leftEye.y;
        right_eye_x_position = results[0].pose.rightEye.x;
        right_eye_y_position = results[0].pose.rightEye.y;
        console.log(nose_x_position);
        console.log(nose_y_position);
        console.log(Left_eye_y_position);
        console.log(Left_eye_x_position);
        console.log(right_eye_y_position);
        console.log(right_eye_x_position);




    }
}

function snap() {
    save("Clown_nose.png")
}