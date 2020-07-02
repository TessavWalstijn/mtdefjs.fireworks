class Particle {
    constructor(x, y, r, clr, explo) {
        this.r = r;
        this.clr = clr;
        this.lifespane = 255;
        this.pos = new Vector2(x, y);
        this.explo = explo;
        if (this.explo == "explo") {
            this.vel = new Vector2()
            this.vel.Random();
            this.vel.SetScalarMultiplication(Math.random() * 10);
        } else if (this.explo == "user")
            this.vel = new Vector2(0, 0)
        else {
            if (this.explo > 450)
                this.vel = new Vector2(0, Map(Math.random(), 0, 1, this.explo / 200 * -1, this.explo / 68 * -1));
            // in iframe
            else this.vel = new Vector2(0, Map(Math.random(), 0, 1, this.explo / 100 * -1, this.explo / 50 * -1));
        }
        this.acc = new Vector2(0, 0);
    }

    Update() {
        if (this.explo == "explo") {
            this.vel.SetScalarMultiplication(0.85);
            this.lifespane -= 5;
        }
        this.vel.Add(this.acc);
        this.pos.Add(this.vel);
        this.acc.SetScalarMultiplication(0);
        this.lifespane -= 3;
    }

    AddForce(force) {
        this.acc.Add(force);
    }

    Draw(cvs) {
        cvs.ctx.fillStyle = "rgba(" + this.clr[0] + ", " + this.clr[1] + ", " + this.clr[2] + ", " + Map(this.lifespane, 0, 255, 0, 1) + ")";
        cvs.ctx.beginPath();
        cvs.ctx.arc(this.pos.x, this.pos.y, this.r, 0, 2 * Math.PI);
        cvs.ctx.closePath();
        cvs.ctx.fill();
    }
}