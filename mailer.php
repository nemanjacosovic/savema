<?php
session_start();

if (isset($_POST['Submit'])) {
  $nameOrCompany = $_POST['namesurname'];
  $mail = $_POST['mail'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];
  $urgent = $_POST['urgent'];
  $topic = $_POST['topic'];

  function topicSelected()
  {
    if (!empty($topic)) {
      $topicCount = count($topic);

      echo("Upit je u vezi sa: ");
      for ($i = 0; $i < $topicCount; $i++) {
        if ($i + 1 === $topicCount) {
          echo($topic[$i]);
        } else {
          echo($topic[$i] . ", ");
        }
      }
      echo('.');
    }
  }

  $to = 'sanja.popadic@epoksan.rs';
  $from = 'kontakt@savema.rs';
  $sentFrom = $urgent ? 'URGENTNO' : '' . '[sajt] SAVEMA ' . $nameOrCompany;

  $headers = "From: " . $from . "\r\n";
  $headers .= "Reply-To: ". $from . "\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

  $body = 'SAVEMA kontakt,
	
	 Ovu poruku je poslao: ' . $nameOrCompany . '
	 E-mail: ' . $mail . '
	 Broj telefona: ' . $phone . '
	
	 Tekst poruke: 
	 ' . $message . '

  ' . topicSelected() . '
  
  
  --
  Ova poruka je poslata sa SAVEMA sajta.
  NE ODGOVARAJTE NA OVAJ EMAIL

	|---------KRAJ PORUKE----------|';

  ini_set("sendmail_from", $from);

  $sent = mail($to, $sentFrom, $message, $headers);
  if ($sent) {
    echo "Hvala vam na poruci, javljamo se uskoro!";
    header("Location:hvala.html");
  } else {
    echo "Poruka nije poslata! Probajte ponovo!";
    header("Location:greska.html");
  }
} else {
  echo "Call for script execution is not correct.";
}
