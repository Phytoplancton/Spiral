const Settings = (()=>{
    const S = {}

    // imputSettings
    S.shiftInterval = 10
    S.shiftStep = 10
    S.turningSpeed = 2

    S.mouseShift = -9
    //color settings
    S.canvasColor = 'rgb(20,20,20)'



    //spiral settings

    S.size = 250
    S.partCnt = 100
    S.rootX = window.innerWidth / 2
    S.rootY = window.innerHeight/2 
    S.opacityFadingBase = 1.05
    // S.spiralMinOpacity = 0.4
 

    return S
})()

const mod = (m,n)=>{
    return (m%n + n)%n
}