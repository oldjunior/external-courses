'use strict';
const homer = {};
homer.fullName = 'Homer Jay Simpson';
homer.age = 63;
homer.isMarriedTo = 'Marge Simpson';
homer.hasKids = ['Bart Simpson', 'Lisa Simpson', 'Maggie Simpson'];
homer.lovesBeer = true;
homer.likesFlanders = false;
homer.isInTrouble = function(param) {
  return param ? "D'oh!!!" : 'Woo-Hoo!';
}
delete homer.likesFlanders;