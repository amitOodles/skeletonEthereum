	module.exports = function (app) {
		var controllers = app.controllers,
			views = app.views;

		return {
			"/balance": [{
					method: "POST",
					action: controllers.ethereumController.accountBalance,
					views: {
						json: views.jsonView
					}
				}
			],
			"/createaccount": [{
					method: "POST",
					action: controllers.ethereumController.createAccount,
					views: {
						json: views.jsonView
					}
				}
			],
			"/sendether": [{
					method: "POST",
					action: controllers.ethereumController.createTransaction,
					views: {
						json: views.jsonView
					}
				}
			],
			"/transactionDetail": [{
					method: "POST",
					action: controllers.ethereumController.transactionDetail,
					views: {
						json: views.jsonView
					}
				}
			],
			"/txConfirmations": [{
					method: "POST",
					action: controllers.ethereumController.transactionConfirmations,
					views: {
						json: views.jsonView
					}
				}
			]
		};
	};
