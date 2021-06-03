let currentArr = [];

function cardArray(card) {
    currentArr.push(card);
    document.getElementById('count').innerHTML = currentArr
    countCards(currentArr);
}

function countCards(arr){
    let count = 0;
    for (var i = 0; i < arr.length; i++){
        let cards = arr[i];

       if(cards === 'a' || cards === 'k' || cards === 'q' || cards === 'j' || cards === '10'){
           count -= 1
       }
        else if(cards === '2' || cards === '3' || cards == '4' || cards === '5'|| cards === '6' ){
            count++
        }
       document.getElementById('count').innerHTML = count;
    }
}



let resetArr = () => {
    currentArr = []
    document.getElementById('count').innerHTML = currentArr
}

