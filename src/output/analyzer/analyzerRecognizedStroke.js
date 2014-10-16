(function (scope) {

    /**
     *
     * @constructor
     */
    function AnalyzerRecognizedStroke () {
        this.type = null;
        this.x = null;
        this.y = null;
    }

    /**
     *
     * @type {Object}
     */
    AnalyzerRecognizedStroke.prototype.__proto__ = new Object();

    /**
     *
     * @returns {string}
     */
    AnalyzerRecognizedStroke.prototype.getType = function () {
        return this.type;
    };

    /**
     *
     * @returns {Array}
     */
    AnalyzerRecognizedStroke.prototype.getX = function () {
        return this.x;
    };

    /**
     *
     * @returns {Array}
     */
    AnalyzerRecognizedStroke.prototype.getY = function () {
        return this.y;
    };

    // Export
    scope.AnalyzerRecognizedStroke = AnalyzerRecognizedStroke;
})(MyScript);