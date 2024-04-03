#include <iostream>

int main() {
  for (int i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      std::cout << "fizzbuzz\n";
    } else if (i % 3 == 0) {
      std::cout << "fizz\n";
    } else if (i % 5 == 0) {
      std::cout << "buzz\n";
    } else {
      std::cout << i << "\n";
    }
  }

  return 0;
}

// how to run:
// g++ fizzbuzz.cpp -o fizzbuzz-cpp ; ./fizzbuzz-cpp
