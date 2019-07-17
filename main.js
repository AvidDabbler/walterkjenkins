const user = `AvidDabbler`; /* ENTER IN GITHUB USERNAME */
const split = ` || `;

const getData = async(repo, usr = user, splt = split)=>{
    const gitLink = `https://api.github.com/repos/${usr}/${repo}`;
    const fetchedData = fetch(gitLink).then( response=> 
        response.json()).then(myJson=> ({
            data:myJson
        })
        ).then(async res =>{
            return res.data.description
        });
    const object = await fetchedData;
    const objArr = object.split(splt);

    const statLink = `https://api.github.com/repos/${user}/${repo}/stats/participation`;
    const statData = fetch(statLink).then( response=> 
        response.json()).then(myJson=> ({
            data:myJson
        })
        ).then(async res =>{
            return res.data.all
        });

    /* FINAL PRODUCTS */
    const formTitle = objArr[0];
    const description = objArr[1];
    const technology = objArr[2].split(', ');
    const count = finalArr.length;
    const particData = await statData;


    return {
            id: count,
            repo: repo,
            gitUrl: `https://github.com/${usr}/${repo}`,
            thumbnail: `https://raw.githubusercontent.com/${usr}/${repo}/master/thumbnail.PNG`,
            homepage: `https://${usr}.github.io/${repo}/`,
            apiUrl: gitLink,
            title: await formTitle,
            descr: await description,
            tech: await technology,
            stats: await particData
            }
        };

/* DEFINED REPOS TO DISPLAY */
const setupArr = [
    [`censusViz`],
    [`backyard-chickens`],
    [`dlm-soundboard`]
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

