var checkAnswers = function() {
	//insert_hidden_into_form(0, "assignmentid", assignmentId );
	//insert_hidden_into_form(0, "data", datastring );
	//insert_hidden_into_form(0, "workerid", workerId );
	
	//datastring = datastring.concat( "\n", ["instructionLoop"], "\n");
	
    
    $('select').each( function(i, val) {
                     
                     
                     
    //                if(this.id =="BetweenLocations"){
    //                 correct = (this.value == 2)? 1 : 0;
    //                 console.log(correct);
    //                    if(correct == 0){
    //                        loop = 1;
    //                  
    //                   // instructobject = new Instructions(['twostep_instruct_0','twostep_instruct_1','twostep_instruct_2','twostep_instruct_3'])
    //                 is_practice = 'step_two';
    //                  psiTurk.doInstructions(
    //	['instructions/instruct_1.html','instructions/instruct_2.html','instructions/instruct_3.html','instructions/instruct_4.html'],  // a list of pages you want to display in sequence
    //	function() { currentview = new TwoStepExpt(); } // what you want to do when you are done with instructions
    //);
    //                 return false
    //                    }
    //                 }
                     
                     if(this.id =="reside"){
                     southerner = (this.value == 44 || this.value==43 || this.value == 33 || this.value==20 || this.value==12 || this.value==6 || this.value==4 || this.value==46 || this.value==52 || this.value ==36 |this.value==29 || this.value==10 || this.value==49 || this.value==35 || this.value==17 || this.value==9)? 1 : 0;
                   
                    // correct = (this.value == 44)? 1 : 0; 
                     console.log(southerner);
                        if(southerner == 1){
                            loop = 1;
                       // instructobject = new Instructions(['twostep_instruct_0','twostep_instruct_1','twostep_instruct_2','twostep_instruct_3'])
                     
                 psiTurk.doInstructions(
    			['instructions/instruct_3.html','instructions/instruct_4.html','instructions/instruct_5.html'],  // a list of pages you want to display in sequence
    			function() {currentview = new IDQuestionnaire(); } // what you want to do when you are done with instructions
		    );
                     return false
                        }
                     }
                    else if(this.id =="grewUp"){
                      southerner = (this.value == 44 || this.value==43 || this.value == 33 || this.value==20 || this.value==12 || this.value==6 || this.value==4 || this.value==46 || this.value==52 || this.value ==36 |this.value==29 || this.value==10 || this.value==49 || this.value==35 || this.value==17 || this.value==9)? 1 : 0;
                     console.log(southerner);
                        if(southerner == 1){
                             loop = 1;
                        //instructobject = new Instructions(['twostep_instruct_0','twostep_instruct_1','twostep_instruct_2','twostep_instruct_3'])
                    
                    psiTurk.doInstructions(
    			['instructions/instruct_3.html','instructions/instruct_4.html','instructions/instruct_5.html'],  // a list of pages you want to display in sequence
    			function() {currentview = new IDQuestionnaire(); } // what you want to do when you are done with instructions
		    );
                     return false
                        }
                     }
                     
                         else if(this.id =="homeState"){
                     southerner = (this.value == 44 || this.value==43 || this.value == 33 || this.value==20 || this.value==12 || this.value==6 || this.value==4 || this.value==46 || this.value==52 || this.value ==36 |this.value==29 || this.value==10 || this.value==49 || this.value==35 || this.value==17 || this.value==9)? 1 : 0;
                     console.log(southerner);
                        if(southerner == 1){
                             loop = 1;
                        //instructobject = new Instructions(['twostep_instruct_0','twostep_instruct_1','twostep_instruct_2','twostep_instruct_3'])
                     
                       psiTurk.doInstructions(
    			['instructions/instruct_3.html','instructions/instruct_4.html','instructions/instruct_5.html'],  // a list of pages you want to display in sequence
    			function() {currentview = new IDQuestionnaire(); } // what you want to do when you are done with instructions
		    );
                     return false
                        }
                     }
                     
                     
                     
                     });
    if(southerner ==0){
    //instructobject = new Instructions(['twostep_instruct_9'])
    //return false
        is_practice = false
    is_midq = false
        is_training = true
      psiTurk.doInstructions(
    			['instructions/instruct_kickout.html'],  // a list of pages you want to display in sequence
    			function() {currentview = new Kickout(); } // what you want to do when you are done with instructions
		    );
    }
    
    
};