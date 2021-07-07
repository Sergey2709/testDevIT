var arr = ['Solnce', 'vishlo', 'iz', 'za', 'tuchi']; 

function recuseLog(arr) {
    if (arr.length > 0) {
        console.log(arr.shift());
        recuseLog(arr);
    }
} 
recuseLog(arr);
