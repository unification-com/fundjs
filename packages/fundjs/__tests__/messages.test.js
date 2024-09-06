"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
it('cosmos', () => {
    const message = src_1.cosmos.bank.v1beta1.MessageComposer.fromPartial.send({
        amount: [
            {
                amount: '1',
                denom: 'uatom'
            }
        ],
        fromAddress: 'myaddress',
        toAddress: 'youraddress'
    });
    expect(message).toMatchSnapshot();
});
