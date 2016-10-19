function init(h, w) {
    d3.select('#title').text(document.title);

    //Radar canvas and initial settings
    var radar = d3.select("body").append("svg")
        .attr("width", w)
        .attr("height", h);

    //Construct quadrant boxes
    var techRects = radar.selectAll('body')
        .data(quadFig)
        .enter()
        .append('g');

        techRects.append('rect')
        .attr('x', function(d, key, value) {
            return d.left;
        })
        .attr('y', function(d, key, value) {
            return d.top;
        })
        .attr('height', boxHeight)
        .attr('width', boxWidth)
        .style('fill', function(d, key, value) {
            return d.color;
        })
        .style("stroke", function(d) {
            return d.color;
        });

    techRects
        .append('text')
        .text(function(d, key, value) {
            return d.quadrant;
        })
        .attr('x', function(d, key, value) {

            return d.left+((boxWidth/2));
        })
        .attr('y', function(d, key, value) {
            return d.top+(boxHeight/2);
        })
         .attr("text-anchor", "middle")
        .attr("font-family", "sans-serif")
        .attr("font-size", "12px")
        .attr("fill", "black");




    // Arc Construction - loops through the arcs data structure and get the appropriate number of rings
    var arcs = radar.selectAll("body")
        .data(radar_arcs.arcs)
        .enter()
        .append('circle')
        .attr('cx', w / 2)
        .attr('cy', h / 2)
        .attr('r', function(d, key, value) {
            return d.r;
        })

        .style('fill', function(d, key, value) {
            return d.color;
        })
        .style("stroke", function(d) {
            return d.color;
        });



    //.radius(function(d) {
    //    return d.r;
    //})
    //.strokeStyle("#ccc")
    //.anchor("top")
    //.add(pv.Label).text(function(d) {
    //    return d.name;
    //});

    //quadrant lines -- Horizontal
    var hLines = radar.append('line')
        .style("stroke", "white") // colour the line
        .style("stroke-width", 3) // adjust line width
        .attr("y1", h / 2) // y position of the first end of the line
        .attr("y2", h / 2) // y position of the second end of the line
        .attr("x1", (w / 2) - radar_arcs.arcs[0].r) // x position of the first end of the line
        .attr("x2", (w / 2) + radar_arcs.arcs[0].r); // x position of the second end of the line




    //quadrant lines -- vertical
    var vLines = radar.append('line')
        .style("stroke", "white") // colour the line
        .style("stroke-width", 3) // adjust line width
        .attr("x1", w / 2) // y position of the first end of the line
        .attr("x2", w / 2) // y position of the second end of the line
        .attr("y1", (h / 2) - radar_arcs.arcs[0].r) // y position of the first end of the line
        .attr("y2", (h / 2) + radar_arcs.arcs[0].r); // y position of the second end of the line


    // blips
    // var total_index=1;
    // for (var i = 0; i < radar_data.length; i++) {
    //     radar.add(pv.Dot)
    //     .def("active", false)
    //     .data(radar_data[i].items)
    //     .size( function(d) { return ( d.blipSize !== undefined ? d.blipSize : 70 ); })
    //     .left(function(d) { var x = polar_to_raster(d.pc.r, d.pc.t)[0];
    //                         //console.log("name:" + d.name + ", x:" + x);
    //                         return x;})
    //     .bottom(function(d) { var y = polar_to_raster(d.pc.r, d.pc.t)[1];
    //                           //console.log("name:" + d.name + ", y:" + y);
    //                           return y;})
    //     .title(function(d) { return d.name;})
    //     .cursor( function(d) { return ( d.url !== undefined ? "pointer" : "auto" ); })
    //     .event("click", function(d) { if ( d.url !== undefined ){self.location =  d.url}})
    //     .angle(Math.PI)  // 180 degrees in radians !
    //     .strokeStyle(radar_data[i].color)
    //     .fillStyle(radar_data[i].color)
    //     .shape(function(d) {return (d.movement === 't' ? "triangle" : "circle");})
    //     .anchor("center")
    //         .add(pv.Label)
    //         .text(function(d) {return total_index++;})
    //         .textBaseline("middle")
    //         .textStyle("white");
    // }


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
