var num = 0;

function onClickButton_back() {
    window.location.href = 'index.html';
}

function onClickButton_y() {
    window.location.href = 'index_2.html';
}

function onMouseOver() {
    var ans
    if(num == 0){
        ans = confirm('Ты совсем уже ебанулся?')
        if(ans) {
            alert('Ну ладно... '+ '😐')
            window.location.href = 'index_3.html';
            num++
        }
        else {
            alert('Тогда даже не думай нажимать на эту кнопку! ' + '😠')
        }
        num++;
    }
    // console.log(num)
    // console.log(ans)
}

function onClickButton_n() {
    if(num == 2){
    window.location.href = 'index_3.html';
    }
}
function proverka() {
if (localStorage.getItem('visitCount')) {
    var count = parseInt(localStorage.getItem('visitCount')) + 1;
    localStorage.setItem('visitCount', count);
} else {
    localStorage.setItem('visitCount', 1);
}

var visitCount = localStorage.getItem('visitCount');
document.getElementById('counter').innerHTML = 'Людей, сделавших правельный выбор ' + visitCount;
}
