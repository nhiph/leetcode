// find the smallest number index in array
// swap position the smallest to the first index

function swap(array, idx1, idx2) {
    var temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
    return array;
};

function findMin(array) {
    var min = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] < min) min = array[i];
    }
    return min;
};

function selectionSort(array){
    for(let i = 0; i < array.length; i++){
        //Tìm kiếm phần tử bé nhất trong dãy chưa được sắp xếp 
        let minIndex = i;
        for(let j = i + 1; j < array.length; j++)
        {
                if(array[j] < array[minIndex])
                    minIndex = j;
        }
        
        //Đổi chỗ phần tử bé nhất với phần tử đầu tiên    
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
    return array;
}

const array = [5, 8, -34, -7, 2, -5, 4, -23];

console.log(selectionSort(array));