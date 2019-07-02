class repoConstr {
    constructor(repo){
        this.repo = repo;
        this.url = `https://api.github.com/repos/AvidDabbler/${repo}`;
        this.thumbnail = `https://raw.githubusercontent.com/AvidDabbler/${repo}/thumbnail.png`;
        this.about = (repo) => { 
            const makeUrl = `https://api.github.com/repos/AvidDabbler/${repo}`;   
            const partone = fetch(makeUrl).then(response=> response.json());
            partone.then(myJson =>JSON.stringify(myJson));
           }
    }
}

const repos = [
    new repoConstr(`walterkjenkins`),
    new repoConstr(`censusViz`),
    new repoConstr(`canihazchix`)
];