function upperPattern(n){
    for (let row=1; row<=n;row++)
        {let str=""
    let space=n-row;
    for(let j=1; j<=space;j+=1)
        str+=" ";

        let stars= 2 * row-1;
        for (let col=1;col<=stars;col+=1){
            str+="*";}
            console.log(str);
        }}
    function lowerPattern(n){
        for (let row=1; row<=n-1;row++){
            let str=""
            let space=row;
            for(let j=1; j<=space;j+=1)
                str+=" ";
                let stars=2*(n-row)-1;
                for (let col=1;col<=stars;col+=1)
                    str+="*";
                    console.log(str);
                }
            }
        function pattern(n){
            upperPattern(n);
            lowerPattern(n);
        }
         pattern (8)   
        