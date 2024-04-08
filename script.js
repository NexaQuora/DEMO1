let content = document.getElementsByClassName("play")[0]
let th = document.getElementById('theme')
let container = document.getElementsByClassName("container")[0]
let v = document.getElementById('v')
let but = document.querySelectorAll('.video')
let mnu = document.getElementsByClassName("menu")[0]
let me = document.getElementById('menu')
let play = false
let x;
let vid;
function Changes(src, id) {
    this.src = src;
    this.id = id;
    let fetch = document.getElementById(this.id)
    fetch.style.backgroundImage = `url(${this.src})`
    fetch.style.justifyContent = "center"
    fetch.style.backgroundSize = "100%"
    fetch.style.borderColor = "transparent"
    fetch.style.display = 'block'
}

let v1 = new Changes('/src/pic/silent_voice.jpg', 'video1', 'vname1')
let v2 = new Changes('/src/pic/yourname.jpg', 'video2', 'vname2')
let v3 = new Changes('/src/pic/Devilman_cry_baby.jpg', 'video3', 'vname3')
let v4 = new Changes('/src/pic/im_hte_villainnese.jpg', 'video4', 'vname4')
let v5 = new Changes('/src/pic/Log_horizon.jpg', 'video5', 'vname5')
function menu() {
    x = -294
    function move() {
        if (x < 0) {
            x += 16
            // console.log("f " + x)
            requestAnimationFrame(move)

        }

        mnu.style.left = x + "px"
        me.style.display = "none"


    }

    move()
}


function back() {
    x = 0
    function mve() {

        if (x >= -304) {
            x -= 12
            // console.log("last " + x)
            requestAnimationFrame(mve)
        }

        mnu.style.left = x + "px"
        me.style.display = "block"

    }
    mve()

}
but.forEach(function (button) {
    button.addEventListener('click', () => {
        container.style.display = 'none'
        content.style.display = "block"
        vid = button.id


    })
})


//v.src = 'https://drive.google.com/file/d/1TL5XpDIXV4hD_DZypv1a_vmqGA0zSD14/preview'
v.src = "clips that made EKARO famous❤️ 60 FPS BGMI MONTAGE Herman I I I.mp4"
if (vid === 'video2') {
    v.src = ""

}


container.style.display = 'none'// REMOVE THIS LINE AFTER DONE
content.style.display = ""// REMOVE THIS LINE AFTER DONE

