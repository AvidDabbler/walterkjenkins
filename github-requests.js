const data = d3.json(`https://api.github.com/repos/AvidDabbler/${name}`).then(function(data){
        console.log(data);
        console.log(data['full_name']);
        attGen("walterkjenkins");
        });