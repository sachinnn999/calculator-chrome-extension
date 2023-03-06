document.getElementById("calc_btn_one").addEventListener("click", function(){dis('1')});
document.getElementById("calc_btn_two").addEventListener("click", function(){dis('2')});
document.getElementById("calc_btn_three").addEventListener("click", function(){dis('3')});
document.getElementById("calc_btn_four").addEventListener("click", function(){dis('4')});
document.getElementById("calc_btn_five").addEventListener("click", function(){dis('5')});
document.getElementById("calc_btn_six").addEventListener("click", function(){dis('6')});
document.getElementById("calc_btn_seven").addEventListener("click", function(){dis('7')});
document.getElementById("calc_btn_eight").addEventListener("click", function(){dis('8')});
document.getElementById("calc_btn_nine").addEventListener("click", function(){dis('9')});
document.getElementById("calc_btn_zero").addEventListener("click", function(){dis('0')});
document.getElementById("calc_btn_point").addEventListener("click", function(){dis('.')});

document.getElementById("calc_btn_divide").addEventListener("click", function(){dis('/')});
document.getElementById("calc_btn_multiply").addEventListener("click", function(){dis('*')});
document.getElementById("calc_btn_substract").addEventListener("click", function(){dis('-')});
document.getElementById("calc_btn_addition").addEventListener("click", function(){dis('+')});

document.getElementById("calc_btn_equal").addEventListener("click", solve);
// document.getElementById("calc_result").addEventListener("click", myFunction);
document.getElementById("calc_btn_clear").addEventListener("click", clr);

function dis(val) {
  // console.log(val);
  document.getElementById("calc_result").value += val;
}

function solve() {
  // console.log('solve');
  let x = document.getElementById("calc_result").value;
  let y = math.evaluate(x)
  document.getElementById("calc_result").value = y;
}
function clr() {
  // console.log('clr');
  document.getElementById("calc_result").value = "";
}