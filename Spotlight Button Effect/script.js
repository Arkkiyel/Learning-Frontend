// const button = document.querySelector('.btn-senter');
// document.addEventListener('mousemove', (e) => {
//     const rect = button.getBoundingClientRect();
//     const x = e.clientX - rect.left; 
//     const y = e.clientY - rect.top;
//     button.style.setProperty('--x', x + 'px');
//     button.style.setProperty('--y', y + 'px');
// });
const teksElement = document.querySelector('.text-light');
document.addEventListener('mousemove', (e) =>{
    const rect = teksElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    teksElement.style.setProperty('--x', x+ 'px');
    teksElement.style.setProperty('--y', y+ 'px');
});
function showHola(){
    alert("Yay :3");
}

