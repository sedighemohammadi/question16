/*
Look at editor.png, you should create a text editor similar to that.

- The first button removes the last letter when clicked.
- The second button deletes the entire text when clicked.
- The third button bolds the text when clicked.
- The fourth button talicizesi the text when clicked.
*/
const editor = document.getElementById('editor');
const removeLastButton = document.getElementById('removeLast');
const clearTextButton = document.getElementById('clearText');
const boldTextButton = document.getElementById('boldText');
const italicTextButton = document.getElementById('italicText');

removeLastButton.addEventListener('click', () => {
    const text = editor.innerText;
    editor.innerText = text.slice(0, -1);
});

clearTextButton.addEventListener('click', () => {
    editor.innerText = '';
});

boldTextButton.addEventListener('click', () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const span = document.createElement('span');
        span.style.fontWeight = 'bold';
        selection.getRangeAt(0).surroundContents(span);
    }
});

italicTextButton.addEventListener('click', () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const span = document.createElement('span');
        span.style.fontStyle = 'italic';
        selection.getRangeAt(0).surroundContents(span);
    }
});
