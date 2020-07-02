class Firework {
    constructor(cvs, exploClr, a, b) {
        if (b === undefined)
            this.p = new Particle(Math.random() * cvs.width, cvs.height, 2, a, Browser.height);
        else this.p = new Particle(a, b, 2, [0, 0, 0], "user");
        this.exploded = false;
        this.explosion = [];
        this.exploClr = exploClr;
        this.max = 100;
        this.done = false;
    }

    Explode() {
        for (let i = 0; i < this.max; i++) {
            let p = new Particle(this.p.pos.x, this.p.pos.y, 1, this.exploClr, "explo");
            this.explosion.push(p);
        }
    }

    Update() {
        if (this.exploded)
            for (let i = 0; i < this.max; i++) {
                this.explosion[i].AddForce(gravity);
                this.explosion[i].Update();
            }
        else {
            this.p.AddForce(gravity);
            this.p.Update();

            if (this.p.vel.y >= 0) {
                this.p.vel.SetScalarMultiplication(0);
                this.exploded = true;
                this.Explode();
            }
        }
    }

    Show(canvas) {
        if (this.exploded)
            for (let i = 0; i < this.max; i++) {
                if (this.explosion[i].lifespane > 0)
                    this.explosion[i].Draw(canvas);
                else this.done = true;
            }
        else this.p.Draw(canvas);
    }

    Done() {
        return this.done;
    }
}