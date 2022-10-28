

const Resizer = (()=>{
    R = {}

    R.resizeCanvas = (canvas)=>{
        canvas.width = window.innerWidth - 20
        canvas.height = window.innerHeight - 20
    }
    R.resizeAllCanvases = ()=>{
        R.resizeCanvas(Canvas01.canv)
    }
    R.resizeAllCanvases()

    window.addEventListener('resize',R.resizeAllCanvases) 

    console.log('canvas is resized!')


    return R
})()



setInterval(() => {
    Canvas01.ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
    Spiral.draw()
}, 10); 

