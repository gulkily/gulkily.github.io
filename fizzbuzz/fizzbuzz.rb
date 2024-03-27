# https://gist.github.com/Kerrick/2483510

def fizz_buzz_1(max)
  arr = []
  (1..max).each do |n|
    if ((n % 3 == 0) && (n % 5 == 0))
      arr << "fizzbuzz"
    elsif (n % 3 == 0)
      arr << "fizz"
    elsif (n % 5 == 0)
      arr << "buzz"
    else
      arr << n
    end
  end
  return arr
end


def main()
  arr = fizz_buzz_1(100)

  puts arr
end

main()
