class repoConstr {
    constructor(repo){
        this.repo = repo;
        this.apiUrl = `https://api.github.com/repos/AvidDabbler/${repo}`;
        this.gitUrl = `https://github.com/AvidDabbler/${repo}`;
        this.thumbnail = `https://raw.githubusercontent.com/AvidDabbler/${repo}/thumbnail.PNG`;
        this.about = () => { 
            const partone = fetch(u).then(response=> response.json());
            partone(this.url);
            const data = partone.then(myJson =>JSON.stringify(myJson));
            return data;
           }
    }
}

const repos = [
    new repoConstr(`walterkjenkins`),
    new repoConstr(`censusViz`),
    new repoConstr(`canihazchix`)
];

console.log(repos);


const getdata = function() { 
    const partone = fetch(`https://api.github.com/repos/AvidDabbler/walterkjenkins`).then(response=> response.json());
    partone.then(myJson =>JSON.stringify(myJson));
}

console.log(getdata);