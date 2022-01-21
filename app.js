document.addEventListener('DOMContentLoaded',()=>{
    const rows=document.querySelectorAll('.row')
    const titan=document.querySelector('.titan')
    const display=document.querySelector('#score')
    const time_left=document.querySelector('#time-left')
    let result=0;
    let currentTime=60;
    let PositionId;
    let movingTitan=null;
    function randomRow(){
        rows.forEach(row=>{
            row.classList.remove('titan');
            
        })
        let titanPosition=rows[Math.floor(Math.random()*9)]
        titanPosition.classList.add('titan');
        PositionId=titanPosition.id;

    }
    
        rows.forEach(row=>{
            row.addEventListener('mousedown',()=>{
                if(row.id==PositionId){
                    result++;
                    display.textContent=result;
                    PositionId=null;
                }
    

            })
       

        })
    
    function timeLeft(){
        currentTime--;
        time_left.textContent=currentTime;
        if(currentTime==0){
            clearInterval(countDown);
            clearInterval(movingTitan);
            alert("Time over!!! you whacked "+ result+" titans")
        }
    }
    
    function moveTitan(){
        movingTitan=setInterval(randomRow,500);
    }
    moveTitan()
    let countDown=setInterval(timeLeft,1000);
})