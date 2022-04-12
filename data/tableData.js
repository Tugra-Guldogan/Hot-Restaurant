// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
    {
      customerName: "Jenny",
      customerEmail: "jenny@coding.com",
      customerID: "jenny19",
      phoneNumber: "720-555-1234"
    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = tableArray;
