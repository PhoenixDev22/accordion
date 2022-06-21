const allTheButtons = [...document.querySelectorAll(".btn")];

allTheButtons.forEach(ele => {
    ele.addEventListener("click", (e) => {
        console.log(e.target.closest("button").getAttribute("aria-expanded"))
        console.log(e.target.closest("button"))
        allTheButtons.forEach(ele => {
            if(ele.id !== e.target.closest("button").id){
                ele.setAttribute("aria-expanded", "false")
                document.getElementById(ele.getAttribute("aria-controls")).classList.remove("answer-appear")  
                ele.children[1].classList.remove("rotate")

            }
        })

        if(e.target.closest("button").getAttribute("aria-expanded")  === "false"){
            document.getElementById(e.target.closest("button").getAttribute("aria-controls")).classList.add("answer-appear")
            e.target.closest("button").setAttribute("aria-expanded", "true")
            e.target.closest("button").children[1].classList.add("rotate")

        }else{
            e.target.closest("button").setAttribute("aria-expanded", "false")
            document.getElementById(e.target.closest("button").getAttribute("aria-controls")).classList.remove("answer-appear")  
            e.target.closest("button").children[1].classList.remove("rotate")
        }
            
    })
})

