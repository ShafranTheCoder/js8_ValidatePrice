'use strict';

function showList(list) {

    let newArray = list.map(function(element) {

        let listNode = document.getElementById('list');
        let liNode = document.createElement('LI');
        let textNode = document.createTextNode(element);
        liNode.appendChild(textNode);
        listNode.appendChild(liNode);
        return element;
    });
    console.log(newArray);
    let i = 10;
    let timerId = setInterval(function() {
        document.getElementById("timer").innerText = i;
        if (i == 0) clearInterval(timerId);

        i--;
    }, 1000);
    newArray = [];
}

showList(['hello', 'world', {name: "Dima", sName: "Bog"}, 'Kiev', 'Kharkiv', 'Odessa', 'Lviv']);

