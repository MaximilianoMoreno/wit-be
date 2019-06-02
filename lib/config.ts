const Config = {
  'name': 'Grower-e',
  'version': '0.0.1',
  'database': {
    'development': { 'url': 'mongodb://localhost/wit' },
    'production': {
      'url': 'mongodb://XX.XXX.XX.XXX/wit',
      'auth': {
        'user': 'wit-admin',
        'pass': ''
      }
    }
  },
  'port': 8080,
  'web_port': 5555,
  'protocol': 'http://',
  'forgot_url': '/#/forgot-password',
  'Accept': [
    'application/json'
  ],
  'Secret': 'Ch1nchul1n!',
  'email_conf': {
    service: 'Gmail',
    auth: {
      user: 'witenglish@gmail.com', // Your email id
      pass: 'somethingSomething' // Your password
    }
  },
  serverTimeZone: 'America/Los_Angeles'
};
export default Config;
