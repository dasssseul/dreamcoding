

function loadItems(){
    // loadItems는 json 파일을 받아오고
    return fetch('data/data.json')
    // 받아온 파일이 성공적이면 json으로 변환하고
    .then(response => response.json())
    // json안에 있는 items를 리턴한다
    .then(json => json.items);
}

function displayItems(items) {
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

function createHTMLString(item){
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item_thumbnail" />
        <span class="item_description">${item.gender}, ${item.size}</span>
    </li>
    `;

}

// main
loadItems()
    .then(items => {
        displayItems(items);
        setEventListners(items)

    })
    .catch(console.log)

