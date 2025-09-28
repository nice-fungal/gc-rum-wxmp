const { datafluxRum } = require('./unpkg/@cloudcare/rum-miniapp/index.js')

datafluxRum.init({
  site: 'https://rum-openway.guance.com',
  clientToken: 'a7073c6796254e2db3f86e5a59180aa9',
  applicationId: 'yanximm',
  env: 'demo',
  version: '1.0.0',
  service: 'miniapp',
  trackInteractions: false,
  sampleRate: 100,
})

// datafluxLogs.init({
//   site: 'https://rum-openway.guance.com',
//   clientToken: 'a7073c6796254e2db3f86e5a59180aa9',
//   applicationId: 'yanximm',
//   env: 'demo',
//   version: '1.0.0',
//   service: 'miniapp',
//   forwardErrorsToLogs: false,
//   sampleRate: 100,
// })

// datafluxRum.setUser({
// 	id: '1234',
// 	name: 'John Doe',
// 	email: 'john@doe.com',
// })

// datafluxRum && datafluxRum.addRumGlobalContext('isvip', 'xxxx');

// datafluxRum.addRumGlobalContext('activity', {
//     hasPaid: true,
//     amount: 23.42
// });

// wx.onError((err) => {
//   var error = new Error(err)
// 	var ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/
// 	console.log(error.message,'message')
// 	console.log(error.message.split('\n')[2].match(ERROR_TYPES_RE))
// })

App({
  // onError: function(t) {
  // 	var error = new Error(t)
  // 	var ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/
  // 	console.log(Object.getOwnPropertyDescriptors(error),'error')
  // 	var groups = error.message.match(ERROR_TYPES_RE)
  // 	console.log(groups,error.message,'arguments')
  // },
  onLaunch: function () {
    // datafluxLogs.logger.info('guance-mina-rum::demo::onLaunch')
  },

  globalData: {
  },
})
