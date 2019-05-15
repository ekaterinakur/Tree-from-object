const container = document.getElementById('container');
const data = {
    "Рыбы": {
      "Форель": {},
      "Щука": {}
    },

    "Деревья": {
      "Хвойные": {
        "Лиственница": {},
        "Ель": {}
      },

      "Цветковые": {
        "Берёза": {},
        "Тополь": {}
      }

    }
  };

function createTreeDom(obj) {
  if (Object.keys(obj).length === 0) return;

  const ul = document.createElement('ul');

  for (let key in obj) {
    const li = document.createElement('li');
    li.innerHTML = key;

    let childrenUl = createTreeDom(obj[key]);

    if (childrenUl) {
        li.appendChild(childrenUl);
    }

    ul.appendChild(li);
  }

  return ul;
}

function createTree(container, obj) {
  container.appendChild(createTreeDom(obj));
}

createTree(container, data);
