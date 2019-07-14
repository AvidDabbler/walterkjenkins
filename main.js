const user = `AvidDabbler`;

const getData = async(id, repo, usr = user)=>{
    const link = `https://api.github.com/repos/${usr}/${repo}`;
    const fetchedData = fetch(link).then( response=> 
        response.json()).then(myJson=> ({
            data:myJson
        })
        ).then(async res =>{
            return res.data.description
        });
    const object = await fetchedData;
    const objArr = object.split(' || ');
    const description = objArr[0];
    const technology = objArr[1].split(', ');

    return {
            id: id,
            repo: repo,
            gitUrl: `https://github.com/${usr}/${repo}`,
            thumbnail: `https://raw.githubusercontent.com/${usr}/${repo}/master/thumbnail.PNG`,
            descr: await description,
            homepage: `https://${usr}.github.io/${repo}/`,
            tech: await technology
            }
        };

/* DEFINED REPOS TO DISPLAY */
const setupArr = [
    [0, `censusViz`],
    [1, `backyard-chickens`],
    [2, `dlm-soundboard`]
];
const finalArr= [];

const reposFunction = () => {

    setupArr.forEach(async(el)=>{
        const getDataObj = await getData(el[0], el[1]);
        finalArr.push(getDataObj);
    });
    return finalArr;
};

reposFunction();
console.log(finalArr)

