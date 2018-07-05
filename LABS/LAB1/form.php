<?php print( '<?xml version = "1.0" encoding ="utf-8"?>' ) ?>
<html>
<head>
    <title>Using PHP document</title>
  </head>
  <?php
    $file = fopen("times.txt","r");
    $num = fgets($file);
    $num = $num+1;
    $file = fopen("times.txt","w");
    fwrite($file,$num);
    fclose($file);
    $abc = 8;
  ?>  
    <body style = "font-size: 2em">
	  <strong> 
        你的姓名為： <?php print("$_POST[fname]"); ?>!		
	  </strong>
	  <br/>
	  你的學號為： <?php print("$_POST[fid]"); ?>
	  <br/>
	  你猜的數字為： <?php print("$_POST[fnumber]"); ?>
	  <br/>
      <?php if($abc > "$_POST[fnumber]")
      {echo"再多一點";}
      else if ($abc < "$_POST[fnumber]")
      {echo"太多了啦";}
      else{echo"U got it";}
      ?> 	
	  <br/>
	  你總共猜了： <?php echo "$num" ?> 次
    </body>
  
    <br/>
    <input type="buttom" onclick="history.back()" value="回到上一頁"></input>
</html>
  

