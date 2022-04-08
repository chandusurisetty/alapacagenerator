const addParts = document.querySelectorAll(".nameStyle")
let stylebtn = document.querySelectorAll(".stylebtn")
const btnbar = document.querySelector(".btnsbar")
const rand = document.querySelector(".rand");

const looks = {
    accessories: ["earings", "flower", "glasses", "headphone"],
    backgrounds: ["blue50", "blue60", "blue70", "darkblue30", "darkblue50", "darkblue70",
        "green50", "green60", "green70", "gray40", "gray70", "gray80", "red50", "red60", "red70", "yellow50",
        "yellow60", "yellow70"],
    ears: ["default", "tilt-backward", "tilt-forward"],
    eyes: ["angry", "default", "naughty", "panda", "smart", "star"],
    hair: ["band", "curls", "short", "default", "elegant", "fancy", "quiff"],
    legs: ["bubble-tea", "cookie", "default", "game-console", "tilt-backward", "tilt-forward"],
    mouth: ["astonished", "default", "eating", "laugh", "tongue"],
    neck: ["bend-backward", "bend-forward", "default", "thick"]


}
const run = (part) => {
    for (let posters of stylebtn) {


        posters.addEventListener("click", () => {


            let change = document.querySelector(`.${part}`)


            change.src = `http://127.0.0.1:5500/modals/${part}/${posters.innerHTML}.png`



        })
    }
}




for (let part of addParts) {
    part.addEventListener("click", () => {


        for (let eachstyle of stylebtn) {
            eachstyle.remove()
        }
        let looklist = looks[part.innerHTML]
        for (let eachlook of looklist) {
            const newbtn = document.createElement("button")
            newbtn.innerHTML = eachlook
            newbtn.classList.add("stylebtn")

            btnbar.appendChild(newbtn)

        }
        stylebtn = document.querySelectorAll(".stylebtn")

        run(part.innerHTML)

    })

}


rand.addEventListener("click", () => {


    Object.keys(looks).forEach(part => {
        arrayPart = looks[part]

        const randPart = arrayPart[Math.floor(Math.random() * arrayPart.length)]
        let change = document.querySelector(`.${part}`)



        change.src = `http://127.0.0.1:5500/modals/${part}/${randPart}.png`



    })


    // const randAcc = looks["accessories"]
    // console.log(randAcc[Math.floor(Math.random() * randAcc.length)])


})

