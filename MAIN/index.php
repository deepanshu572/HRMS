<?php
include_once '../inc/header.php';
include_once '../inc/nav.php';
?>
    
    <div class="main2">
      <div class="left2">
       <h2>Hello! <br>
       Log In!</h2>
      <div class="left">
            <form id="myForm" onsubmit = "retrieveFormData(event)">
                <input type="text" name ="login" placeholder="USER ID">
                <input type="text" name = "password" placeholder="PASSWORD">
                <button type ="submit" >Login</button>
              </form>
      </div>

      </div>
      <div class="right">
        <img src="../Assests/img/bg.png" alt="">
      </div>
    </div>




    <?php
include_once '../inc/footer.php';
?>