<?php

for ($i = 1; $i <= 100; $i++) {

  if (($i % 15) == 0) {
    print("fizzbuzz");
  }
    // in javascript, "else if"
  elseif (($i % 3) == 0) {
    print("fizz");
  }
    //
  elseif (($i % 5) == 0) {
    print("buzz");
  }
    //
  else {
    print("$i");
    // in javascript: print(i);
  }
  
  //print("<br>\n");
  print("\n");
}

# how to run:
# php fizzbuzz.php
