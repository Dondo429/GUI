//using premade shapes in common directory
//spheres for the tire, wheel, and center spoke
//cylinders as spokes

var spheres = {
    //render each circle in front of eachother to appear as flat circles
   tire : {
        model : undefined,
        radius : 8,
        distance : 0,
        color : [.4, .4, .4, 1]
    },
    
    wheel : {
        model : undefined,
        radius : 5,
        distance : 10,
        color : [.1, .1, .1, 1]
    },



    center : {
        model : undefined,
        radius : 1.5,
        distance : 15,
        color : [.4, .4, .4, 1]
    },
};

//cylinders as spokes
var cylinders = {
    spoke1 : {
        model : undefined,
        radius : 0.5,
        distance : 5,
        color : [.4, .4, .4, 1]
        },

    spoke2 : {
        model : undefined,
         radius : 0.5,
         distance : 5,
         color : [.4, .4, .4, 1]
         },

     spoke3 : {
        model : undefined,
        radius : 0.5,
        distance : 5,
        color : [.4, .4, .4, 1]
        },

    spoke4 : {
        model : undefined,
        radius : 0.5,
        distance : 5,
        color : [.4, .4, .4, 1]
    }
};

//background image 
var img = backround.png;

var backgrounds = {
    bg1 = {
        model : undefined,
        distance : 15,
        source : img,
    },

    bg2 : {
        model : undefined,
        distance : 15,
        source : img,
    }
};
        
    
