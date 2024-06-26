<?php

function is_prime($n) {
    if ($n <= 1) {
        return false;
    }
    for ($i = 2; $i <= sqrt($n); $i++) {
        if ($n % $i == 0) {
            return false;
        }
    }
    return true;
}

echo "Prime numbers:\n";
for ($i = 1; $i <= 100; $i++) {
    if (is_prime($i)) {
        echo "$i: yes\n";
    } else {
        echo "$i: no\n";
    }
}

?>
