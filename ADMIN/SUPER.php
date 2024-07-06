    <?php
    include_once '../inc/header.php';
    include_once '../inc/nav.php';
    ?>

      <div id="contaniner">
        <div class="wrap">
          <?php
        include_once '../inc/SuperLeftHead.php';
        include_once '../inc/SuperRightHead.php';
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
        color: '#d71818',
        opacity: 0.7,
      }
    };

    var data = [trace1];

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
      labels: ['Present', 'Absent', 'Holiday'],
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
