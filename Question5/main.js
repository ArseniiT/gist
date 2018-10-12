
document.addEventListener("DOMContentLoaded", function(event) {

    const  files  = [
        ' /src/common/api.js ' ,
        ' /src/common/preferences.js ' ,
        ' /src/styles/main.css ' ,
        ' /src/styles/base/_base.scss ' ,
        ' /src/assets/apple-touch-icon-57.png ' , 
   ];

   const  exclude  = [
        ' / src / styles / ' ,
        ' /src/assets/apple-touch-icon-57.png ' , 
    ];

    
    //------- remove spaces ----------
    let fs = files.map((row) => {
        return row.replace(/\s/g,'');
    });

    let ex = exclude.map((row) => {
        return row.replace(/\s/g,'');
    });


    let result = fs
                    .map((row) => {
                            ex.map((row2) => {
                                if(row != null && row.includes(row2)) {
                                    row = null;
                                }
                            });
                            return row;            
                        })
                    .filter((row) => {
                            return row != null;
                        });


    console.log(result); 
    
    // with nested forEach() loop -------------------------------------------------
    /* 
    let fs = files;
    let ex = exclude;

    for (let i = 0; i < fs.length; i++) {
        (function() {
            let file = fs[i].replace(/\s/g,'');

            for (let j = 0; j < ex.length; j++) {
                excl = ex[j].replace(/\s/g,'');
                let indx = file.toLowerCase().indexOf(excl);
                if (indx == 0) {
                    delete fs[i];
                    return;
                }        
            }        
        })();
    }

    let filtered = fs.filter((el) => {
        return el != null;
      });

    console.log(filtered); */
    //----------------------------------------------------------------------------------

});