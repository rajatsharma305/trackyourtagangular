angular.module('trackyourtagangularApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<uib-alert ng-repeat=\"alert in alerts\" type=\"{{alert.type}}\" close=\"closeAlert($index)\">{{alert.msg}}</uib-alert> <ng-map center=\"{{center}}\"> <marker position=\"{{marker}}\" title=\"{{markername}}\" animation=\"Animation.BOUNCE\"></marker> </ng-map> <br> <br> <!-- <input type=\"text\" name=\"trackid\" ng-model=\"trackid\" class=\"form-control\" required>\n" +
    "<br>\n" +
    "<button type=\"button\" class=\"btn btn-primary\" ng-click=\"locate()\">Track Your Package</button></br>\n" +
    "<br> --> <div class=\"col-lg-12\"> <div class=\"input-group\"> <input type=\"text\" class=\"form-control\" placeholder=\"Trackid Here\" ng-model=\"trackid\"> <span class=\"input-group-btn\"> <button class=\"btn btn-default\" type=\"button\" ng-click=\"locate()\">Go!</button> </span> </div><!-- /input-group --> </div><!-- /.col-lg-6 --> <br> <br> <table st-table=\"rowCollection\" class=\"table table-striped\"> <thead> <tr> <th>Name</th> <th>Start Point</th> <th>End Point</th> <th>Quantity</th> <th>Holder Email</th> </tr> </thead> <tbody> <tr> <td>{{alldetail.pname}}</td> <td>{{alldetail.startloc}}</td> <td>{{alldetail.endloc}}</td> <td>{{alldetail.qty}}</td> <td>{{alldetail.holderemail}}</td> </tr> </tbody> </table>"
  );


  $templateCache.put('views/admin.html',
    "<uib-alert ng-repeat=\"alert in alerts\" type=\"{{alert.type}}\" close=\"closeAlert($index)\">{{alert.msg}}</uib-alert> <form name=\"admin\"> <div class=\"form-group\"> <label>Email:</label> <input type=\"text\" name=\"email\" ng-model=\"email\" class=\"form-control\" required> <div ng-messages=\"admin.email.$error\"> <div ng-message=\"required\"><i>This field is required</i></div> </div> <label>Password:</label> <input type=\"password\" name=\"pass\" ng-model=\"pass\" class=\"form-control\" required> <div ng-messages=\"admin.pass.$error\"> <div ng-message=\"required\"><i>This field is required</i></div> </div>  <button type=\"button\" class=\"btn btn-primary\" ng-click=\"login()\">Authenticate</button> </div> </form> <div ng-show=\"myValue\"> <button type=\"button\" class=\"btn btn-primary\" ng-click=\"generatorgo()\">Generate Tag</button> <button type=\"button\" class=\"btn btn-primary\" ng-click=\"usersgo()\">Add New User</button> </div>"
  );


  $templateCache.put('views/generator.html',
    "<uib-alert ng-repeat=\"alert in alerts\" type=\"{{alert.type}}\" close=\"closeAlert($index)\">{{alert.msg}}</uib-alert> <form name=\"qrform\"> <div class=\"form-group\"> <label>Product Name:</label> <input type=\"text\" name=\"pname\" ng-model=\"pname\" class=\"form-control\" required> <div ng-messages=\"qrform.pname.$error\"> <div ng-message=\"required\"><i>This field is required</i></div> </div> <label>Quantity:</label> <input type=\"text\" name=\"qty\" ng-model=\"qty\" class=\"form-control\" required> <div ng-messages=\"qrform.qty.$error\"> <div ng-message=\"required\"><i>This field is required</i></div> </div> <label>Product ID:</label> tyt<input type=\"text\" name=\"qrid\" ng-model=\"qrid\" class=\"form-control\" required> <div ng-messages=\"qrform.qrid.$error\"> <div ng-message=\"required\"><i>This field is required</i></div> </div> <label>Seller's City:</label> <input type=\"text\" name=\"startloc\" ng-model=\"startloc\" class=\"form-control\" required> <div ng-messages=\"qrform.startloc.$error\"> <div ng-message=\"required\"><i>This field is required</i></div> </div> <label>Shipping and Billing Address City:</label> <input type=\"text\" name=\"endloc\" ng-model=\"endloc\" class=\"form-control\" required> <div ng-messages=\"qrform.endloc.$error\"> <div ng-message=\"required\"><i>This field is required</i></div> </div> <label>Receiver's Email</label> <input type=\"text\" name=\"receiveremail\" ng-model=\"receiveremail\" class=\"form-control\" required> <div ng-messages=\"qrform.receiveremail.$error\"> <div ng-message=\"required\"><i>This field is required</i></div> </div>  <button type=\"button\" class=\"btn btn-primary\" ng-click=\"generate()\">Generate Image</button> <button type=\"button\" class=\"btn btn-primary\" ng-click=\"print('printablediv')\">Print QR Code</button> </div> </form> <div id=\"printablediv\"> <img src=\"{{imgurl}}\"> </div>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"jumbotron\"> <h1>Track Your Tag</h1> </div> <p><button type=\"button\" class=\"btn btn-primary btn-block\" ng-click=\"login()\">Start Tracking</button></p>"
  );


  $templateCache.put('views/users.html',
    "<uib-alert ng-repeat=\"alert in alerts\" type=\"{{alert.type}}\" close=\"closeAlert($index)\">{{alert.msg}}</uib-alert> <form name=\"exampleForm\"> <div class=\"form-group\"> <label>Name:</label> <input type=\"text\" name=\"name\" ng-model=\"name\" class=\"form-control\" required> <div ng-messages=\"exampleForm.name.$error\"> <div ng-message=\"required\"><i>This field is required</i></div> </div> <label>Email:</label> <input type=\"text\" name=\"email\" ng-model=\"email\" class=\"form-control\" required> <div ng-messages=\"exampleForm.email.$error\"> <div ng-message=\"required\"><i>This field is required</i></div> </div> <label>Password:</label> <input type=\"password\" name=\"pass\" ng-model=\"pass\" class=\"form-control\" required> <div ng-messages=\"exampleForm.pass.$error\"> <div ng-message=\"required\"><i>This field is required</i></div> </div> <label>Confirm Password:</label> <input type=\"password\" name=\"cpass\" ng-model=\"cpass\" class=\"form-control\" required> <div ng-messages=\"exampleForm.pass.$error\"> <div ng-message=\"required\"><i>This field is required</i></div> </div> <label>Contact No:</label> <input type=\"text\" name=\"cno\" ng-model=\"cno\" class=\"form-control\" required> <div ng-messages=\"exampleForm.cno.$error\"> <div ng-message=\"required\"><i>This field is required</i></div> </div>  <button type=\"button\" class=\"btn btn-primary\" ng-click=\"add()\">Add User</button> </div> </form> <table st-table=\"rowCollection\" class=\"table table-striped\"> <thead> <tr> <th>Name</th> <th>Email</th> <th>Contact</th> </tr> </thead> <tbody> <tr ng-repeat=\"row in rowCollection\"> <td>{{row.name}}</td> <td>{{row.email}}</td> <td>{{row.cno}}</td> </tr> </tbody> </table>"
  );

}]);
