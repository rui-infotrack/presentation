var HomeGrid = {
  orders: ko.observableArray(/*...an array of orders...*/)
};

HomeGrid.totalOrders = ko.computed(function() {
  return HomeGrid.orders().length;  
});
