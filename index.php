<html>
  <head>
    <title>It's the final countdown</title>
    <meta charset="utf-8" />
    <link rel="icon" href="europe.png">
    <link rel="stylesheet" type="text/css" href="style.css" />
    <script src="https://code.jquery.com/jquery-latest.js"></script>
    <script type="text/javascript" src="hello.js"></script>
    <script type="text/javascript" src="script.js"></script>
  </head>

  <body>
    <p id="test">
    </p>

    <form id="enter_date">
      <input type="number" id="enter_year" placeholder="Jahr" min=2018 max=2022 />
      <input type="number" id="enter_month" placeholder="Monat" min=1 max=12 />
      <input type="number" id="enter_day" placeholder="Tag" min=1 max=31 />

      <button type="button" id="set_date">Das als Datum setzen</button>
    </form>

    <p>
      Heutiges Datum: <span id="current_date"></span>
    </p>

    <p>
      Datum auf das wir warten: <span id="future_date"></span>
    </p>

    <p>
      So lange dauert das Ganze noch:
    </p>


      <p>
      <span id="num_of_days"></span> Tage!
      </p>
    </div>


    <!-- <h1>Sag hallo</h1>

    <form action="post.php" method="POST">
    <p>Name</p> <input type="text" name="name">
    <p>Alter</p> <input type="text" name="age">
    <p>Wie soll man dich ansprechen?</p>
    <fieldset>
      <input type="radio" id="sie" name="anrede" value="Sie" />
      <label for="sie">Sie</label>
      <input type="radio" id="du" name="anrede" value="Du" />
      <label for="du">Du</label>
    </fieldset>

    <input type="submit" value="Send"><input type="reset" value="Clear">
    </form> -->

  </body>
</html>
