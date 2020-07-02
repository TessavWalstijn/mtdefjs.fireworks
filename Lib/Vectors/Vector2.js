class Vector2 {
    /**
     * Set the x and y for the Vector2.
     * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
     * @param {number} x Set the x property
     * @param {number} y Set the y property
     */
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    /**
     * Calculates the magnitude of the Vector2.
     * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
     * @return {number}
     */
    Magnitude() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    }

    /**
     * Calculates the root magnitude of the Vectior2.
     * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
     * @return {number}
     */
    RootMag() {
        return (this.x * this.x) + (this.y * this.y);
    }

    /**
     * Returns the Angle of the Vector2.
     * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
     * @return {number}
     */
    Angle() {
        return Math.atan2(this.y, this.x);
    }

    /**
     * Gives the ScalarMultiplication of this Vector2.
     * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
     * @param {number} scalar Give the scalar.
     * @return {object}
     */
    GetScalarMultiplication(scalar) {
        let ans = new Vector2(scalar * this.x, scalar * this.y);
        return ans;
    }

    /**
     * Set the ScalarMultiplication of this Vector2.
     * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
     * @param {number} scalar Give the scalar.
     */
    SetScalarMultiplication(scalar) {
        this.x *= scalar;
        this.y *= scalar;
    }

    /**
     * Add 2 Vector2s.
     * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
     * @param {object} vector2 Give a vector2.
     * @return {object}
     */
    Add(vector2) {
        this.x += vector2.x;
        this.y += vector2.y;
    }

    /**
     * Substract 2 vector2s.
     * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
     * @param {object} vector2 Give a vector2.
     * @return {object}
     */
    Substract(vector2) {
        this.x -= vector2.x;
        this.y -= vector2.y;
    }

    /**
     * Normalize the vector2.
     * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
     * @return {object}
     */
    Normalize() {
        let magnitude = this.Magnitude();
        this.x /= magnitude;
        this.y /= magnitude;
    }

    /**
     * Root normalize the vector2.
     * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
     * @return {object}
     */
    RootNorm() {
        let rootmag = this.RootMag();
        this.x /= rootmag;
        this.y /= rootmag;
    }

    /**
     * Creates random vector2.
     * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
     */
    Random() {
        this.x = Math.random() * 2 - 1;
        this.y = Math.random() * 2 - 1;
        let magnitude = this.Magnitude();
        this.x /= magnitude;
        this.y /= magnitude;
    }
}