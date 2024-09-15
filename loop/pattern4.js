function pattern(n) { 
    for (let row = 1; row <= n; row += 1) {
        let str = "";  // Initialize string for each row
        let space = n - row;  // Calculate spaces to add
        
        // Add spaces
        for (let j = 0; j < space; j++) {
            str += " ";  // Append spaces to str
        }
        
        // Calculate stars
        let stars = 2 * row - 1;
        
        // Add stars
        for (let col = 1; col <= stars; col++) {
            str += "*";  // Append stars to str
        }
        
        // Print the row after spaces and stars
        console.log(str);
    }
}

pattern(8);