		function input() {
		    //获取点击事件元素内的字符串
		    $id = event.target.id;
		    var $num = document.getElementById($id).innerHTML;
		    //获取当前文本框的内容
		    var $txt = document.getElementById("expression").value;
		    //对文本框的内容进行判断输出。检测用户是否输入了文本
		    if ($txt == "请输入要计算的内容" || $txt == "") {
		        document.getElementById("expression").value = $num; //用户第一次输入文本
		    } else {
		        document.getElementById("expression").value = $txt + $num; //非第一次输入文本
		    }
		}


		function calculate() {
		    var $txt = document.getElementById("expression").value; //获取输入框内容
		    var $checkTxt_1st = $txt.substr(0, 1); //截取字符串的第一个字符
		    var $checkTxt_last = $txt.substr(-1, 1); //截取字符串的最后一个字符
		    var $bracketNumLeft = 0;
		    var $bracketNumRight = 0;
		    var $txt_length = $txt.length; //获取字符串长度
		    //遍历字符串，获取左括号和右括号的数量值存入变量




		    //检测用户输入的字符串开头和结尾
		    if ($checkTxt_1st == "*" || $checkTxt_1st == "/" || $checkTxt_1st == ")" || $checkTxt_last == "+" || $checkTxt_last == "-" || $checkTxt_last == "*" || $checkTxt_last == "/" || $checkTxt_last == "(") {
		        //字符串的第一个字符不能是“ * / ）”，最后一个字符不能是“ + - * / （ ”。
		        document.getElementById("result").value = "请检查输入的内容";
		    }




		    //检测用户输入的左括号和右括号数量是否相等
		    for ($i = 0; $i < $txt_length; $i++) {
		        $bracket = $txt.substr([$i], 1);
		        //alert($bracket);
		        if ($bracket == "(") {
		            $bracketNumLeft++;
		        } else if ($bracket == ")") {
		            $bracketNumRight++;
		        }
		    }
		    if ($bracketNumLeft !== $bracketNumRight) {
		        document.getElementById("result").value = "请检查括号是否正确";
		    }
		    //alert($bracketNumRight);







		    //遍历字符串，判断是否出现连续相同符号，且连续相同字符是数字，是(( 是 )) 
		    var $sameStr = 0;
		    for ($i = 0; $i < $txt_length - 1; $i++) {
		        //是否有连续相同字符
		        if ($txt.substr([$i], 1) == $txt.substr([$i + 1], 1)) {
		            //连续相同字符是否是数字或者括号
		            if (isNaN($txt.substr([$i], 1)) == isNaN($txt.substr([$i + 1], 1))) {
		                if ($txt.substr([$i], 1) != "(") {
		                    document.getElementById("result").value = "请检查输入的内容";
		                }
		            }
		        }
		    }

		    //alert($sameStr);


		    //判断运算符是否独立
		    for ($i = 0; $i < $txt_length; $i++) {
		        if (($txt.substr([$i], 1) == "+" || $txt.substr([$i], 1) == "-" || $txt.substr([$i], 1) == "*" || $txt.substr([$i], 1) == "/") && !((isNaN($txt.substr([$i - 1], 1) == "false" || $txt.substr([$i - 1], 1) == ")")) && (
		                (isNaN($txt.substr([$i + 1], 1)) == "false" || $txt.substr([$i + 1], 1) !== "(")))) {
		            document.getElementById("result").value = "请检查输入的内容";


		        }
		    }


		    //判断小数点前后的内容
		    for ($i = 0; $i < $txt_length; $i++) {
		        if ($txt.substr([$i], 1) == "." && !((isNaN($txt.substr([$i - 1], 1))) == "false" || (isNaN($txt.substr([$i + 1], 1))) == "false")) {
		            document.getElementById("result").value = "请检查输入的内容";
		        }
		    }


		    //调用函数计算结果
		    $result = parseFloat(eval($txt).toFixed(8)); //计算结果
		    if ($result == "Infinity") {
		        $result = "NaN";
		    }
		    document.getElementById("result").value = $result; //输出结果
		}


		//清除输入框和结果框中的内容
		function clearContent() {
		    document.getElementById("expression").value = "";
		    document.getElementById("result").value = "";
		}


		//退格键
		function backspace() {
		    var $txt = document.getElementById("expression").value;
		    var $txt_length = $txt.length
		    if ($txt_length > 0) {
		        document.getElementById("expression").value = $txt.substr(0, [$txt_length - 1]);
		    }

		}
