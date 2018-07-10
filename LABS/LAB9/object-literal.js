// Set up the object
var hotel1 = {
  logo : 'file.svg',
  name : '九龍飯店',
  rooms : 40,
  booked : 25,
  checkAvailability : function() {
    return this.rooms - this.booked; // Need "this" because inside function
  }
};
// Set up the object
var hotel2 = new Object();
hotel2.logo = 'file1.svg';
hotel2.name = '平珍樓';
hotel2.rooms = 120;
hotel2.booked = 77;
hotel2.checkAvailability = function() {
  return this.rooms - this.booked;  
};
// Update the HTML
var elName = document.getElementById('hotelName'); // Get element
elName.textContent = hotel1.name + ' ' + hotel2.name;                   // Update HTML with property of the object

var elRooms = document.getElementById('rooms');    // Get element
elRooms.textContent = hotel1.checkAvailability() + ',' +hotel2.checkAvailability();   // Update HTML with property of the object

document.getElementById('i1').src = hotel1.logo;
document.getElementById('i2').src = hotel2.logo;
/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on lines 13 and 16, but note the security issues on p228-231
*/