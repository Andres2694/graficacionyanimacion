ELEVATOR SAGA
 LEVEL 1)
 {
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator

        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", function() {
            // let's go to all the floors (or did we forget one?)
            for(var i=0; i<=3; i++){
                elevator.goToFloor(i);
            }
        });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}

LEVEL 2)
{
    //using speed X8
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator

        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", function() {
            // let's go to all the floors (or did we forget one?)
            for(var i=0; i<=5; i++){
                elevator.goToFloor(i);
            }
        });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}

LEVEL 3)
{
    //using speed x8
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator

        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", function() {
            // let's go to all the floors (or did we forget one?)
            for(var i=0; i<=5; i++){
                elevator.goToFloor(i);
            }
        });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}

LEVEL 4)
{
    //using speed x8
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator
        var elevator_2 = elevators[1];
        
        elevator_2.on("floor_button_pressed", function(){
                for(var j=0; j<=7; j++){
                    elevator_2.goToFloor(j);
                }
        });

        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("floor_button_pressed", function() {
            // let's go to all the floors (or did we forget one?)
            for(var i=0; i<=7; i++){
                elevator.goToFloor(i);
            }
        });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}

LEVEL 5)
{
    //using speed x8
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator
        var elevator_2 = elevators[1];
        var elevator_3 = elevators[2];
        var elevator_4 = elevators[3];
        
        elevator_4.on("floor_button_pressed", function(floorNum3){
            elevator_4.goToFloor(floorNum3);
        });
        
        elevator_3.on("floor_button_pressed", function(floorNum2){
            elevator_3.goToFloor(floorNum2);
        });
        elevator_2.on("floor_button_pressed", function(floorNum1){
            elevator_2.goToFloor(floorNum1);
        });

        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("floor_button_pressed", function(floorNum) {
            elevator.goToFloor(floorNum);
        });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}

LEVEL 6)
{
    //using speed x8
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator
        var elevator_2 = elevators[1];
        var elevator_3 = elevators[2];
        var elevator_4 = elevators[3];
        
        /*elevator_4.on("floor_button_pressed", function(floorNum3){
            elevator_4.goToFloor(floorNum3);
        });
        
        elevator_3.on("floor_button_pressed", function(floorNum2){
            elevator_3.goToFloor(floorNum2);
        });*/
        
        elevator_2.on("floor_button_pressed", function(floorNum1){
            elevator_2.goToFloor(floorNum1);
        });

        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("floor_button_pressed", function(floorNum) {
            elevator.goToFloor(floorNum);
        });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}

LEVEL 7)
{
    //using speed x8
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator
        var elevator_2 = elevators[1];
        var elevator_3 = elevators[2];
        var elevator_4 = elevators[3];
        
        /*elevator_4.on("floor_button_pressed", function(floorNum3){
            elevator_4.goToFloor(floorNum3);
        });
        
        elevator_3.on("floor_button_pressed", function(floorNum2){
            elevator_3.goToFloor(floorNum2);
        });*/
        
        elevator_2.on("floor_button_pressed", function(floorNum1){
            elevator_2.goToFloor(floorNum1);
        });

        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("floor_button_pressed", function(floorNum) {
            elevator.goToFloor(floorNum);
        });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}

LEVEL 8)
{
    //using speed x8
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator
        var elevator_2 = elevators[1];
        var elevator_3 = elevators[2];
        var elevator_4 = elevators[3];
        
        /*elevator_4.on("floor_button_pressed", function(floorNum3){
            elevator_4.goToFloor(floorNum3);
        });
        
        elevator_3.on("floor_button_pressed", function(floorNum2){
            elevator_3.goToFloor(floorNum2);
        });*/
        
        elevator_2.on("floor_button_pressed", function(){
            for(var j=0;j<=5;j++){
                elevator_2.checkDestinationQueue();
                elevator_2.goToFloor(j);       
            }        
        });

        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("floor_button_pressed", function() {
            for(var i=0;i<=5;i++){
                elevator.checkDestinationQueue();
                elevator.goToFloor(i);       
            } 
        });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}
