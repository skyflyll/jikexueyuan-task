//监听一个事件
var EventHadlerUtil = {
    //获取事件
    addHandler: function(element, type, handler) {
        if (element.addEventListener) {
            //w3c
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            //ie
            element.attachEvent('on' + type, handler);
        } else {
            // dom0
            element['on' + type] = handler;
        }
    },
    //移除事件
    removeHandler: function(element, type, handler) {
        if (element.removeHandler) {
            //w3c
            element.removeHandler(type, handler, false);
        } else if (element.detachEvent) {
            //ie
            element.detachEvent('on' + type, handler);
        } else {
            // dom0
            element['on' + type] = null;
        }
    },
};

//定义变量区域开始
//临时保存数据
var n1 = null;
//保存计算变量和结果变量
var n2 = null;
// 保存计算符
var op = null;
//保存临时输入值方便退格
var tempNumber = [];
//保存小数点按下，每次只能输入一个小数点，默认为false
var haveDot = false;
//保存正数 默认输入为正数
var isPoitiveNum = true;
//定义变量区域结束

//获取点击的数字
var elementNums = document.getElementById('num');
EventHadlerUtil.addHandler(elementNums, 'click', function(e) {
    var target = e.target ? e.target : window.event.srcElement;
    if (target.tagName === 'LI') {
        var targetValue = target.innerHTML;
        if (targetValue === '.' && !haveDot) {
            //点击事件发生在小数点上还没有小数点输入
            tempNumber.push('.');
            haveDot = true;
        } else if (targetValue === '.' && haveDot) {
            //点击事件发生在小数点上 已有小数点输入
            return false;

        } else if (targetValue === '+/-' && isPoitiveNum) {
            //用户输入正负数，此时为正数
            tempNumber.unshift('-');
            isPoitiveNum = false;
        } else if (targetValue === '+/-' && !isPoitiveNum) {
            //用户输入正负数，此时为负数
            tempNumber.shift();
            isPoitiveNum = true;
        } else {
            //用户输入正常数字
            tempNumber.push(targetValue);
        }
        setN1(tempNumber);
        show(n1);
    }
});

function setN1(arg) {
    // 将传入的数组转化成数字
    var temp = arg.join('');
    //数字不为空
    if (!isNaN(parseFloat(temp))) {
        n1 = parseFloat(temp);
        show(tempNumber);
    } else {
        n1 = null;
        show(0);
    }
}

function show(arg) {
    var elementScreen = document.getElementById('result');
    if (Array.isArray(arg)) {
        elementScreen.innerHTML = parseFloat(arg.join(''));
    } else if (!isNaN(arg)) {
        elementScreen.innerHTML = parseFloat(arg.toFixed(6));
    } else {
        elementScreen.innerHTML = arg;
    }
}

// 四则运算
var elementControl = document.getElementById('control');
EventHadlerUtil.addHandler(elementControl, 'click', function(e) {
    var target = e.target ? e.target : window.event.srcElement;
    if (target.tagName === 'LI') {
        var targetValue = target.innerHTML;
        if (targetValue === 'c') {
            //退格事件
            tempNumber.pop();
            setN1(tempNumber);
        } else if (targetValue === '√') {
            //开方
            if (n1 != null) {
                n2 = Math.sqrt(n1);
                show(n2);
                n1 = null;
                tempNumber = [];
            }
        } else if (targetValue.match(/[\+\-×÷%]/)) {
            calculate();
            op = targetValue;
        } else {
            //按下等于符号
            calculate();
        }
    }
});

function reset() {
    n1 = null;
    tempNumber = [];
}
var calculate = function() {
        //如果n2null，说明之前还没有输入方法
        if (n2 === null) {
            n2 = n1;
            reset();
        } else {
            // 说明n1,n2 都有值 而且还被按下了
            switch (op) {
                case '+':
                    n2 += n1;
                    reset();
                    show(n2);
                    break;
                case '-':
                    n2 -= n1;
                    reset();
                    show(n2);
                    break;
                case '×':
                    if (n1 !== null) {
                        n2 *= n1;
                        reset();
                        show(n2);
                    }
                    break;
                case '÷':
                    if (n1 === 0) {
                        show("除数不能为0")
                    } else {
                        n2 /= n1;
                        reset();
                        show(n2);
                    }
                    break;
                case '%':
                    if (n1 === 0) {
                        show("除数不能为0")
                    } else {
                        n2 /= n1;
                        reset();
                        show(n2);
                    }
                    break;
                default:
                    console.log("有bug");
            }
        }
    }
    //高级计算区域
var elementPro = document.getElementById('pro');
EventHadlerUtil.addHandler(elementPro, 'click', function(e) {
    var target = e.target ? e.target : window.event.srcElement;
    if (target.tagName === 'LI') {
        var targetValue = target.innerHTML;
        switch (targetValue) {
            case 'AC':
                n1 = null;
                n2 = null;
                tempNumber = [];
                show(0);
                break;
            case 'sin':
                if (n1 !== null) {
                    n2 = parseFloat(Math.sin(n1 * 2 * Math.PI / 360).toFixed(6));
                    reset();
                    show(n2);
                }
                break;
            case 'cos':
                if (n1 !== null) {
                    n2 = parseFloat(Math.cos(n1 * 2 * Math.PI / 360).toFixed(6));
                    reset();
                    show(n2);
                }
                break;
            case 'tan':
                if (n1 !== null) {
                    n2 = parseFloat(Math.tan(n1 * 2 * Math.PI / 360).toFixed(6));
                    reset();
                    show(n2);
                }
                break;
            default:
                console.log("这应该看不见")
        }
    }
})
