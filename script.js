var canvas, gravity, fireworks = [],
    User = {};

//controles if the mouse is moving
window.addEventListener("mousemove", (e) => {
    User.x = e.clientX;
    User.y = e.clientY;
}, false);

function Click() {
    fireworks.push(new Firework(canvas, [Math.round(Math.random() * 155 + 100), Math.round(Math.random() * 155 + 100), Math.round(Math.random() * 155 + 100)], User.x, User.y));
}

function Start() {
    canvas = NewCanvas(GetId("canvas"), true);
    //canvas.setAttribute('style', "margin-left: auto; margin-right: auto; display: block;");
    gravity = new Vector2(0, 0.1);
}

function Update() {
    UpdateCvs(canvas);
    canvas.ctx.fillStyle = "#000008";
    canvas.ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (Math.random() < 0.05) fireworks.push(new Firework(canvas, [Math.round(Math.random() * 155 + 100), Math.round(Math.random() * 155 + 100), Math.round(Math.random() * 155 + 100)], [255, 150, 10]));

    let max = fireworks.length - 1;
    for (let i = max; i >= 0; i--) {
        fireworks[i].Update();
        fireworks[i].Show(canvas);
        if (fireworks[i].Done()) {
            fireworks.splice(i, 1);
        }
    }
}

Behaviour.Awake();