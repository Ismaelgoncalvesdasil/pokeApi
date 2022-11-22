export const elements = {
    input: document.querySelector('.search'),
    result: document.querySelector('.resContainer')
}

export const clearInput = () => {
    elements.result.innerHTML = ""
}