function calc(n1,n2,o)//function declaration
{
 switch(o) //switch statement
 {
    case '+':
    return n1+n2
    break;
    case'-':
    return n1-n2
    break;
    case'*':
    return n1*n2
    break;
    case '/':
    return n1/n2
    break;
    default:
        console.log("Invalid Operator")
        break;
 }
}
console.log("Result: ",calc(1,2,'-'))//function call