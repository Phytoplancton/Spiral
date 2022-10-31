

const Spiral = (()=>{
    const midx = window.innerWidth / 2
    const midy = window.innerHeight / 2

    const draw = () => {
        const ctx = Canvas01.ctx
        ctx.strokeStyle = "rgb(200,200,200)"
        let phi = []
        for (let i = 0; Math.abs(i) < Math.abs(MouseListener.angleToMouse); i += MouseListener.angleToMouse / Settings.partCnt ) {
            phi.push(i * Settings.turningSpeed)
        }
        ctx.moveTo(midx, midy)
        ctx.beginPath()
        phi.forEach((p, i)=>{
            x = midx + Math.cos(p)  * i * Settings.size / Settings.partCnt
            y = midy - Math.sin(p)  * i * Settings.size / Settings.partCnt
            ctx.lineTo(x, y)
        })
        ctx.stroke()
        
    }

    return {
        draw,
    }
})()