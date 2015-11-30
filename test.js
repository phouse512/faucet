var URI = require('urijs');
console.log(URI);

object = URI('http://google.com?access_token=f7f80a427569610d6bb8bbd94a1c162baa262804&scope=repo%2Cuser&token_type=bearer').query(true);
console.log(object);
