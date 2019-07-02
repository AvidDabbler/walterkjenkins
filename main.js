const i = 0;
class repoConstr {
    constructor(repo, i){
        this.id = i++;
        this.repo = repo;
        this.url = `https://api.github.com/repos/AvidDabbler/${repo}`;
        this.thumbnail = `https://raw.githubusercontent.com/AvidDabbler/${repo}/thumbnail.png`;
        this.about = this.url['description'];
        }
}

const repos = [
    new repoConstr(`walterkjenkins`),
    new repoConstr(`censusViz`),
    new repoConstr(`canihazchix`)
];

console.log(repos);
console.log(repos.length);

/* 
const repos = [
    "walterkjenkins",
    "censusViz",
    "canihazchix"
]; */

/* 
const datas = function (name){
    d3.json(`https://api.github.com/repos/AvidDabbler/${name}`).then(function(data){
        // console.log(data);
        // console.log(data['full_name']);
        // console.log(attGen(name));

        const attGen = function(name){  
            const urlGen = `https://api.github.com/repos/AvidDabbler/${name}`;
            const thumbnailGen = `https://raw.githubusercontent.com/AvidDabbler/${name}/thumbnail.png`;
            const aboutGen = datas['description']; // github api repo object
            
            return{
                url: urlGen,
                thumbnail: thumbnailGen,
                about: aboutGen
        
            }
        }
    }); */

// class Attributes{
//     constructor(name, url, thumbnail, about, tags){
//         this.name = name,
//         this.url = url,
//         this.thumbnail = thumbnail,
//         this.about = about,
//         this.tags = tags
//     }

// };

//}
console.log(datas.
    attGen('CensusViz'));




// create a separte object that extends the repoList
// url, fullName, profilePic, about, tags

// https://raw.githubusercontent.com/AvidDabbler/walterkjenkins/master/assets/images/ArcGIS-Pro.png



const yoyo = function(name){ 
  
    const makeUrl = `https://api.github.com/repos/AvidDabbler/${name}`
     console.log(makeUrl);
     
     const partone = fetch(makeUrl).then(response=> response.json());
       
       partone.then(myJson => console.log(JSON.stringify(myJson)));
   
   }
   
   yoyo("walterkjenkins");

