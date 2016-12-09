/*
 * @author Kuldeep
 * This program includes all the function which are required to  initialize before the application start
 */

 //call all the function which are required to perform the require initialization before server will start

var  initApp = function(){
    Logger.info("config" +configurationHolder.config.accessLevels["anonymous"] );
    startEthereum()
    bootApplication()
 }

//code to create the instance of ethereum_node
function startEthereum(){
    var options_ipc = {
      // host: '/home/oodles/.ethereum-testnet/testnet/geth.ipc',
      // host: '/home/amit/Documents/ether-private/firstserver/geth.ipc',
      host: '/home/amit/Documents/EthSample/sample/geth.ipc',
      ipc:true,
      personal: true,
      admin: false,
      debug: false
    };
    global.web3_ipc = web3_extended.create(options_ipc);
}

// code to start the server
function bootApplication(){
  	app.listen(configurationHolder.config.port, function(){
			console.log("Express server listening on port %d in %s mode", configurationHolder.config.port, app.settings.env);
		});
}

module.exports.initApp = initApp
