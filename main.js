const description = async (link)=>{
    const fetchedData = fetch(link).then(response=>
        response.json()).then(myJson=> ({
            data:myJson
        })
        ).then(res =>{
            return res.data.description
        });
    return fetchedData
};


class repoConstr {
    constructor(id, repo){
        this.id = id;
        this.repo = repo;
        const apiurldata = await fetch(`https://api.github.com/repos/AvidDabbler/${repo}`);
        this.apiUrl = apiurldata;
        this.gitUrl = `https://github.com/AvidDabbler/${repo}`;
        this.thumbnail = `https://raw.githubusercontent.com/AvidDabbler/${repo}/master/thumbnail.PNG`;
        this.description = description(this.apiUrl);
    }
/*     description(){
        fetch(this.apiUrl).then(response=>
            response.json()).then(myJson=> ({
                data:myJson
            })
            ).then(res =>{
                const data = res.data.description;
            });
        return data;
    } */

}

const repos = [
    new repoConstr(1, `walterkjenkins`),
    new repoConstr(2, `censusViz`),
    new repoConstr(3, `backyard-chickens`),
    new repoConstr(4, `dlm-soundboard`)
];

const reposFunction = async () => {
    const setupArr = [
        [1, `walterkjenkins`],
        [2, `censusViz`],
        [3, `backyard-chickens`],
        [4, `dlm-soundboard`]
    ];
    setupArr.forEach
    function getData(){

    }
};

const test = new repoConstr(1, 'walterkjenkins');


//this works but runs before test.description() can run
console.log(test);




/* const renderPortfolio = (()=>{
    data.map(data.repo);
});

console.log(renderPortfolio(data)); */