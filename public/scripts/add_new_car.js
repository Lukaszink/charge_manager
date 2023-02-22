function add_new_car(){
    for( k =0 ; k< 10 ; k++){
        if((carpositions[k] === 0) && (window.interaction.incoming_cars.length != 0)){
            tmp = window.interaction.incoming_cars.splice(0,1)[0];
            carpositions[k] = 1;
            console.log(window.interaction.incoming_cars.length);
        }
    }
}