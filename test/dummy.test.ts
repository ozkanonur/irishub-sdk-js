import { setTimeout } from 'timers';
import * as types from '../src/types';
import { BaseTest } from './basetest';

const timeout = 10000;

describe('Dummy Tests', () => {
  describe('Swap Order', () => {
    test(
      'swap order',
      async () => {
        await BaseTest.getClient()
          .coinswap.swapOrder(
            {
              denom: 'unyan',
              amount: '100000000',
            }, {
              denom: 'ibc/5C465997B4F582F602CD64E12031C6A6E18CAF1E6EDC9B5D808822DC0B5F850C',
              amount: '6799434',
            }, false,
            new Date().getTime() + 5,
            BaseTest.baseTx
          )
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });
      },
      timeout
    );
  });

  setTimeout(() => {}, 5000)

  const amount: types.Coin[] = [
    {
      denom: 'ibc/5C465997B4F582F602CD64E12031C6A6E18CAF1E6EDC9B5D808822DC0B5F850C',
      amount: '683142',
    },
  ];

  const msgs: any[] = [
    {
      type:types.TxType.MsgSend,
      value:{
        from_address:'iaa174qyl02cupyqq77cqqtdl0frda6dl3rp2h9snu',
        to_address:'iaa1e0rx87mdj79zejewuc4jg7ql9ud2286g2us8f2',
        amount
      }
    }
  ];

  describe('Broadcast', () => {
    test('more messages', async () => {
        await BaseTest.getClient()
        .tx.buildAndSend(msgs,BaseTest.baseTx)
        .then(res => {
            console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });;
      },
      timeout
    );
  });
});