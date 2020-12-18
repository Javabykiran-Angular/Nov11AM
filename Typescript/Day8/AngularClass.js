var AngularClass = /** @class */ (function () {
    function AngularClass(fname, lname, id) {
        this.fname = fname;
        this.lname = lname;
        this.id = id;
    }
    AngularClass.prototype.display = function () {
        console.log("\n        ++++++++++++ Details +++++++++++++\n            First Name :: " + this.fname + "\n            last name :: " + this.lname + "\n            Id         :: " + this.id + "\n        ");
    };
    return AngularClass;
}());
var obj = new AngularClass('Java', 'Kiran', 8);
obj.display();
