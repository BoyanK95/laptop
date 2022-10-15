window.addEventListener("load", solve);


function solve() {
    const recNameInput = document.getElementById('recipientName')
    const titleInput = document.getElementById('title')
    const messageInput = document.getElementById('message')
    const addBtn = document.getElementById('add')
    const resetBtn = document.getElementById('reset')
    const ulRootEl = document.getElementById('list')



    addBtn.addEventListener('click', addMail);
    resetBtn.addEventListener('click', reset)




    function reset(e) {
        e.preventDefault()
        if (!recNameInput.value || !titleInput.value || !messageInput.value) {
            return
        }
        let name = recNameInput.value
        let title = titleInput.value
        let msg = messageInput.value
    
        recNameInput.value = ''
        titleInput.value = ''
        messageInput.value = ''

    }

    function addMail(e) {
        e.preventDefault()
            if (!recNameInput.value || !titleInput.value || !messageInput.value) {
        return
    }
    let name = recNameInput.value
    let title = titleInput.value
    let msg = messageInput.value

    recNameInput.value = ''
    titleInput.value = ''
    messageInput.value = ''

        createList(name, title, msg)
    }

    function createList(name, title, msg) {
        let liContainerEl = document.createElement('li')
        let h4TitleEl = document.createElement('h4')
        let h4recNameEl = document.createElement('h4')
        let spanEl = document.createElement('span')
        let divContainer = document.createElement('div')
        divContainer.classList.add('list-action')
        
        let sendBtn = document.createElement('button');
        let deleteBtn = document.createElement('button');
        sendBtn.textContent = 'Send';
        deleteBtn.textContent = 'Delete';
        sendBtn.setAttribute('type','submit')
        deleteBtn.setAttribute('type','submit')
        sendBtn.setAttribute('id','send')
        deleteBtn.setAttribute('id','delete')
        

        h4TitleEl.textContent = `Title: ${title}`
        h4recNameEl.textContent = `Recipient Name: ${name}`
        spanEl.textContent = msg

        liContainerEl.appendChild(h4TitleEl)
        liContainerEl.appendChild(h4recNameEl)
        liContainerEl.appendChild(spanEl)
        liContainerEl.appendChild(divContainer)

        divContainer.appendChild(sendBtn)
        divContainer.appendChild(deleteBtn)

        ulRootEl.appendChild(liContainerEl)
    }
}
