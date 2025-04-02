sap.ui.define([],
    function(){
        return{
            change:function(inp){
                masked=""
                if(inp){
                    var i;
                    debugger
                            for(i=0;i<=inp.length-1 && i<10 ;i++){
                                masked+="X"
                            }
                        if(i>=10){
                            debugger
                            for(i=i;i<inp.length && i<14;i++){
                                masked+=inp[i];
                            }
                        }
                    
                }
                return masked;
            },
            capitalize:function(inp){
                if(inp){
                    var cap=inp.charAt(0).toUpperCase()+inp.slice(1);
                    return cap;
                }
            },
            validateMarks:function(inp){
                if(inp>30){
                    return "Success";
                    // return sap.ui.getCore()byId('myTable')..setStyleClass("green");
                }
                else{
                    return 'Error';
                    // return this.setStyleClass("red");
                }
                // return inp;
            }
        };
    });