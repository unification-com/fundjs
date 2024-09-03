//@ts-nocheck
import * as _20 from './auth/v1beta1/auth';
import * as _21 from './auth/v1beta1/genesis';
import * as _22 from './auth/v1beta1/query';
import * as _158 from './auth/v1beta1/query.lcd';
import * as _170 from './auth/v1beta1/query.rpc.Query';
import * as _23 from './authz/v1beta1/authz';
import * as _24 from './authz/v1beta1/event';
import * as _25 from './authz/v1beta1/genesis';
import * as _26 from './authz/v1beta1/query';
import * as _159 from './authz/v1beta1/query.lcd';
import * as _171 from './authz/v1beta1/query.rpc.Query';
import * as _27 from './authz/v1beta1/tx';
import * as _138 from './authz/v1beta1/tx.amino';
import * as _148 from './authz/v1beta1/tx.registry';
import * as _182 from './authz/v1beta1/tx.rpc.msg';
import * as _28 from './bank/v1beta1/authz';
import * as _29 from './bank/v1beta1/bank';
import * as _30 from './bank/v1beta1/genesis';
import * as _31 from './bank/v1beta1/query';
import * as _160 from './bank/v1beta1/query.lcd';
import * as _172 from './bank/v1beta1/query.rpc.Query';
import * as _32 from './bank/v1beta1/tx';
import * as _139 from './bank/v1beta1/tx.amino';
import * as _149 from './bank/v1beta1/tx.registry';
import * as _183 from './bank/v1beta1/tx.rpc.msg';
import * as _33 from './base/abci/v1beta1/abci';
import * as _34 from './base/query/v1beta1/pagination';
import * as _35 from './base/reflection/v2alpha1/reflection';
import * as _36 from './base/v1beta1/coin';
import * as _37 from './crypto/ed25519/keys';
import * as _38 from './crypto/hd/v1/hd';
import * as _39 from './crypto/keyring/v1/record';
import * as _40 from './crypto/multisig/keys';
import * as _41 from './crypto/secp256k1/keys';
import * as _42 from './crypto/secp256r1/keys';
import * as _43 from './distribution/v1beta1/distribution';
import * as _44 from './distribution/v1beta1/genesis';
import * as _45 from './distribution/v1beta1/query';
import * as _161 from './distribution/v1beta1/query.lcd';
import * as _173 from './distribution/v1beta1/query.rpc.Query';
import * as _46 from './distribution/v1beta1/tx';
import * as _140 from './distribution/v1beta1/tx.amino';
import * as _150 from './distribution/v1beta1/tx.registry';
import * as _184 from './distribution/v1beta1/tx.rpc.msg';
import * as _47 from './feegrant/v1beta1/feegrant';
import * as _48 from './feegrant/v1beta1/genesis';
import * as _49 from './feegrant/v1beta1/query';
import * as _162 from './feegrant/v1beta1/query.lcd';
import * as _174 from './feegrant/v1beta1/query.rpc.Query';
import * as _50 from './feegrant/v1beta1/tx';
import * as _141 from './feegrant/v1beta1/tx.amino';
import * as _151 from './feegrant/v1beta1/tx.registry';
import * as _185 from './feegrant/v1beta1/tx.rpc.msg';
import * as _51 from './gov/v1/genesis';
import * as _52 from './gov/v1/gov';
import * as _53 from './gov/v1/query';
import * as _163 from './gov/v1/query.lcd';
import * as _175 from './gov/v1/query.rpc.Query';
import * as _54 from './gov/v1/tx';
import * as _142 from './gov/v1/tx.amino';
import * as _152 from './gov/v1/tx.registry';
import * as _186 from './gov/v1/tx.rpc.msg';
import * as _55 from './gov/v1beta1/genesis';
import * as _56 from './gov/v1beta1/gov';
import * as _57 from './gov/v1beta1/query';
import * as _164 from './gov/v1beta1/query.lcd';
import * as _176 from './gov/v1beta1/query.rpc.Query';
import * as _58 from './gov/v1beta1/tx';
import * as _143 from './gov/v1beta1/tx.amino';
import * as _153 from './gov/v1beta1/tx.registry';
import * as _187 from './gov/v1beta1/tx.rpc.msg';
import * as _59 from './group/v1/events';
import * as _60 from './group/v1/genesis';
import * as _61 from './group/v1/query';
import * as _165 from './group/v1/query.lcd';
import * as _177 from './group/v1/query.rpc.Query';
import * as _62 from './group/v1/tx';
import * as _144 from './group/v1/tx.amino';
import * as _154 from './group/v1/tx.registry';
import * as _188 from './group/v1/tx.rpc.msg';
import * as _63 from './group/v1/types';
import * as _215 from './lcd';
import * as _64 from './params/v1beta1/params';
import * as _65 from './params/v1beta1/query';
import * as _166 from './params/v1beta1/query.lcd';
import * as _178 from './params/v1beta1/query.rpc.Query';
import * as _216 from './rpc.query';
import * as _217 from './rpc.tx';
import * as _66 from './staking/v1beta1/authz';
import * as _67 from './staking/v1beta1/genesis';
import * as _68 from './staking/v1beta1/query';
import * as _167 from './staking/v1beta1/query.lcd';
import * as _179 from './staking/v1beta1/query.rpc.Query';
import * as _69 from './staking/v1beta1/staking';
import * as _70 from './staking/v1beta1/tx';
import * as _145 from './staking/v1beta1/tx.amino';
import * as _155 from './staking/v1beta1/tx.registry';
import * as _189 from './staking/v1beta1/tx.rpc.msg';
import * as _71 from './tx/signing/v1beta1/signing';
import * as _72 from './tx/v1beta1/service';
import * as _168 from './tx/v1beta1/service.lcd';
import * as _180 from './tx/v1beta1/service.rpc.Service';
import * as _73 from './tx/v1beta1/tx';
import * as _74 from './upgrade/v1beta1/query';
import * as _169 from './upgrade/v1beta1/query.lcd';
import * as _181 from './upgrade/v1beta1/query.rpc.Query';
import * as _75 from './upgrade/v1beta1/tx';
import * as _146 from './upgrade/v1beta1/tx.amino';
import * as _156 from './upgrade/v1beta1/tx.registry';
import * as _190 from './upgrade/v1beta1/tx.rpc.msg';
import * as _76 from './upgrade/v1beta1/upgrade';
import * as _77 from './vesting/v1beta1/tx';
import * as _147 from './vesting/v1beta1/tx.amino';
import * as _157 from './vesting/v1beta1/tx.registry';
import * as _191 from './vesting/v1beta1/tx.rpc.msg';
import * as _78 from './vesting/v1beta1/vesting';
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._20,
      ..._21,
      ..._22,
      ..._158,
      ..._170
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._138,
      ..._148,
      ..._159,
      ..._171,
      ..._182
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._28,
      ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._139,
      ..._149,
      ..._160,
      ..._172,
      ..._183
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._33
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._34
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._35
      };
    }
    export const v1beta1 = {
      ..._36
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._37
    };
    export namespace hd {
      export const v1 = {
        ..._38
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._39
      };
    }
    export const multisig = {
      ..._40
    };
    export const secp256k1 = {
      ..._41
    };
    export const secp256r1 = {
      ..._42
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._140,
      ..._150,
      ..._161,
      ..._173,
      ..._184
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._47,
      ..._48,
      ..._49,
      ..._50,
      ..._141,
      ..._151,
      ..._162,
      ..._174,
      ..._185
    };
  }
  export namespace gov {
    export const v1 = {
      ..._51,
      ..._52,
      ..._53,
      ..._54,
      ..._142,
      ..._152,
      ..._163,
      ..._175,
      ..._186
    };
    export const v1beta1 = {
      ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._143,
      ..._153,
      ..._164,
      ..._176,
      ..._187
    };
  }
  export namespace group {
    export const v1 = {
      ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._63,
      ..._144,
      ..._154,
      ..._165,
      ..._177,
      ..._188
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._64,
      ..._65,
      ..._166,
      ..._178
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._145,
      ..._155,
      ..._167,
      ..._179,
      ..._189
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._71
      };
    }
    export const v1beta1 = {
      ..._72,
      ..._73,
      ..._168,
      ..._180
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._74,
      ..._75,
      ..._76,
      ..._146,
      ..._156,
      ..._169,
      ..._181,
      ..._190
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._77,
      ..._78,
      ..._147,
      ..._157,
      ..._191
    };
  }
  export const ClientFactory = {
    ..._215,
    ..._216,
    ..._217
  };
}