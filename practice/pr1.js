// const form1 = document.form1;
// const header1 = form1.querySelector('#header');

// const input1 = form1[0];
// const input2 = document.getElementById('form2-input1');

// const changeValue = (element1, element2) => {
//     element2.value = element1.value;
// }

// changeValue(input1, input2);

// const button = document.querySelector('.button');

// const foo = (element) => {
//     element.classList.toggle('active');
// }

// foo(button);

const messages = new Array(10000).fill(0).map((element, index) => index);
const element = 'container';

const foo = (elementId) => {
    const container = document.getElementById(elementId);
    console.time();
    messages.forEach((item) => {
        const newElement = document.createElement('div');
        newElement.textContent = item;
        container.append(newElement);
    });
    console.timeEnd();
}


const foo2 = (elementId) => {
    console.time();
    const fragment = new DocumentFragment(); 
    const container = document.getElementById(elementId);
    
    messages.forEach((item) => {
        const newElement = document.createElement('div');
        newElement.textContent = item;
        fragment.append(newElement);
    });

    container.append(fragment);

    console.timeEnd();
}

const foo3 = (elementId) => {
    console.time();
    let str = '';
    const container = document.getElementById(elementId);
    
    messages.forEach((item) => {
        str += `<div class="active">${item}</div>`;
    });

    container.innerHTML = str;

    console.timeEnd();
}


// foo(element);
// foo2(element);
// foo3(element);