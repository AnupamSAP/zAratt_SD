sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("zarattzAratt_SD.controller.ProjectMaster", {
		onInit:function(){
			this.openSelectProject();
		},
		openSelectProject : function(){
			// handleValueHelpPurchaseOrder: function (oEvent) {
				var oSelectFragment = new sap.ui.model.json.JSONModel();
				this.getView().setModel(oSelectFragment, "SelectFragment");
					var SelectFragment = this.getView().getModel("SelectFragment");
			SelectFragment.setProperty("/fragment","zarattzAratt_SD.view.fragments.ProjectMaster");
				
			if (!this.openSelectProjectDialog) {
				this.openSelectProjectDialog = sap.ui.xmlfragment("zarattzAratt_SD.view.fragments.selectProject",
					this);
				this.getView().addDependent(this.openSelectProjectDialog);
			}

			// var context = oEvent.getSource().getBindingContext("pos");
			// this._oValueHelpDialogPurchaseOrder.setBindingContext(context, "pos");
			this.openSelectProjectDialog.open();
		// },
		},
		onPressCancelSelectProject : function(){
			this.openSelectProjectDialog.close();
		},
		_onNavigationListItemAmenities : function(){
			
			var SelectFragment = this.getView().getModel("SelectFragment");
			SelectFragment.setProperty("/fragment","zarattzAratt_SD.view.fragments.ProjectMaster");
			this.onAddFragment();
		},
		onAddFragment: function(){
			// this.byId("ui").destroyContent();
        var oFragment = sap.ui.xmlfragment("zarattzAratt_SD.view.fragments.ProjectMaster", this);
        this.byId("ui").addContent(oFragment);
    }


	});
});