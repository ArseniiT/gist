function binarySearch (arr,value){
  var low  = 0 , high = arr.length -1 ,mid ;      
  while (low <= high){
      mid = Math.floor((low+high)/2);     
      if(arr[mid]==value) return true ; 
      else if (arr[mid]<value) low = mid+1;
      else high = mid-1;          
  }
  return false ;
}

let a = [1, 2, 3, 6, 7, 8, 10, 100, 1000];                                

console.log(binarySearch(a, 1));
console.log(binarySearch(a, 4));
console.log(binarySearch(a, 5));
console.log(binarySearch(a, 10));
console.log(binarySearch(a, 105));