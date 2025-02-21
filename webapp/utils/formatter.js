sap.ui.define([],
    function(){
        return{
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