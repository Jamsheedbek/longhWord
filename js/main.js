var userText = document.querySelector('#userText');
var btn = document.querySelector('btn');
function longWord(arr) {
    var newArr = arr.split(' ');
    for(var i=0; i<newArr.length; i++){
        var max=newArr[0];
        if(max.length < newArr[i].length){
            max=newArr[i];
        }
    }
    return max;
}
button.addEventListener('click', function(e) {
    if(userText.value == ''){
        alert('Siz hali hech nima kiritmadingiz')
    } else{
        var text = userText.value;
        document.querySelector('.display-1').textContent = 'Eng uzun so\'z - ' + '{ ' + longWord(text) + ' }';
        userText.value = '';
    }
})
