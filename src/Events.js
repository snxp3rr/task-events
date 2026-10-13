export function createButton() {
  const btn = document.createElement('button');
  btn.textContent = 'Удали меня';
  
  
  btn.addEventListener('click', () => {
    btn.remove();
  });
  
  document.body.appendChild(btn);
}

export function createArrList(arr) {
  const ul = document.createElement('ul');
  
  arr.forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    
    li.addEventListener('mouseover', () => {
      li.setAttribute('title', li.textContent);
    });
    
    ul.appendChild(li);
  });
  
  document.body.appendChild(ul);
}


export function createLink() {
  const link = document.createElement('a');
  link.href = 'https://tensor.ru/';
  link.textContent = 'tensor';
  
  let isFirstClick = true;
  
  link.addEventListener('click', (e) => {
    if (isFirstClick) {
      e.preventDefault(); // Отменяем переход по ссылке
      link.textContent += ` ${link.href}`;
      isFirstClick = false;
    }
  });
  
  document.body.appendChild(link);
}


export function createList() {
  // Создаем список и первый элемент
  const ul = document.createElement('ul');
  const initialLi = document.createElement('li');
  initialLi.textContent = 'Пункт';
  ul.appendChild(initialLi);
  
  const btn = document.createElement('button');
  btn.textContent = 'Добавить пункт';
  
  document.body.appendChild(ul);
  document.body.appendChild(btn);
  
  ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      e.target.textContent += '!';
    }
  });
  
  btn.addEventListener('click', () => {
    const newLi = document.createElement('li');
    newLi.textContent = 'Пункт';
    ul.appendChild(newLi);
  });
}
