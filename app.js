$(document).ready(function(){
  var loggedInUserObj = {};

  $('.log-in').on('click', function(){
    $('.start-options').html('');
  });

  $('.btn-sign-up').on('click', function(){
    //$('.start-options').html('');
    $('.display').text('')
    $('.start-options').css({"display": 'none'});
    $('.sign-up').css({"display": 'block'});
    $('.log-in-email').val("");
    $('.log-in-password').val("");
  });

  $('.btn-create-account').on('click', function(){
    if($('.first-name').val() === '' || $('.last-name').val() === '' || $('.email').val() === '' 
      || $('.password').val() === '' || $('.password-check').val() === ''){
      //$('.display').text('Missing required fields');
      alert('Missing required fields');
    } else 
    if (localStorage[$('.email').val()] !== undefined){
      //$('.display').text('This email is already being used');
      alert('This email is already being used');
    } else if ($('.password').val() !== $('.password-check').val()){
      //$('.display').text('Password does not match');
      alert('Password does not match');
    } else {
      $('.display').text('');
      var accountObj = {};
      accountObj.firstName = $('.first-name').val();
      accountObj.lastName = $('.last-name').val();
      accountObj.email = $('.email').val();
      accountObj.password = $('.password').val();
      localStorage.setItem($('.email').val(), JSON.stringify(accountObj));

      $('.sign-up').css({"display": 'none'});
      $('.account-created').css({"display": 'block'});
      $('.first-name').val("");
      $('.last-name').val("");
      $('.email').val("");
      $('.password').val("");
      $('.password-check').val("");
    }
  });

  $('.back-home').on('click', function(){
    $('.account-created').css({"display": 'none'});
    $('.start-options').css({"display": 'block'});
  });

  $('.btn-log-in').on('click', function(){
    //$('.start-options').css({"display": 'none'});
    if(localStorage.getItem($('.log-in-email').val()) === null){
      //$('.display').text('Your email or password is incorrect. Please try again.');
      alert('Your email or password is incorrect. Please try again.')
    } else {
      var userObj = JSON.parse(localStorage[$('.log-in-email').val()]);
      var password = userObj.password;
      if($('.log-in-password').val() !== password){
        //$('.display').text('Your email or password is incorrect. Please try again.');
        alert('Your email or password is incorrect. Please try again.');
      } else {
        $('.display').text('');
        loggedInUserObj.email = localStorage[$('.log-in-email').val()];
        loggedInUserObj.password = password;
        $('.start-options').css({"display": 'none'});
        //$('.display').text('Logged in!');
        $('.my-account').css({"display": 'block'});
        $('.log-in-email').val("");
        $('.log-in-password').val("");
      }
    }
  });

  $('.btn-delete-account').on('click', function(){
    $('.my-account').css({"display": 'none'});
    $('.delete-account').css({"display": 'block'});
  });

  $('.final-delete').on('click', function(){
    if(localStorage.getItem($('.delete-email').val()) === null || localStorage.getItem($('.delete-email').val()) !== loggedInUserObj.email){
      //$('.display').text('Your email or password is incorrect. Please try again.')
      alert('Your email or password is incorrect. Please try again.');
    } else {
      var userObj = JSON.parse(localStorage[$('.delete-email').val()]);
      var password = userObj.password;
      if($('.delete-password').val() !== password){
        //$('.display').text('Your email or password is incorrect. Please try again.')
        alert('Your email or password is incorrect. Please try again.');
      } else {
        $('.display').text('');
        localStorage.removeItem($('.delete-email').val());
        $('.delete-account').css({"display": 'none'});
        $('.start-options').css({"display": 'block'});
        $('.delete-email').val("");
        $('.delete-password').val("");
      }
    }
  });


});