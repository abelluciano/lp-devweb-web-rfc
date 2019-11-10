<!doctype html>
<html lang="en">
<head>

  <meta charset="utf-8">

  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>RFC Information Online</title>

  <link href="./css/bootstrap.min.css" rel="stylesheet">
  <link href="./css/stylebg.css" rel="stylesheet">

</head>
<body>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="mx-auto order-0">
        <a class="navbar-brand mx-auto" style="font-size : 50px;"href="index.php">RFC Information Online</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  </header>

  <div class="col-sm-8" id="left">
    <ul class="list-group list-group-flush" >
      <li class="list-group-item"><a href="index.php?page=1" data-page="1">RFC1149</a></li>
      <li class="list-group-item"><a href="index.php?page=2" data-page="2">RFC2549</a></li>
      <li class="list-group-item"><a href="index.php?page=3" data-page="3">RFC6214</a></li>
    </ul>
  </div>

  <section id="right" style="padding-top : 3em;">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <div class="collapse show">
            <form class="navbar-form navbar-left" action="" method="get">
              <div class="input-group mb-3">
                <input type="text" name="v" placeholder="Search..."  class="form-control">
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="submit">Search</button>
                </div>
              </div>
            </form>
            <div class="col-lg-10 mx-auto" id="result">

            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="container" style="padding-bottom:10em;">
      <p class="float-right"><a href="#">Back to top</a></p>
      <p>This site was designed and developed by Lucien Abel</p>
    </footer>
  </section>


  <script src="./script/init.js"></script>
</body>
</html>
