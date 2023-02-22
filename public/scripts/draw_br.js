
function draw_br(){
    draw.reset();

    //draw highway
    draw.line(0,5,100,5);

    draw.line(0,15,35,15);
    draw.line(45,15,60,15);  
    draw.line(80,15,95,15);

    //draw highway middle
    for(i =0; i< 25; i++){
        if(i%2==0)draw.line(i*4+2,10,i*4+6,10);
    }

    //draw ramp 1
    
    
    draw.curve(35,15,50,49,51,15);
    draw.curve(45,15,52.5,49,53,20);
   
    draw.curve(60,15,52.5,49,52,20)
    draw.curve(70,15,55,49,54,15);


    //draw ramp 2
    draw.curve(70,15,85,44,86,16);
    draw.curve(80,15,87.5,44,88,20);
   
    draw.curve(95,15,87.5,44,87,20)
    draw.curve(105,15,90,44,89,16);
    

    //draw SCL1
        o = 50;
        l = 25;
        u = 95;
        r = 60;

        //box
        draw.line(l-0.5,o-1,50,o-1);
        draw.line(l-0.5,o-1,l-0.5,u+1);
        draw.line(l-0.5,u+1,r+0.5,u+1);
        draw.line(r+0.5,u+1,r+0.5,o-1);
        draw.line(r+0.5,o-1,55,o-1);

        //parking spaces
        for(i=0; i < 9 ; i++)draw.hp(r-5,o+5*i, "black");
        
        //V3 
        for(i=0; i < 11 ; i++)draw.vp(l+2.5*i,u-10, "blue");

        //V2
        for(i=1; i < 10 ; i++)draw.vp(l+2.5*i,o+5, "red");
        for(i=1; i < 10 ; i++)draw.vp(l+2.5*i,o+15, "red");


    //end SCL 1    



    //draw scl2
        o = 45;
        l = 75;
        r = 95;
        u = 95;


        draw.line(l-0.5,o-1,85,o-1);
        draw.line(l-0.5,o-1,l-0.5,u+1);
        draw.line(l-0.5,u+1,r+0.5,u+1);
        draw.line(r+0.5,u+1,r+0.5,o-1);
        draw.line(r+0.5,o-1,90,o-1);

        //draw parking
        for(i=0; i < 4 ; i++)draw.vp(l+2.5*i,o, "black");
        for(i=6; i < 8 ; i++)draw.vp(l+2.5*i,o, "black");

        //V3
        for(i=3; i < 10 ; i++)draw.hp(r-5,o+5*i, "blue");

        //V2
        for(i=3; i < 9 ; i++)draw.hp(l+7.5,o+5*i, "red");
        for(i=3; i < 9 ; i++)draw.hp(l+2.5,o+5*i, "red");



}
