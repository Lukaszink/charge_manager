function move_cars(){
    
    //move highway 15-19
    move_right(highway[19],0, 95, 15);
    move_right(highway[18],highway[19], 90, 15);
    move_right(highway[17],highway[18], 85, 15);
    move_right(highway[16],highway[17], 80, 15);
    move_right(highway[15],highway[16], 75, 15);

    //move onramp
    move_bezier(onramp2[4], highway[19], 0,0,0,0,0,0);
    move_bezier(onramp2[3], onramp2[4], 0,0,0,0,0,0);
    move_bezier(onramp2[2], onramp2[3], 0,0,0,0,0,0);
    move_bezier(onramp2[1], onramp2[2], 0,0,0,0,0,0);
    move_up(onramp2[0], onramp2[1], 0,0);

    //move SC2
    if(sc2right[3] != 0){
        if(sc2right[3].dest == "B8" || sc2right[3].dest == "B9")move_up_right_short(sc2right[3], sc2corner[0], 0,0);
        if(sc2right[3].dest == "Exit")move_up(sc2right[3], onramp2[0], 0,0);
        else move_up_left_short(sc2right[3], sc2top[0], 0,0);
    }
    
    move_up(sc2right[2],sc2right[3], 0, 0);
    move_up(sc2right[1],sc2right[2], 0, 0);
    move_up(sc2right[0],sc2right[1], 0, 0);

    move_right_up_long(sc2bot[1], sc2right[0], 0,0);
    move_right(sc2bot[0], sc2bot[1], 0,0);

    move_down_left_short(sc2left[3], sc2bot[0],0,0);
    move_down(sc2left[2], sc2left[3], 0,0);
    move_down(sc2left[1], sc2left[2], 0,0);
    move_down(sc2left[0], sc2left[1], 0,0);

    move_left_down_long(sc2top[1],sc2left[0], 0,0);
    move_left(sc2top[0],sc2top[1], 0, 0);

    //move offramp
    move_down_right_long(offramp2[4], sc2top[0],0,0);
    move_down(offramp2[3], offramp2[4]);
    move_bezier(offramp2[2], offramp2[3],0,0,0,0,0,0);
    move_bezier(offramp2[1], offramp2[2],0,0,0,0,0,0);
    move_bezier(offramp2[0], offramp2[1],0,0,0,0,0,0);
    
    //move highway 9-14

    if((highway[14] != 0)&&(highway[14].dest == "SC")){
        move_bezier(highway[14],offramp2[0],0,0,0,0,0,0);
    }
    else{
        move_right(highway[14],highway[15],0,0);
    }
    move_right(highway[13],highway[14],0,0);
    move_right(highway[12],highway[13],0,0);
    move_right(highway[11],highway[12],0,0);
    move_right(highway[10],highway[11],0,0);
    move_right(highway[9],highway[10],0,0);
    

    //move onramp2
    move_bezier(offramp1[3], highway[12],0,0,0,0,0,0);
    move_bezier(offramp1[2], offramp1[3],0,0,0,0,0,0);
    move_bezier(offramp1[1], offramp1[2],0,0,0,0,0,0);
    move_bezier(offramp1[0], offramp1[1],0,0,0,0,0,0);


    //move sc1
    if((highway[14] != 0)&&(highway[14].dest == "Exit")){
        move_up(sc1right[2],offramp1[0], 0,0);
    }
    else{
        move_up_left_short(sc2right[2],sc1top[0],0,0);
    }

    move_up(sc1right[1],sc1right[2],0,0);
    move_up(sc1right[0],sc1right[1],0,0);

    move_right_up_long(sc1botup[4],sc1right[0],0,0);
    move_right(sc1botup[3],sc1botup[4],0,0);
    move_right(sc1botup[2],sc1botup[3],0,0);
    move_right(sc1botup[1],sc1botup[2],0,0);
    move_right(sc1botup[0],sc1botup[1],0,0);

    //---------------
    




}