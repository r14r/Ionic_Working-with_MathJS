import { Component } from '@angular/core';

import * as math from 'mathjs';

@Component({
    selector: 'app-home',
    templateUrl: 'math.page.html',
    styleUrls: ['math.page.scss'],
})
export class MathPage {

    samples = [
        {
            type: 'simplify',
            desc: 'Do some simple calculations',
            data: [
                  { val: '3 + 2 / 4' }
                , { val: '2x + 3x' }
                , { val: 'x^2 + x + 3 + x^2' }
                , { val: 'x * y * -x / (x ^ 2)' }
            ]
        },
        {
            type: 'derivative',
            desc: 'Derivate some functions',
            data: [
                  { val: 'x^2 + x' }
                , { val: 'sin(2x)' }
            ]
        },
        {
            type: 'eval',
            desc: 'Simple Expressions',
            data: [
                  { val: '1.2 * (2 + 4.5)' }
                , { val: 'sin(45 deg) ^ 2' }
                , { val: '9 / 3 + 2i' }
                , { val: 'det([-1, 2; 3, 1])' }
            ]
        },
        {
            type: 'eval',
            desc: 'Converting Units',
            data: [
                  { val: '12.7 cm to inch' }
                , { val: '90 km/h to m/s' }
                , { val: '9.81 m/s^2 * 100 kg * 40 m' }
                , { val: '100000 N / m^2' }
                , { val: '460 V * 20 A * 30 days' }
                // , { val: '460 V * 20 A * 30 days to kWh' }
            ]
        },
        {
            type: 'raw',
            desc: 'Examples with complex numbers',
            data: [
                  { val: math.complex(2, 3), txt: 'complex(2, 3)' }
                , { val: math.complex(2, 3).re, txt: 'complex(2, 3).re' }
                , { val: math.complex(2, 3).im, txt: 'complex(2, 3).im' }
                , { val: math.complex('3-7i'), txt: 'complex("3-7i")'}
                , { val: math.add(math.complex(2, 3), math.complex(4, 2)), txt: 'add(complex(2, 3), complex(4, 2))' }
                , { val: math.sqrt(-4), txt: 'math.sqrt(-4)' }
            ]
        },
        {
            type: 'raw',
            desc: 'Examples with fractions',
            data: [

                  { val: math.fraction(0.125), txt: 'fraction(0.125)' }
                , { val: math.fraction(0.32), txt: 'fraction(0.32)' }
                , { val: math.fraction('1/3'), txt: 'fraction(1/3)' }
                , { val: math.fraction('0.(3)'), txt: 'fraction(0.(3))' }
                , { val: math.fraction(2, 3), txt: 'fraction(2, 3)' }
                , { val: math.fraction('0.(285714)'), txt: 'fraction(0.(285714))' }
                , { val: math.format(math.fraction('2/3')), txt: 'format(fraction("2/3"))' }
            ]
        }
    ]
    constructor() {
        console.log('MathPage::constructor | samples = ', this.samples);
    }

    showdesc(txt, val): string {
        var result = val;

        if (txt != undefined) {
            result = txt;
        }

        return result;
    }

    calculate(type, formula): string {
        var result = "";

        if (type == 'simplify') {
            result = math.simplify(formula).toString();
        } else if (type == 'derivative') {
            result = math.derivative(formula, 'x').toString();
        } else if (type == 'eval') {
            result = math.eval(formula).toString();
        } else if (type == 'fraction') {
            result = math.fraction(formula).toString();
        } else if (type == 'raw') {
            result = eval(formula);
        }

        return result;
    }
}
