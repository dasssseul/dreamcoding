
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
    // 각각에 해당하는 아이템들을 HTML li 태그로 이루어진 배열로 변환
    // join : 문자열의 배열을 한 가지의 문자열로 병합
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

// li 태그로 변환해주는 함수
function createHTMLString(item){
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item_thumbnail" />
        <span class="item_description">${item.gender}, ${item.size}</span>
    </li>
    `;

}

// 클릭 이벤트 발생 시 filter 처리 
function onButtonClick(event, items){
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;
    if (key == null || value == null){
        return;
    }
    displayItems(items.filter(item => item[key] === value));
}

function setEventListners(items){
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons');
    // 로고가 클릭되면 모든 아이템이 보이도록 이벤트 설정
    logo.addEventListener('click', () => {displayItems(items)});
    buttons.addEventListener('click', event => onButtonClick(event, items));
}

// main
loadItems()
    .then(items => {
        displayItems(items);
        setEventListners(items)

    })
    .catch(console.log)

