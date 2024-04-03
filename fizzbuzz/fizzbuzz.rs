//! Rust implementation of FizzBuzz
//! source: https://www.fotonixx.com/posts/rust-fizzbuzz/

fn main() {
    for x in 1..=100 {
        if x % 3 == 0 && x % 5 == 0 {
            println!("fizzbuzz")
        } else if x % 3 == 0 {
            println!("fizz")
        } else if x % 5 == 0 {
            println!("buzz")
        } else {
            println!("{}", x)
        }
    }
}

// how to run:
// rustc fizzbuzz2.rs ; ./fizzbuzz2
