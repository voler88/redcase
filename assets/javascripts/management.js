﻿
var managementTab = {

	updateTree: function() {
		log.info('Updating the execution tree');
		Redcase.apiCall({
			// TODO: Wrong, there should be a call to ExecutionSuite
			//       entity/controller.
			method: Redcase.methods.main.method,
			params: {
				'ex': jQuery('#list_id').val()
			},
			success: function(data) {
				data['prefix'] = 'management_execution_suite_tree';
				execTree.setRootNode(new Ext.tree.AsyncTreeNode(data));
				execTree.getLoader().load(execTree.getRootNode());
				execTree.getRootNode().expand();
				jQuery('#list_name').val(execTree.getRootNode().text);
			},
			errorMessage: "Execution list cannot be reloaded"
		});
	}

};
