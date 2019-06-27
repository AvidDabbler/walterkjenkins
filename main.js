const repos = [
    "walterkjenkins",
    "censusViz",
    "canihazchix"
];


const datas = function (name){
    d3.json(`https://api.github.com/repos/AvidDabbler/${name}`).then(function(name){
        const urlGen = `https://api.github.com/repos/AvidDabbler/${name}`;
        const thumbnailGen = `https://raw.githubusercontent.com/AvidDabbler/${name}/thumbnail.PNG`;
        const aboutGen = datas['description']; // github api repo object
        
        return{
            url: urlGen,
            thumbnail: thumbnailGen,
            about: aboutGen,
    
        }

        // console.log(data);
        // console.log(data['full_name']);
        // console.log(attGen(name));
        })
  
    }

// class Attributes{
//     constructor(name, url, thumbnail, about, tags){
//         this.name = name,
//         this.url = url,
//         this.thumbnail = thumbnail,
//         this.about = about,
//         this.tags = tags
//     }

// };


console.log(datas('CensusViz')('CensusViz'));




// create a separte object that extends the repoList
// url, fullName, profilePic, about, tags

// https://raw.githubusercontent.com/AvidDabbler/walterkjenkins/master/assets/images/ArcGIS-Pro.png



// const data = d3.json(`https://api.github.com/repos/AvidDabbler/${name}`).then(function(data){
//     console.log(data);
//     console.log(data['full_name']);

// });

