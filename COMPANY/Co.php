<?php
include_once '../inc/header.php';
include_once '../inc/nav.php';
?>

    <div id="contaniner">
      <div class="wrap">
      <?php
    include_once '../inc/CoLeftHead.php';
    include_once '../inc/CoRightHead.php';
    ?>

      </div>
    </div>


    <script>
      var trace1 = {
  x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  y: [20, 14, 25, 16, 18, 22, 19, 15, 12, 16, 14, 17],
  type: 'bar',
  name: 'Present',
  marker: {
    color: '#16DEFE',
    opacity: 0.7,
  }
};

var trace2 = {
  x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  y: [19, 14, 22, 14, 16, 19, 15, 14, 10, 12, 12, 16],
  type: 'bar',
  name: 'In progress',
  marker: {
    color: '#1100D5',
    opacity: 0.5
  }
};
var trace3 = {
  x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  y: [19, 14, 22, 14, 16, 19, 15, 14, 10, 12, 12, 16],
  type: 'bar',
  name: 'Completed',
  marker: {
    color: '#9D2526',
    opacity: 0.5
  }
};

var data = [trace1, trace2 , trace3];

var layout = {
  title: '2013 Sales Report',
  xaxis: {
    tickangle: -45
  },
  barmode: 'group'
};

Plotly.newPlot('myDiv', data, layout);

    </script>
    <script>
      var data = [{
  values: [19, 26, 55],
  labels: ['In progress', 'Pending', 'Completed'],
  type: 'pie'
}];

var layout = {
  height: 400,
  width: 500
};

Plotly.newPlot('myDiv1', data, layout);

    </script>
    
    <?php
    include_once '../inc/footer.php';
    ?>
