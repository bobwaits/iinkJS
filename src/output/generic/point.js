(function (scope) {

    /**
     *
     * @constructor
     */
    function Point () {
        this.x = null;
        this.y = null;
    }

    /**
     *
     * @type {Object}
     */
    Point.prototype.__proto__ = new Object();

    /**
     *
     * @returns {number}
     */
    Point.prototype.getX = function () {
        return this.x;
    };

    /**
     *
     * @returns {number}
     */
    Point.prototype.getY = function () {
        return this.y;
    };

    // Export
    scope.Point = Point;
})(MyScript);