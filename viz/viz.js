
const user = `AvidDabbler`; /* ENTER IN GITHUB USERNAME */
const split = ` || `;/*  DEFAULT SEPARATOR */
const finalArr= [];


// ! FETCHING AND BUILDING GITHUB DATA OBJECTS

const getData = async(i, repo, usr = user, splt = split)=>{
    const gitLink = `https://api.github.com/repos/${usr}/${repo}`;
    const fetchedData = fetch(gitLink)
        .then(response=> response.json())
        .then(myJson=> ({data:myJson}))
        .then(res =>{return res.data.description});
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
    const particData = await statData;


    return {
            id: i,
            repo: repo,
            gitUrl: `https://github.com/${usr}/${repo}`,
            thumbnail: `https://raw.githubusercontent.com/${usr}/${repo}/master/thumbnail.png`,
            homepage: `https://${usr}.github.io/${repo}/`,
            apiUrl: gitLink,
            title: await formTitle,
            descr: await description,
            tech: await technology,
            stats: await particData
            }
        };


// * DEFINED REPOS TO DISPLAY
const setupArr = [
    [`backyard-chickens`],
    [`CensusViz`],
    [`dlm-soundboard`],

];


// * CALLS ALL OF THE FUNCTIONS AND PUSHES INTO finalArr
const reposFunction = async () => { 
    for(let i = 0; i < setupArr.length; i++){
        let el = setupArr[i];
        const getDataObj = await getData(i, el[0], el[1], el[2]);/* el 2 and 3 are optional */
        finalArr.push(getDataObj);
    };
};


reposFunction();

console.log(finalArr);



//todo: navigate to commit data
//todo: pair repo with commit data
//todo: build bar chart

