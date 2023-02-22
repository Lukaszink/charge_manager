window.onload = function(){
    startsym();
}




async function startsym(){
    draw.init();
    setInterval( simulation, 16);


}
ancnt = 1;
interval = 1;

function simulation(){
    draw_canvas();
    interval = window.interaction.speed;
    if( ancnt % (interval * 10) == 0){
        ancnt=1;
        move_cars();
    }
    ancnt++;
}




