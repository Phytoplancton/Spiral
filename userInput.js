
const MouseListener = (()=>{
    const M = {}

    //default Mouseposiion = screen middle
    M.PosX = window.innerWidth / 2
    M.PosY = window.innerHeight /2

    //add eventlistener for tracking mousemovement
    document.addEventListener('mousemove', function(e) {
        M.PosX = e.clientX + Settings.mouseShift
        M.PosY = e.clientY + Settings.mouseShift
    })
    console.log('Mousedetector is runnig!')

    M.angleToMouse = 0

    document.addEventListener('mousemove',()=>{
        var deltaMiddleToMouseY = M.PosY-Settings.rootY
        var deltaMiddleToMouseX = M.PosX-Settings.rootX
        var currentAngle = mod(-Math.atan2(deltaMiddleToMouseY,deltaMiddleToMouseX),Math.PI*2)
        var angelDiff = mod(M.angleToMouse-currentAngle + Math.PI, Math.PI*2) - Math.PI
        M.angleToMouse -= angelDiff
    }) 

    return M
})()



