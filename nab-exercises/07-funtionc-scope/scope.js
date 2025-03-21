var age = 23;
{
  let test = "123";
  {
    console.log(age);
  }
}

let age = 40;

// because priority order is current > nearest > script ~= global
// in case script just have variable, value is unavailable
// script is also considered is a global, but for let, const and but mandatory is value is available, so that it can be accessible


