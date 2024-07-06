
<?php
include_once '../inc/header.php';
include_once '../inc/nav.php';
?>


<div id="contaniner">
  <div class="wrap profile-wrap">
    <?php
    include_once '../inc/CoLeftHead.php';
    include_once '../inc/CoRightHead.php';
    ?>
</div>
</div>


<?php
include_once '../inc/footer.php';
?>
<script>
 function loadclass() {
    $("#tabs-wrap").css("width", "258px");
    $("#tabs").css("left", "0%");
    $("#pills-hr-tab").removeClass("active");
    $("#pills-hr").removeClass("active show");
    $("#pills-Empdata-tab").addClass("active");
    $("#pills-Empdata").addClass("active show");
}

loadclass();

</script>