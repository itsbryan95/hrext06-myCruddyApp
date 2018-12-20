$(document).ready(function(){
  console.log('jQuery loaded');
  var $body = $('body');

  // write to local storage from input when button save clicked
  // $('.btn-submit').on('click', function(){
  //   localStorage.setItem('inputFieldValue', $('.text-entry').val());
  //   var myItemInStorage = localStorage.getItem('inputFieldValue');
  //   console.log('myItemInStorage', myItemInStorage);

  //   // display the value here
  //   $('.list-display-field').text(myItemInStorage); // ??

  // });

  // // delete from local storage when delete button clicked
  // $('.btn-delete').on('click', function(){
  //   localStorage.removeItem('inputFieldValue');
  // });


  $('.sign-up').on('click', function(){
    $('.start-options').html('');
    $('.container').css({"display": 'block'});
  });
  
  $('.create-account').on('click', function(){
    if($('.first-name').val() === '' || $('.last-name').val() === '' || $('.email').val() === '' 
      || $('.password').val() === '' || $('.password-check').val() === ''){
      $('.display').text('Missing required fields');
    } else if (localStorage[$('.email').val()] !== undefined){
      $('.display').text('This email is already being used');
    } else if ($('.password').val() !== $('.password-check').val()){
      $('.display').text('Password does not match');
    } else {
      var accountObj = {};
      accountObj.firstName = $('.first-name').val();
      accountObj.lastName = $('.last-name').val();
      accountObj.email = $('.email').val();
      accountObj.password = $('.password').val();
      localStorage.setItem($('.email').val(), JSON.stringify(accountObj));
      console.log(localStorage[$('.email').val()]);
    }
    // else {
    //   if($('.password').val() === $('.password-check').val()){
    //     var accountObj = {};
    //     accountObj.firstName = $('.first-name').val();
    //     accountObj.lastName = $('.last-name').val();
    //     accountObj.email = $('.email').val();
    //     accountObj.password = $('.password').val();
    //     localStorage.setItem($('.email').val(), JSON.stringify(accountObj));
    //     console.log(localStorage[$('.email').val()]);

    //   } else {
    //     $('.display').text('Password does not match');
    //   }
    //}
   //  var accountObj = {};
   //  accountObj.firstName = $('.first-name').val();
   //  accountObj.lastName = $('.last-name').val();
   //  accountObj.email = $('.email').val();
   //  accountObj.password = $('.password').val();
   //  localStorage.setItem($('.email').val(), JSON.stringify(accountObj));
   //  //localStorage.setItem(accountObj, $('.email').val());
   //  var myItemInStorage = localStorage.getItem($('.email').val());
   // console.log(myItemInStorage);
   // console.log(JSON.parse(myItemInStorage));
   //  //console.log($('.email').val(), JSON.stringify(myItemInStorage));
   //  for(key in localStorage){
   //    console.log(localStorage[key]);
   //  }
  })


});