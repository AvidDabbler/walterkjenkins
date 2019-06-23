const repoList = [
    "walterkjenkins",
    "censusViz",
    "canihazchix"
];

// create a separte object that extends the repoList
// url, fullName, profilePic, about, tags

// https://raw.githubusercontent.com/AvidDabbler/walterkjenkins/master/assets/images/ArcGIS-Pro.png

const repoAttr = ;


const data = d3.json("https://api.github.com/repos/AvidDabbler/walterkjenkins").then(function(data){
    console.log(data);
    console.log(data['full_name']);

});

