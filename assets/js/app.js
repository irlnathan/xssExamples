$(document).ready(function(){
  
  // Create user that contains bad <script>
  $('#create-user-button').click(function(){

    $.ajax({
      url: '/user/createUser',
      type: 'POST',
      success: function(result){
        console.log('result: ', result);
      },
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  });

  // Create Cookie
  $('#create-cookie-button').click(function(){
    document.cookie = 'unsafe=54321';
    console.log('Cookie Created!');
  });

  // Delete Cookie
  $('#delete-cookie-button').click(function(){
    document.cookie = "unsafe=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    console.log('cookie deleted');
  });

  // Show Profile Unsafe
  $('#show-profile-button').click(function(){

    window.location="/user/showProfile"
  });

    // Show Profile Unsafe
  $('#show-profile-safe-button').click(function(){

    window.location="/user/showProfileSafe"
  });

  // Delete User
  $('#delete-user-button').click(function(){
    $.ajax({
      url: '/user/deleteUser',
      type: 'DELETE',
      success: function(result){
        console.log('result: ', result);
      },
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  });
});