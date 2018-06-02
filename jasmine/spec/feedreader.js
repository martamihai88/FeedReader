/* feedreader.js*/

$(function() {
  
    describe('RSS Feeds', function() {
        
        // test to see if allFeeds variable is defined
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        
        // test to see if allFeeds variables have links defined
        it('URL defined and not empty', function() {
            allFeeds.forEach(function(feeds) {
                expect(feeds.url).toBeDefined();
                expect(feeds.url.length).not.toBe(0);
            });
        });
        
        
        // test to see if allFeeds variables have names defined
        it('name defined and not empty', function() {
            allFeeds.forEach(function(feeds) {
                expect(feeds.name).toBeDefined();
                expect(feeds.name.length).not.toBe(0);
            });
        });
    });

    describe('The menu', function(){
        
        // test to see if the menu is hidden at launch
        it('hidden menu', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        
         // test to see if the menu changes visibility when the menu icon is clicked
        it('menu change', function(){
            
            if($('body').hasClass('menu-hidden') === true){
                expect($('body').hasClass('menu-hidden')).toBe(true);
            } else {
                expect($('body').hasClass('menu-hidden')).toBe(false);
            }
        });
        
    });       
    
    describe('Initial Entries', function(){
        // initialize asynchronous test
        beforeEach(function(done){
            loadFeed(0, done);  
        });
        
        // test to see if there is at least a single element in the  feed
        it('loadFeed working', function(done) {
            expect($('.feed .entry').length > 0).toBe(true);
            done();
        });
    });

    describe('New Feed Selection', function(){
        
        let oldFeed;
        
        // initialize asynchronous test
        beforeEach(function(done){
            loadFeed(0, function(){
                oldFeed = $('.feed').text();
                loadFeed(1,done);
            });  
        });
         // test to see if the content of the feed changes
        it('new feed is loaded', function() {   
            expect($('.feed').text()).not.toEqual(oldFeed);
        });  
    });
}());
