
//! DEFINING DEFAULTS


const user = `AvidDabbler`; /* ENTER IN GITHUB USERNAME */
const split = ` || `;/*  DEFAULT SEPARATOR */
const finalArr = [];


// ! FETCHING AND BUILDING GITHUB DATA OBJECTS

const getData = async (i, repo, usr = user, splt = split) => {
    const gitLink = `https://api.github.com/repos/${usr}/${repo}`;
    const fetchedData = fetch(gitLink)
        .then(response => response.json())
        .then(myJson => ({ data: myJson }))
        .then(res => { return res.data.description });
    const object = await fetchedData;
    const objArr = object.split(splt);

    const statLink = `https://api.github.com/repos/${user}/${repo}/stats/participation`;
    const statData = fetch(statLink).then(response =>
        response.json()).then(myJson => ({
            data: myJson
        })
        ).then(async res => {
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
    for (let i = 0; i < setupArr.length; i++) {
        let el = setupArr[i];
        const getDataObj = await getData(i, el[0], el[1], el[2]);/* el 2 and 3 are optional */
        finalArr.push(getDataObj);
    };
};



// * GITHUB DATA RENDERING
const portfGen = async () => {
    await reposFunction();
    const data = finalArr;
    for (let i = 0; i < data.length; i++) {
        if (i % 2 == 0) {
            document.getElementById("portfolio-content").innerHTML +=
                `<div id="project-${i}" class="portfolio-container content">

                <div class="thumbnail"><a href="${data[i].homepage}" target="_blank">
                <img class="" src="${data[i].thumbnail}" alt="${data[i].title} application photo"></img></a></div> 
                <div class="paragraph">
                    <h2>${data[i].title}</h2>
                    <p>${data[i].descr}</p>
                </div>
            </div>`
        }
        else {
            document.getElementById("portfolio-content").innerHTML +=
                `<div id="project-${i}" class="portfolio-container content">
                <div class="paragraph">
                    <h2>${data[i].title}</h2>
                    <p>${data[i].descr}</p>
                </div>
                    <div class="thumbnail"><a href="${data[i].homepage}" target="_blank"><img class="" src="${data[i].thumbnail}" alt="${data[i].title} application photo"></img></a>
                </div>`
        }
    }
}

const dataViz = (data) => {
    const w = 800;
    const h = 450;
    const svg = d3.select('#d3')
        .append('svg')
        .attr('width', w)
        .attr('height', h);

    data.map(d=>{
        svg.selectAll('circle')
            .data(d)
            .enter()
            .append('circle')
            .attr('cx', (d,i)=>(i*30)+30)
            .attr('cy', d=> (h-30)-(d*10))
            .attr('r', 5)
    });
}

const buildSite = async () => {
    await portfGen();
    const data = await finalArr.map(x=>x.stats);
    console.log(data)
    dataViz(data);
}

buildSite();
console.log(finalArr);
