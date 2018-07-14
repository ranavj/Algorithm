// swap function helper
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

var unsort = [5,8,1,2,6,9,10,45,5];
	function sortArray(n){
		let count = 0
		// counter for first array element
		for(var i = 0; i< n.length; i++){
			count++;
			// second loop for compare first to second element
			for(var j = count; j< n.length; j++) {	
				// always compare first element to all next elements 		
        // sort decending order use (n[i] < n[j])
				if(n[i] > n[j]) swap(n, i, j);				
			}			
		}
		return n;	
		
	}
