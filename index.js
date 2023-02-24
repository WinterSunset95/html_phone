let body = document.querySelector('body')
let context = document.getElementById('context')

context.addEventListener('blur', event => {
    context.style.display = 'none'
})

document.addEventListener('contextmenu', event => {
    let left = event.pageX
    let top = event.pageY
    event.preventDefault()
    context.style.display = 'flex'
    context.style.left = left + 'px'
    context.style.top = top + 'px'
});


const setDate = () => {
    const time = new Date()
    const seconds = time.getSeconds()
    const minutes = time.getMinutes()
    let hours = time.getHours()
    hours = hours > 12 ? hours - 12 : hours 
    const am_pm = hours > 12 ? "PM" : "AM"
    const time_item = document.getElementById('time')
    time_item.innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + am_pm

    const date = time.getDate()
    const month = time.getMonth()
    const year = time.getFullYear()
    const date_item = document.getElementById('date')
    date_item.innerHTML = date + '/' + month + '/' + year
}
setInterval(setDate, 1000)