/* Put code for the task below */
document.addEventListener('DOMContentLoaded', () => {
    const navBar = document.querySelector('.nav');
    const button = document.createElement('li');
    button.innerHTML = `<a href="#">Click Me</a>`;
    button.addEventListener('click', () => {
        document.querySelector('.content p').textContent = 'I Clicked It!';
    });
    navBar.append(button);
});
// Source for this task - https://htmlcheatsheet.com/js/