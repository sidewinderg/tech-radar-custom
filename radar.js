function init(h, w) {
    d3.select('#title').text(document.title);

    //Radar canvas and initial settings
    var radar = d3.select("body").append("svg")
        .attr("width", 1200)
        .attr("height", 1200);

    var outerArc = d3.arc()
        .innerRadius(1)
        .outerRadius(5)
        .startAngle(stAngle * Math.PI)
        .endAngle(endAngle * Math.PI);

    var stAngle = -0.5,
        endAngle = 0;

    function oA() {

        var angle = d3.arc()
            .innerRadius(0)
            .outerRadius(arcRadius)
            .startAngle(stAngle * Math.PI)
            .endAngle(endAngle * Math.PI);
        return angle();
    }

    function anglesInc() {
        stAngle += .5;
        endAngle += .5;
    }

    function theAttrs(quadrant) {
        return {
            d: function(d) {
                return oA();
            },
            class: function(d, i) {
                return "arc" + (stAngle + (.5));
            },
            stroke: function(d) {
                return d.color;
            },
            strokewidth: 1,
            fill: function(d) {
                return d.color;
            },
            transform: function(d) {

                var xFactor = 0,
                    yFactor = 0;
                yFactor = -15 * Math.sign(Math.sin(quadrant * .5 * Math.PI));
                xFactor = -15 * Math.sign(Math.cos(quadrant * .5 * Math.PI));
                return "translate(" + ((w / 2) + (xFactor)) + "," + ((h / 2) + (yFactor)) + ") scale(" + d.r + ")";
            }
        }
    };

    // Arc Construction - loops through the arcs data structure and get the appropriate number of rings
    var quad = []

    for (i = 1; i < 5; i++) {
        quad[i] = radar.selectAll("path")
            .data(radar_arcs.arcs)
            .enter();
    }

    for (i = 1; i < 5; i++) {
        quad[i].append("path")
            .attrs(theAttrs(i));
        anglesInc();
    }

    //Add SVG Text Element Attributes
    var textLabels = radar.selectAll("text")
        .data(radar_arcs.arcs)
        .enter();

        textLabels
        .append("text")
        .attr("x", function(d,i) {
            return (w/2)-(arcRadius/2)+(arcRadius*d.r);
        })
        .attr("y", function(d) {
            return h/2+5;
        })
        .text(function(d) {
            return d.name;
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "12px")
        .attr("fill", "black");

        textLabels
        .append("text")
        .attr("x", function(d,i) {
            return (w/2)+(arcRadius/4)-(arcRadius*d.r);
        })
        .attr("y", function(d) {
            return h/2+5;
        })
        .text(function(d) {
            return d.name;
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "12px")
        .attr("fill", "black");



    //Quadrant Ledgends
    var radar_quadrant_ctr = 1;
    var quadrantFontSize = 18;
    var headingFontSize = 14;
    var stageHeadingCount = 0;
    var lastRadius = 0;
    var lastQuadrant = '';
    var spacer = 6;
    var fontSize = 10;
    var total_index = 1;
};
