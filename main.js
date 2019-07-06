const description = (link)=>{
    const fetchedData = fetch(link).then(response=>
        response.json()).then(myJson=> ({
            data: myJson,
        })
        ).then(res =>{
            return res.data.description
        })
    return fetchedData;
};


class repoConstr {
    constructor(repo){
        this.repo = repo;
        this.apiUrl = `https://api.github.com/repos/AvidDabbler/${repo}`;
        this.gitUrl = `https://github.com/AvidDabbler/${repo}`;
        this.thumbnail = `https://raw.githubusercontent.com/AvidDabbler/${repo}/master/thumbnail.PNG`;
        this.description = description(this.apiUrl); 
    }
}

const repos = [
    new repoConstr(`walterkjenkins`),
    new repoConstr(`censusViz`),
    new repoConstr(`canihazchix`),
    new repoConstr(`dlm-soundboard`)
];
    console.log(repos);