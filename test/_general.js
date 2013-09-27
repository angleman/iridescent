var should = require('should')
//  , fs     = require('fs')
//  , iridescent_data = '/tmp/iridescent.json'
;

// clean up from prior run
//if (fs.existsSync(iridescent_data)) {
//    fs.unlinkSync(iridescent_data);
//}



describe('iridescent', function() {
    describe('should', function() {
    	var iridescent;
    	it('load without errors', function() {
	        iridescent = require('../index.js');
        });

        iridescent = require('../index.js');
        var flag = false;
        beforeEach(function(done){
            this.timeout(15 * 1000); // allow test to run for 15 seconds
//            iridescent({
//            }, function(err, data) {
                flag = (!err);
                done(); // complete the async beforeEach
//            });
        });   

    	it('callback ok', function() {
			 flag.should.equal(true);
        });

    });
});