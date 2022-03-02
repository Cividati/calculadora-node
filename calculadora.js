const validate  = require("validate.js");
const NumerosConstaint = require('./validate');

const Calculadora = {
    sum(num1, num2){
        return num1 + num2;
    },
    sub(num1, num2){
        return num1 - num2;
    },
    mul(num1, num2){
        return num1 * num2;
    },
    div(num1, num2){
        return num1 / num2;
    },
    pot(num1, num2){
        return num1 ** num2;
    },
    rad(num1, num2){
        return num1 ** (1/num2);
    },

    calculate(req, res){

        // read numbers from args
        const num1 = parseFloat(req.query.num1);
        const num2 = parseFloat(req.query.num2);
        const op = req.path; // -> /sum, /sub, /mul...

        // logging
        console.log('path:', op, '- num1:',num1,'- num2:', num2)

        // constraints
        const num1Validate = validate({num1}, NumerosConstaint.Constraint);
        const num2Validate = validate({num2}, NumerosConstaint.Constraint);
        
        if (num1Validate !== undefined ||
            num2Validate !== undefined){
            return [num1Validate, num2Validate]
        }

        if (op == '/sum'){
            res = this.sum(num1, num2)
            return `${num1} + ${num2} = ${res}`

        } else if (op == '/sub'){
            res = this.sub(num1, num2)
            return `${num1} - ${num2} = ${res}`

        } else if (op == '/mul'){
            res = this.mul(num1, num2)
            return `${num1} * ${num2} = ${res}`

        } else if (op == '/div'){
            res = this.div(num1, num2)
            return `${num1} / ${num2} = ${res}`

        } else if (op == '/pot'){
            res = this.pot(num1, num2)
            return `${num1} ^ ${num2} = ${res}`

        } else if (op == '/rad'){
            res = this.rad(num1, num2)
            return `${num1} ^ (1 / ${num2}) = ${res}`

        } 
      }
};

module.exports = Calculadora;