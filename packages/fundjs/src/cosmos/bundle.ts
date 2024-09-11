//@ts-nocheck
import * as _3 from "./auth/v1beta1/auth";
import * as _4 from "./auth/v1beta1/genesis";
import * as _5 from "./auth/v1beta1/query";
import * as _6 from "./authz/v1beta1/authz";
import * as _7 from "./authz/v1beta1/event";
import * as _8 from "./authz/v1beta1/genesis";
import * as _9 from "./authz/v1beta1/query";
import * as _10 from "./authz/v1beta1/tx";
import * as _11 from "./bank/v1beta1/authz";
import * as _12 from "./bank/v1beta1/bank";
import * as _13 from "./bank/v1beta1/genesis";
import * as _14 from "./bank/v1beta1/query";
import * as _15 from "./bank/v1beta1/tx";
import * as _16 from "./base/abci/v1beta1/abci";
import * as _17 from "./base/query/v1beta1/pagination";
import * as _18 from "./base/reflection/v2alpha1/reflection";
import * as _19 from "./base/tendermint/v1beta1/query";
import * as _20 from "./base/v1beta1/coin";
import * as _21 from "./crisis/v1beta1/genesis";
import * as _22 from "./crisis/v1beta1/tx";
import * as _23 from "./crypto/ed25519/keys";
import * as _24 from "./crypto/hd/v1/hd";
import * as _25 from "./crypto/keyring/v1/record";
import * as _26 from "./crypto/multisig/keys";
import * as _27 from "./crypto/secp256k1/keys";
import * as _28 from "./crypto/secp256r1/keys";
import * as _29 from "./distribution/v1beta1/distribution";
import * as _30 from "./distribution/v1beta1/genesis";
import * as _31 from "./distribution/v1beta1/query";
import * as _32 from "./distribution/v1beta1/tx";
import * as _33 from "./evidence/v1beta1/evidence";
import * as _34 from "./evidence/v1beta1/genesis";
import * as _35 from "./evidence/v1beta1/query";
import * as _36 from "./evidence/v1beta1/tx";
import * as _37 from "./feegrant/v1beta1/feegrant";
import * as _38 from "./feegrant/v1beta1/genesis";
import * as _39 from "./feegrant/v1beta1/query";
import * as _40 from "./feegrant/v1beta1/tx";
import * as _41 from "./gov/v1/genesis";
import * as _42 from "./gov/v1/gov";
import * as _43 from "./gov/v1/query";
import * as _44 from "./gov/v1/tx";
import * as _45 from "./gov/v1beta1/genesis";
import * as _46 from "./gov/v1beta1/gov";
import * as _47 from "./gov/v1beta1/query";
import * as _48 from "./gov/v1beta1/tx";
import * as _49 from "./group/v1/events";
import * as _50 from "./group/v1/genesis";
import * as _51 from "./group/v1/query";
import * as _52 from "./group/v1/tx";
import * as _53 from "./group/v1/types";
import * as _54 from "./slashing/v1beta1/genesis";
import * as _55 from "./slashing/v1beta1/query";
import * as _56 from "./slashing/v1beta1/slashing";
import * as _57 from "./slashing/v1beta1/tx";
import * as _58 from "./staking/v1beta1/authz";
import * as _59 from "./staking/v1beta1/genesis";
import * as _60 from "./staking/v1beta1/query";
import * as _61 from "./staking/v1beta1/staking";
import * as _62 from "./staking/v1beta1/tx";
import * as _63 from "./tx/signing/v1beta1/signing";
import * as _64 from "./tx/v1beta1/service";
import * as _65 from "./tx/v1beta1/tx";
import * as _66 from "./upgrade/v1beta1/query";
import * as _67 from "./upgrade/v1beta1/tx";
import * as _68 from "./upgrade/v1beta1/upgrade";
import * as _125 from "./authz/v1beta1/tx.amino";
import * as _126 from "./bank/v1beta1/tx.amino";
import * as _127 from "./crisis/v1beta1/tx.amino";
import * as _128 from "./distribution/v1beta1/tx.amino";
import * as _129 from "./evidence/v1beta1/tx.amino";
import * as _130 from "./feegrant/v1beta1/tx.amino";
import * as _131 from "./gov/v1/tx.amino";
import * as _132 from "./gov/v1beta1/tx.amino";
import * as _133 from "./group/v1/tx.amino";
import * as _134 from "./slashing/v1beta1/tx.amino";
import * as _135 from "./staking/v1beta1/tx.amino";
import * as _136 from "./upgrade/v1beta1/tx.amino";
import * as _137 from "./authz/v1beta1/tx.registry";
import * as _138 from "./bank/v1beta1/tx.registry";
import * as _139 from "./crisis/v1beta1/tx.registry";
import * as _140 from "./distribution/v1beta1/tx.registry";
import * as _141 from "./evidence/v1beta1/tx.registry";
import * as _142 from "./feegrant/v1beta1/tx.registry";
import * as _143 from "./gov/v1/tx.registry";
import * as _144 from "./gov/v1beta1/tx.registry";
import * as _145 from "./group/v1/tx.registry";
import * as _146 from "./slashing/v1beta1/tx.registry";
import * as _147 from "./staking/v1beta1/tx.registry";
import * as _148 from "./upgrade/v1beta1/tx.registry";
import * as _149 from "./auth/v1beta1/query.lcd";
import * as _150 from "./authz/v1beta1/query.lcd";
import * as _151 from "./bank/v1beta1/query.lcd";
import * as _152 from "./base/tendermint/v1beta1/query.lcd";
import * as _153 from "./distribution/v1beta1/query.lcd";
import * as _154 from "./evidence/v1beta1/query.lcd";
import * as _155 from "./feegrant/v1beta1/query.lcd";
import * as _156 from "./gov/v1/query.lcd";
import * as _157 from "./gov/v1beta1/query.lcd";
import * as _158 from "./group/v1/query.lcd";
import * as _159 from "./slashing/v1beta1/query.lcd";
import * as _160 from "./staking/v1beta1/query.lcd";
import * as _161 from "./tx/v1beta1/service.lcd";
import * as _162 from "./upgrade/v1beta1/query.lcd";
import * as _163 from "./auth/v1beta1/query.rpc.Query";
import * as _164 from "./authz/v1beta1/query.rpc.Query";
import * as _165 from "./bank/v1beta1/query.rpc.Query";
import * as _166 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _167 from "./distribution/v1beta1/query.rpc.Query";
import * as _168 from "./evidence/v1beta1/query.rpc.Query";
import * as _169 from "./feegrant/v1beta1/query.rpc.Query";
import * as _170 from "./gov/v1/query.rpc.Query";
import * as _171 from "./gov/v1beta1/query.rpc.Query";
import * as _172 from "./group/v1/query.rpc.Query";
import * as _173 from "./slashing/v1beta1/query.rpc.Query";
import * as _174 from "./staking/v1beta1/query.rpc.Query";
import * as _175 from "./tx/v1beta1/service.rpc.Service";
import * as _176 from "./upgrade/v1beta1/query.rpc.Query";
import * as _177 from "./authz/v1beta1/tx.rpc.msg";
import * as _178 from "./bank/v1beta1/tx.rpc.msg";
import * as _179 from "./crisis/v1beta1/tx.rpc.msg";
import * as _180 from "./distribution/v1beta1/tx.rpc.msg";
import * as _181 from "./evidence/v1beta1/tx.rpc.msg";
import * as _182 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _183 from "./gov/v1/tx.rpc.msg";
import * as _184 from "./gov/v1beta1/tx.rpc.msg";
import * as _185 from "./group/v1/tx.rpc.msg";
import * as _186 from "./slashing/v1beta1/tx.rpc.msg";
import * as _187 from "./staking/v1beta1/tx.rpc.msg";
import * as _188 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _229 from "./lcd";
import * as _230 from "./rpc.query";
import * as _231 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._3,
      ..._4,
      ..._5,
      ..._149,
      ..._163
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._125,
      ..._137,
      ..._150,
      ..._164,
      ..._177
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._126,
      ..._138,
      ..._151,
      ..._165,
      ..._178
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._16
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._17
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._18
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._19,
        ..._152,
        ..._166
      };
    }
    export const v1beta1 = {
      ..._20
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._21,
      ..._22,
      ..._127,
      ..._139,
      ..._179
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._23
    };
    export namespace hd {
      export const v1 = {
        ..._24
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._25
      };
    }
    export const multisig = {
      ..._26
    };
    export const secp256k1 = {
      ..._27
    };
    export const secp256r1 = {
      ..._28
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._128,
      ..._140,
      ..._153,
      ..._167,
      ..._180
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._33,
      ..._34,
      ..._35,
      ..._36,
      ..._129,
      ..._141,
      ..._154,
      ..._168,
      ..._181
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._37,
      ..._38,
      ..._39,
      ..._40,
      ..._130,
      ..._142,
      ..._155,
      ..._169,
      ..._182
    };
  }
  export namespace gov {
    export const v1 = {
      ..._41,
      ..._42,
      ..._43,
      ..._44,
      ..._131,
      ..._143,
      ..._156,
      ..._170,
      ..._183
    };
    export const v1beta1 = {
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._132,
      ..._144,
      ..._157,
      ..._171,
      ..._184
    };
  }
  export namespace group {
    export const v1 = {
      ..._49,
      ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._133,
      ..._145,
      ..._158,
      ..._172,
      ..._185
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._134,
      ..._146,
      ..._159,
      ..._173,
      ..._186
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._135,
      ..._147,
      ..._160,
      ..._174,
      ..._187
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._63
      };
    }
    export const v1beta1 = {
      ..._64,
      ..._65,
      ..._161,
      ..._175
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._66,
      ..._67,
      ..._68,
      ..._136,
      ..._148,
      ..._162,
      ..._176,
      ..._188
    };
  }
  export const ClientFactory = {
    ..._229,
    ..._230,
    ..._231
  };
}