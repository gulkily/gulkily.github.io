#!/usr/bin/perl

use strict;

my $i; # used for loop counter

for ($i = 1; $i <= 100; $i++) {
  if (!($i % 3)) {        # not i % 3 ==> (i % 3 == FALSE)
    print("fizz");
  }

  if (!($i % 5)) {        # not i % 5 ==> (i % 5 == FALSE)
    print ("buzz");
  }
  
  if (($i % 3) && ($i % 5)) {         # else (not divisible by 3 or 5)
    print($i);
  }
  
  print("\n"); # new line
}

# how to run:
# perl fizzbuzz.pl
