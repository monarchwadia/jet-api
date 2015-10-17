jest.dontMock("../jet-api");
jest.dontMock("../JetConnection");

var USERNAME = "username";
var PASSWORD = "password";

describe ("Creating a Connection", function(){
    it("returns a Promise", function(){
        var JetApi = require("../jet-api");
        var JetConnection = require("../JetConnection");

        var JC = JetApi.connect(process.env.API_USER, process.env.API_SECRET);

        expect(JC instanceof Promise).toBe(true);
    });
});

