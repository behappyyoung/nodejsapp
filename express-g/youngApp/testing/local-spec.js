/**
 * Created by youngsug on 5/6/2016.
 */
// local- spec.js
describe('Protractor local server testing ', function() {
    
    it('should have a title', function() {
        browser.get('http://localhost:3000/');
        expect(browser.getTitle()).toEqual('Express');
    });




});
