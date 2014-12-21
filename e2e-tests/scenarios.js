'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('flapper-news app', function() {

  browser.get('index.html');

  it('should automatically redirect to /home when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });


  describe('posts', function() {

    beforeEach(function() {
      browser.get('/#/posts');
    });


    //it('should render view1 when user navigates to /view1', function() {
    //  expect(element.all(by.css('[ng-view] p')).first().getText()).
    //    toMatch(/partial for view 1/);
    //});

  });

});

