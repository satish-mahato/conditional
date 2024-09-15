function pattern(n){
    for (let row=1;row<=n;row+=1){
        let str="";
        let space=n-row;
        for( let j=1;j<=space;j+=1){
            str+=" ";
        }
        let stars=row
            for (let col=1; col<=stars;col+=1){
                str+="*";
                
            }
            console.log(str);
        }
    }
    

pattern(8)