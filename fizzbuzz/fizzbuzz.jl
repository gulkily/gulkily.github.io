function isFizzBuzz(n)
    if n % 3 == 0 && n % 5 == 0
        return "FizzBuzz"
    elseif n % 3 == 0
        return "Fizz"
    elseif n % 5 == 0
        return "Buzz"
    else
        return n
    end
end

# run fizzbuzz for numbers 1-100:
for i in 1:100
    println(isFizzBuzz(i))
end


# how to run:
# julia fizzbuzz.jl
