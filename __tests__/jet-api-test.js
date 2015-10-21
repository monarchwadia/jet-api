jest.dontMock("../jet-api");
jest.dontMock("../JetConnection");

var USERNAME = "username";
var PASSWORD = "password";

describe ("Creating a Connection", function(){
    it("returns a Promise", function(){
        var JetApi = require("../jet-api");
        var JetConnection = require("../JetConnection");

        var result = JetApi.connect(process.env.TEST_API_USER, process.env.TEST_API_SECRET);

        expect(result instanceof Promise).toBe(true);
    });
});


