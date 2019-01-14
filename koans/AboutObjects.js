describe("About Objects", function () {

  describe("Properties", function () {
    var meglomaniac;

    beforeEach(function () {
       meglomaniac = {  mastermind: "Joker", henchwoman: "Harley" };
    });

    it("should confirm objects are collections of properties", function () {
      expect(meglomaniac.mastermind).toBe("Joker");
    }); 

    it("should confirm that properties are case sensitive", function () {
      expect(meglomaniac.henchwoman).toBe("Harley");
      expect(meglomaniac.henchWoman).toBe(undefined);
    });
  });
  

  it("should know properties that are functions act like methods", function () {
    var meglomaniac = { 
      mastermind : "Brain", 
      henchman: "Pinky",
      battleCry: function (noOfBrains) {
        return "They are " + this.henchman + " and the" +
          Array(noOfBrains + 1).join(" " + this.mastermind);
      }
    };
   
    var battleCry = meglomaniac.battleCry(4);
    expect(battleCry).toMatch(battleCry);
  });

  it("should confirm that when a function is attached to an object, 'this' refers to the object", function () {
    var currentDate = new Date()