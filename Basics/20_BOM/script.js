/* Window or Browser Object Modle */
console.log(window)

// 1. Location 
console.log(location)
console.log(`Your are currently in 
    Protocal ${window.location.protocol}
    Origin -> ${window.location.origin}
    Port -> ${window.location.port}
    Path: ${window.location.pathname}
    Full Url: ${window.location.href}`) // retrive current url
// window.location.href = "http://127.0.0.1:5500/Basics/20_BOM/index.html"  // Navigate to a new URl
// window.location.reload() // reload the current page
// window.location.assign('https://www.another-example.com') // redirect to a different domain
// window.location.replace('https://www.example.com') // redirect to a different domain

// 2. History
console.log(history)
// history.back() // navigates backward in history
// history.forward() // navigates forward in history
// history.go(-1); // Goes back one page
// history.go(1);  // Goes forward one page
// history.state // Accessing the Current State

// 3. inner Height
console.log(innerHeight) // browser height

// 4. inner Width
console.log(innerWidth)

// 5. Open()
// window.open() // Opens new Tab
//window.open('https://google.com', 'Open Google')
console.log(window.name)

// 6. Close()
// window.close() 

// 7. resizeBy()
// window.open('https://google.com', 'Open Google', 'resizeable')
// window.resizeBy(600, 1000)

// 8. resizeTo()
// window.open('https://google.com', 'Open Google', 'resizeable')
// window.resizeTo(600, 1000)

// 8. moveBy()
// window.open('https://google.com', 'Open Google', 'resizeable')
// window.moveBy(600, 1000)

// 9. moveTo()
// window.open('https://google.com', 'Open Google', 'resizeable')
// window.moveTo(600, 1000)

// 9. scrollBy()
// window.open('https://google.com', 'Open Google', 'resizeable')
// window.scrollBy(0, 1000)

// 9. scrollTo()
// window.open('https://google.com', 'Open Google', 'resizeable')
// window.scrollTo(0, 1000)

// 10. print()
window.print()



