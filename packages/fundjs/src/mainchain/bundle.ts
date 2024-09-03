//@ts-nocheck
import * as _0 from './beacon/v1/beacon';
import * as _1 from './beacon/v1/genesis';
import * as _2 from './beacon/v1/query';
import * as _126 from './beacon/v1/query.lcd';
import * as _130 from './beacon/v1/query.rpc.Query';
import * as _3 from './beacon/v1/tx';
import * as _118 from './beacon/v1/tx.amino';
import * as _122 from './beacon/v1/tx.registry';
import * as _134 from './beacon/v1/tx.rpc.msg';
import * as _4 from './enterprise/v1/enterprise';
import * as _5 from './enterprise/v1/genesis';
import * as _6 from './enterprise/v1/query';
import * as _127 from './enterprise/v1/query.lcd';
import * as _131 from './enterprise/v1/query.rpc.Query';
import * as _7 from './enterprise/v1/tx';
import * as _119 from './enterprise/v1/tx.amino';
import * as _123 from './enterprise/v1/tx.registry';
import * as _135 from './enterprise/v1/tx.rpc.msg';
import * as _212 from './lcd';
import * as _213 from './rpc.query';
import * as _214 from './rpc.tx';
import * as _8 from './stream/v1/genesis';
import * as _9 from './stream/v1/params';
import * as _10 from './stream/v1/query';
import * as _128 from './stream/v1/query.lcd';
import * as _132 from './stream/v1/query.rpc.Query';
import * as _11 from './stream/v1/stream';
import * as _12 from './stream/v1/tx';
import * as _120 from './stream/v1/tx.amino';
import * as _124 from './stream/v1/tx.registry';
import * as _136 from './stream/v1/tx.rpc.msg';
import * as _13 from './wrkchain/v1/genesis';
import * as _14 from './wrkchain/v1/query';
import * as _129 from './wrkchain/v1/query.lcd';
import * as _133 from './wrkchain/v1/query.rpc.Query';
import * as _15 from './wrkchain/v1/tx';
import * as _121 from './wrkchain/v1/tx.amino';
import * as _125 from './wrkchain/v1/tx.registry';
import * as _137 from './wrkchain/v1/tx.rpc.msg';
import * as _16 from './wrkchain/v1/wrkchain';
export namespace mainchain {
  export namespace beacon {
    export const v1 = {
      ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._118,
      ..._122,
      ..._126,
      ..._130,
      ..._134
    };
  }
  export namespace enterprise {
    export const v1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._119,
      ..._123,
      ..._127,
      ..._131,
      ..._135
    };
  }
  export namespace stream {
    export const v1 = {
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._120,
      ..._124,
      ..._128,
      ..._132,
      ..._136
    };
  }
  export namespace wrkchain {
    export const v1 = {
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._121,
      ..._125,
      ..._129,
      ..._133,
      ..._137
    };
  }
  export const ClientFactory = {
    ..._212,
    ..._213,
    ..._214
  };
}