// querySelectorAll creates a node list of all the selected elements
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        //removeActiveClasses();
        //panel.classList.add('active')
        
        //my own addition to the project; I add and remove active even ones that have already have active
        panel.classList.toggle('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}