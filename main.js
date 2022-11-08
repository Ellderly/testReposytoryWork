let section = document.querySelectorAll('select');

    section.forEach(e => {

        let arr = Array.from(e)
        let newDiv = document.createElement('div')
        newDiv.className = 'select'
        let select__content = document.createElement('div')
        select__content.className = '__select__content'


        let arrTitle = []

        let result = [];
        for(let i = 0; i < arr.length; i++){
            let div = document.createElement('div')
            div.setAttribute("class", "__select__label")
            div.append(arr[i].textContent);
            result.push(div);

            arrTitle.push(arr[i].textContent)
        }
        result.splice(0, 1)

        select__content.append(...result)
        newDiv.innerHTML = `
                    <div class="__select" data-state="">
                    <div class="__select__title form-item" data-default="Option 0">${arrTitle.splice(0,1)}</div>
                    <div class="__select__content">
                    ${select__content.innerHTML}
                    </div>
                </div>
`
        e.insertAdjacentElement("afterend", newDiv)
        e.remove()

    })
const selectSingle = document.querySelectorAll('.__select');
const selectSingle_labels = document.querySelectorAll('.__select__label');


selectSingle.forEach(e => {
    e.addEventListener('click', even => {
        if ('active' === even.currentTarget.getAttribute('data-state')) {
            even.currentTarget.setAttribute('data-state', '');
        } else {
            even.currentTarget.setAttribute('data-state', 'active');
        }
    })
})


selectSingle_labels.forEach((e) => {
    e.addEventListener('click', (even) => {
        even.currentTarget.parentElement.parentElement.firstElementChild.textContent = even.target.textContent
    })
})

