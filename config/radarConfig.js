//This is the title for your window tab, and your Radar
document.title = "Technology Radar Test";

var h = 900;
var w = 900;
var minSize = 100;
var maxSize = minSize ;
var boxHeight =60;
var boxWidth = 150;
var boxMargin = 3;
var arcRadius = 100;
var arcWidth = arcRadius*4;

//This is the concentic circles that want on your radar
var radar_arcs = {
    'arcs': [{
            'r': 4,
            'name': 'Hold',
            'color': '#eaeaea'
        }, {
            'r': 3.2,
            'name': 'Assess',
            'color': '#dadada'
        }, {
            'r': 2,
            'name': 'Trial',
            'color': '#cacaca'
        }, {
            'r': 1,
            'name': 'Adopt',
            'color': '#bababa'
        }
        // ,{'r':500,'name':'Possible Extra if you want it'}
    ]
};

var quadFig = [{
    "quadrant": "Techniques",
    "left": 20,
    "top": 10,
    "color": "#3db5be"
}, {
    "quadrant": "Tools",
    "left": 20,
    "top": 10 +boxHeight + boxMargin,
    "color": "#83ad78"
}, {
    "quadrant": "Platforms",
    "left": 20 +boxWidth + boxMargin,
    "top": 10 + boxHeight + boxMargin,
    "color": "#e88744"
}, {
    "quadrant": "Languages & Frameworks",
    "color": "#8d2145",
    "left": 20+ boxWidth + boxMargin,
    "top": 10
}];
