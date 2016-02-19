String.prototype.valid = function() {
  return this == this.split('').reverse().join('');
}

var exec = function(target) {
  if ((target + '').valid()
  && target.toString(2).valid()
  && target.toString(8).valid()) {
    console.log(target);
    return;
  }

  exec(target + 1);
}

exec(10);
