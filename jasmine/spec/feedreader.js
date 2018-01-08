/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('is URL defined and the URL is not empty', function() {
            // Loops through each feed.
            allFeeds.forEach(function(feeds) {
                // Checks to make sure the URL is properly defined.
                expect(feeds.url).toBeDefined();
                // Checks to make sure the URL length is not empty.
                expect(feeds.url.length).not.toBe(0);
            });
            
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('is a name defined and the name is not empty', function() {
            // Loops through each feed.
            allFeeds.forEach(function(feeds) {
                // Checks to make sure each feed has an actual name assigned.
                expect(feeds.name).toBeDefined();
                // Checks to make sure each feed name is not empty.
                expect(feeds.name.length).not.toBe(0);
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */

    // Test suite for side bar.
    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        // Checks to see if the menu is hidden by default. 
        it('is the menu hidden by default', function() {
            // Uses class name from the body of the html and css to check that 'menu-hidden' is equal to true.
            expect($body.hasClass('menu-hidden')).toEqual(true);
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

        // Checks to see if menu changes visibility when clicked
        it('does visibility change when clicked', function() {
            // Uses class for menu icon from html to check for click.
            $('.menu-icon-link').trigger('click');
            // Verifies that menu is no longer hidden.
            expect($body.hasClass('menu-hidden')).toBe(false);
            // Uses class for menu icon from html to check for click.
            $('.menu-icon-link').trigger('click');
            // Verifies that menu is hidden again.
            expect($body.hasClass('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */

    // Test suite that tests for entries.
    describe('Initial Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        // This function does an async request. Data must be loaded before we can actually test results.
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        // Checks to see that the loadFeed function has at least one .entry element within .feed container.
        it('feed container has at least one .entry', function() {
            var entry = $('.feed .entry')[0];
            expect(entry).not.toBe(0);
            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */

    // Test suite that tests for new feeds
    describe('New Feed Selection', function() {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        var initialContent;

        // Async request
        beforeEach(function(done) {
            loadFeed(0, function() {
                initialContent = $('.feed').html();
                done();
            });
        });

        it('content actually changes with new feed', function(done) {
            // Checks to verify that content has actually changed.
            loadFeed(1, function() {
                expect($('.feed').html()).not.toBe(initialContent);
                done();
            });
        });
    });    
});
        
