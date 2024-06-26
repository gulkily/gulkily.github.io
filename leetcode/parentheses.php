class Solution {

    /**
     * @param String $s
     * @return Boolean
     */
    function isValid($s) {
        #return true;
        $previous = "";
        /* loop through all characters in the string */
        for ($i = 0; $i < strlen($s); $i++) {
            $current = substr($s, $i, 1);
            #print($i . " " . $current);
            #print("\n");
            /* when a parentheses is opened, remember it */
            if ($current == '(' || $current == '[' || $current == '{') {
                $previous = $current;
            }
            /* when a parentheses is closed, verify that it is the same
           as the previous parentheses, forget the previously opened one */
           if ($current == ')' || $current == ']' || $current == '}') {
                if ($current == ')' && $previous == '(') {
                    # ok
                }
                else if ($current == ']' && $previous == '[') {
                    # ok
                }
                else if ($current == '}' && $previous == '{') {
                    # ok
                } else {
                    # not ok
                    return false;
                }

                $previous = '';
           }
        }

        return true;
    }
}
