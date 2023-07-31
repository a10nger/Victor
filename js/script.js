var num = 0;

function onClickButton_back() {
    window.location.href = 'index.html';
}

function onClickButton_y() {
    window.location.href = 'index_2.html';
}

function onClickButton_n() {
    if(num > 0)
    window.location.href = 'index_3.html';
}

function onMouseOver() {
    var ans
    if(num == 0){
        ans = confirm('Ты совсем уже ебанулся?')
        if(ans) {
            alert('Ну ладно... '+ '😐')
        }
        else {
            alert('Тогда даже не думай нажимать на эту кнопку! ' + '😠')
        }
    }
    num++;
}