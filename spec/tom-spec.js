//dont forget to import any objects!
import { Tom } from "./../js/scripts.js";
let tom = new Tom("Rodney");
describe('Tom', function(){
  beforeEach(function(){
    jasmine.clock().install();
    tom.hungryTom();
    tom.honryTom();
    tom.sweepyTom()
  });
  afterEach(function() {
    jasmine.clock().uninstall();
  });
  it("should have an name and have a value of 10 for food level, honry level and sweepy level", function() {
    expect(tom.name).toEqual("Rodney");
    expect(tom.foodLevel).toEqual(10);
    expect(tom.honryLevel).toEqual(10);
    expect(tom.sweepyLevel).toEqual(10);
  });
  it('should have a food level of 9 after 10 seconds, a honry level of 10 after 10 seconds, and a sleepy level of 8 after 10 seconds', function() {
    jasmine.clock().tick(10001);
    expect(tom.foodLevel).toEqual(9);
    expect(tom.honryLevel).toEqual(10);
    expect(tom.sweepyLevel).toEqual(8);
  });
  it('should have a food level of 10 after feedMe, a honry level of 100 after spankMe, and a sweepy level of 50 after sweepyTime', function(){
    tom.feedMe();
    expect(tom.foodLevel).toEqual(10);
    tom.spankMe();
    expect(tom.honryLevel).toEqual(100);
    tom.sweepyTime();
    expect(tom.sweepyLevel).toEqual(50);
  });
});
