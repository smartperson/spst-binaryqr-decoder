this.byteArrayToHexString = function byteArrayToHexString(byteArray) {
  return byteArray.map(function(byte) {
      return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    }).join('');
};