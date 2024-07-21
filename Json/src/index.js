"use script";

//Fetch the items from the JSON file
// 데이타가 있는 제이슨파일을 불러옴
function loadItems() {
    return fetch("data/data.json")
        .then((response) => response.json())
        .then((json) => json.items);
}

// Update the list with the given items
// .data-area의 하위에 아이템을 각각의 string(문자)상태로 만들어줌
function displayItems(items) {
    const container = document.querySelector(".data-area > ul");
    container.innerHTML = items.map((item) => createHTMLString(item)).join("");
}

// Create HTML list item from to given data item
// item은 .data-area 밑에 들어갈 반복되리 내용을 채워준다 ` 중복 컨텐츠내용 `;
// item.imge, item.type, item.gender, item.size는 제이슨 파일에 저장되어 있음
function createHTMLString(item) {
    return `
        <li class="item">
            <img src="${item.image}" alt="${item.type}" class="item-img">
            <p class="item-description">
                ${item.name}
            </p>
            <p class="item-description item-price">
                ${item.price}
            </p>
        </li>
        `;
}
// 버튼 클릭 이벤트
function onButtonClick(event, items) {
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;

    if (key == null || value == null) {
        return;
    }
    // 해당하지 않은 경우에는 빨리 끝냄

    const filtered = items.filter((item) => item[key] === value);
    console.log(filtered);
    displayItems(filtered);
}

function setEventListeners(items) {
    const logo = document.querySelector(".header");
    const buttons = document.querySelector(".btn-area");
    // 이벤트 위임 사용
    logo.addEventListener("click", () => displayItems(items));
    buttons.addEventListener("click", (event) => onButtonClick(event, items));
}
//main
loadItems()
    .then((items) => {
        displayItems(items);
        setEventListeners(items);
    })
    .catch(console.log);