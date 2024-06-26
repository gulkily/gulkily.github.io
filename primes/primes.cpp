#include <iostream>
#include <cmath>

bool is_prime(int n) {
    if (n <= 1) {
        return false;
    }
    for (int i = 2; i <= std::sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

int main() {
    std::cout << "Prime numbers:" << std::endl;
    for (int i = 1; i <= 100; i++) {
        if (is_prime(i)) {
            std::cout << i << ": yes" << std::endl;
        } else {
            std::cout << i << ": no" << std::endl;
        }
    }
    return 0;
}
