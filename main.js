const getData = async(id, repo)=>{
    const link = `https://api.github.com/repos/AvidDabbler/${repo}`;
    const fetchedData = fetch(link).then(response=>
        response.json()).then(myJson=> ({
            data:myJson
        })
        ).then(res =>{
            return res.data.description
        });
    return {
            id: id,
            repo: repo,
            gitUrl: `https://github.com/AvidDabbler/${repo}`,
            thumbnail: `https://raw.githubusercontent.com/AvidDabbler/${repo}/master/thumbnail.PNG`,
            description: await fetchedData
            }
        };



/* DEFINED REPOS TO DISPLAY */
const setupArr = [
    [0, `censusViz`],
    [1, `backyard-chickens`],
    [2, `dlm-soundboard`]
];

const reposFunction = () => {
    setupArr.forEach(async(el)=>{
        const getDataObj = await getData(el[1], el[1]);
        console.log(getDataObj);
    });

};

reposFunction();

