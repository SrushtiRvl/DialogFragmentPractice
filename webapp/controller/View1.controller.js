sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../utils/formatter"
], function(Controller,formatter) {
	"use strict";

	return Controller.extend("project3.controller.View1", {
	formatter:formatter,
	onInit:function(){
		// this.getView().byId("myTable").attachRowsUpdated(function(oEvent){
		// 	debugger;
		// });
		//this.getOwnerComponent().getModel().setDefaultBindingMode("OneWay")
	},
	onRowsUpdated:function(){
        var oTable=this.getView().byId('myTable');
        //var cols=oTable.getColumns()[2];
        var cols 
        oTable.getColumns().forEach(function(col,index){
            if(col.getLabel().getText() === "Marks"){
                cols = index;
            }
        });
        var rows=oTable.getRows();
        rows.forEach((val)=>{
            var content=Number.parseInt(val.getCells()[cols].getValue());
            if(content>=30){
                //val.getCells(cols)[2].setText(100);
                val.getDomRef().style = "background-color:rgba(0, 128, 0, 0.300); color:white;";
            }
            else if(content<30){
                //val.getCells(cols)[2].setText(0);
                val.getDomRef().style = "background-color:rgba(255, 0, 0, 0.300); color:white";

            }

        })
        // var content=rows.getCell
	},
	openDialog:function(){
		if(!this.frag){
			this.frag= new sap.ui.xmlfragment("project3.fragments.addData",this);	  
			this.getView().addDependent(this.frag);
			// this.frag.open();
		}
		this.frag.open();
	},
	onDialogclose : function(){
		this.frag.close();
		this.frag.destroy();
		this.frag = null;
		//var id=sap.ui.getCore().byId('idInp').getValue();
		//var name=sap.ui.getCore().byId('nameInp').getValue();
		
	},
	add: function(){
		var id=sap.ui.getCore().byId('idInp').getValue();
		var name=sap.ui.getCore().byId('nameInp').getValue();
		var marks=Number.parseInt(sap.ui.getCore().byId('marksInp').getValue());
		var oData={
			"id":id,
			"name":name,
			"marks":marks
		};
		this.getView().getModel().getProperty('/students').push(oData);
		this.getView().getModel().refresh();
	}
	});
});