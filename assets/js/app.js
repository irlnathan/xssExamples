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

  // Show Profile
  $('#show-profile-button').click(function(){

    window.location="/user/showProfile"
  });

  // Show Profile
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