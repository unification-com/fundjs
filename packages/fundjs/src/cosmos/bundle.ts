//@ts-nocheck
import * as _20 from "./auth/v1beta1/auth";
import * as _21 from "./auth/v1beta1/genesis";
import * as _22 from "./auth/v1beta1/query";
import * as _23 from "./authz/v1beta1/authz";
import * as _24 from "./authz/v1beta1/event";
import * as _25 from "./authz/v1beta1/genesis";
import * as _26 from "./authz/v1beta1/query";
import * as _27 from "./authz/v1beta1/tx";
import * as _28 from "./bank/v1beta1/authz";
import * as _29 from "./bank/v1beta1/bank";
import * as _30 from "./bank/v1beta1/genesis";
import * as _31 from "./bank/v1beta1/query";
import * as _32 from "./bank/v1beta1/tx";
import * as _33 from "./base/abci/v1beta1/abci";
import * as _34 from "./base/query/v1beta1/pagination";
import * as _35 from "./base/reflection/v2alpha1/reflection";
import * as _36 from "./base/tendermint/v1beta1/query";
import * as _37 from "./base/v1beta1/coin";
import * as _38 from "./crisis/v1beta1/genesis";
import * as _39 from "./crisis/v1beta1/tx";
import * as _40 from "./crypto/ed25519/keys";
import * as _41 from "./crypto/hd/v1/hd";
import * as _42 from "./crypto/keyring/v1/record";
import * as _43 from "./crypto/multisig/keys";
import * as _44 from "./crypto/secp256k1/keys";
import * as _45 from "./crypto/secp256r1/keys";
import * as _46 from "./distribution/v1beta1/distribution";
import * as _47 from "./distribution/v1beta1/genesis";
import * as _48 from "./distribution/v1beta1/query";
import * as _49 from "./distribution/v1beta1/tx";
import * as _50 from "./evidence/v1beta1/evidence";
import * as _51 from "./evidence/v1beta1/genesis";
import * as _52 from "./evidence/v1beta1/query";
import * as _53 from "./evidence/v1beta1/tx";
import * as _54 from "./feegrant/v1beta1/feegrant";
import * as _55 from "./feegrant/v1beta1/genesis";
import * as _56 from "./feegrant/v1beta1/query";
import * as _57 from "./feegrant/v1beta1/tx";
import * as _58 from "./gov/v1/genesis";
import * as _59 from "./gov/v1/gov";
import * as _60 from "./gov/v1/query";
import * as _61 from "./gov/v1/tx";
import * as _62 from "./gov/v1beta1/genesis";
import * as _63 from "./gov/v1beta1/gov";
import * as _64 from "./gov/v1beta1/query";
import * as _65 from "./gov/v1beta1/tx";
import * as _66 from "./group/v1/events";
import * as _67 from "./group/v1/genesis";
import * as _68 from "./group/v1/query";
import * as _69 from "./group/v1/tx";
import * as _70 from "./group/v1/types";
import * as _71 from "./slashing/v1beta1/genesis";
import * as _72 from "./slashing/v1beta1/query";
import * as _73 from "./slashing/v1beta1/slashing";
import * as _74 from "./slashing/v1beta1/tx";
import * as _75 from "./staking/v1beta1/authz";
import * as _76 from "./staking/v1beta1/genesis";
import * as _77 from "./staking/v1beta1/query";
import * as _78 from "./staking/v1beta1/staking";
import * as _79 from "./staking/v1beta1/tx";
import * as _80 from "./tx/signing/v1beta1/signing";
import * as _81 from "./tx/v1beta1/service";
import * as _82 from "./tx/v1beta1/tx";
import * as _83 from "./upgrade/v1beta1/query";
import * as _84 from "./upgrade/v1beta1/tx";
import * as _85 from "./upgrade/v1beta1/upgrade";
import * as _145 from "./authz/v1beta1/tx.amino";
import * as _146 from "./bank/v1beta1/tx.amino";
import * as _147 from "./crisis/v1beta1/tx.amino";
import * as _148 from "./distribution/v1beta1/tx.amino";
import * as _149 from "./evidence/v1beta1/tx.amino";
import * as _150 from "./feegrant/v1beta1/tx.amino";
import * as _151 from "./gov/v1/tx.amino";
import * as _152 from "./gov/v1beta1/tx.amino";
import * as _153 from "./group/v1/tx.amino";
import * as _154 from "./slashing/v1beta1/tx.amino";
import * as _155 from "./staking/v1beta1/tx.amino";
import * as _156 from "./upgrade/v1beta1/tx.amino";
import * as _157 from "./authz/v1beta1/tx.registry";
import * as _158 from "./bank/v1beta1/tx.registry";
import * as _159 from "./crisis/v1beta1/tx.registry";
import * as _160 from "./distribution/v1beta1/tx.registry";
import * as _161 from "./evidence/v1beta1/tx.registry";
import * as _162 from "./feegrant/v1beta1/tx.registry";
import * as _163 from "./gov/v1/tx.registry";
import * as _164 from "./gov/v1beta1/tx.registry";
import * as _165 from "./group/v1/tx.registry";
import * as _166 from "./slashing/v1beta1/tx.registry";
import * as _167 from "./staking/v1beta1/tx.registry";
import * as _168 from "./upgrade/v1beta1/tx.registry";
import * as _169 from "./auth/v1beta1/query.lcd";
import * as _170 from "./authz/v1beta1/query.lcd";
import * as _171 from "./bank/v1beta1/query.lcd";
import * as _172 from "./base/tendermint/v1beta1/query.lcd";
import * as _173 from "./distribution/v1beta1/query.lcd";
import * as _174 from "./evidence/v1beta1/query.lcd";
import * as _175 from "./feegrant/v1beta1/query.lcd";
import * as _176 from "./gov/v1/query.lcd";
import * as _177 from "./gov/v1beta1/query.lcd";
import * as _178 from "./group/v1/query.lcd";
import * as _179 from "./slashing/v1beta1/query.lcd";
import * as _180 from "./staking/v1beta1/query.lcd";
import * as _181 from "./tx/v1beta1/service.lcd";
import * as _182 from "./upgrade/v1beta1/query.lcd";
import * as _183 from "./auth/v1beta1/query.rpc.Query";
import * as _184 from "./authz/v1beta1/query.rpc.Query";
import * as _185 from "./bank/v1beta1/query.rpc.Query";
import * as _186 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _187 from "./distribution/v1beta1/query.rpc.Query";
import * as _188 from "./evidence/v1beta1/query.rpc.Query";
import * as _189 from "./feegrant/v1beta1/query.rpc.Query";
import * as _190 from "./gov/v1/query.rpc.Query";
import * as _191 from "./gov/v1beta1/query.rpc.Query";
import * as _192 from "./group/v1/query.rpc.Query";
import * as _193 from "./slashing/v1beta1/query.rpc.Query";
import * as _194 from "./staking/v1beta1/query.rpc.Query";
import * as _195 from "./tx/v1beta1/service.rpc.Service";
import * as _196 from "./upgrade/v1beta1/query.rpc.Query";
import * as _197 from "./authz/v1beta1/tx.rpc.msg";
import * as _198 from "./bank/v1beta1/tx.rpc.msg";
import * as _199 from "./crisis/v1beta1/tx.rpc.msg";
import * as _200 from "./distribution/v1beta1/tx.rpc.msg";
import * as _201 from "./evidence/v1beta1/tx.rpc.msg";
import * as _202 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _203 from "./gov/v1/tx.rpc.msg";
import * as _204 from "./gov/v1beta1/tx.rpc.msg";
import * as _205 from "./group/v1/tx.rpc.msg";
import * as _206 from "./slashing/v1beta1/tx.rpc.msg";
import * as _207 from "./staking/v1beta1/tx.rpc.msg";
import * as _208 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _232 from "./lcd";
import * as _233 from "./rpc.query";
import * as _234 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._20,
      ..._21,
      ..._22,
      ..._169,
      ..._183
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._145,
      ..._157,
      ..._170,
      ..._184,
      ..._197
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._28,
      ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._146,
      ..._158,
      ..._171,
      ..._185,
      ..._198
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
    export namespace tendermint {
      export const v1beta1 = {
        ..._36,
        ..._172,
        ..._186
      };
    }
    export const v1beta1 = {
      ..._37
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._38,
      ..._39,
      ..._147,
      ..._159,
      ..._199
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._40
    };
    export namespace hd {
      export const v1 = {
        ..._41
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._42
      };
    }
    export const multisig = {
      ..._43
    };
    export const secp256k1 = {
      ..._44
    };
    export const secp256r1 = {
      ..._45
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._148,
      ..._160,
      ..._173,
      ..._187,
      ..._200
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._149,
      ..._161,
      ..._174,
      ..._188,
      ..._201
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._150,
      ..._162,
      ..._175,
      ..._189,
      ..._202
    };
  }
  export namespace gov {
    export const v1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._151,
      ..._163,
      ..._176,
      ..._190,
      ..._203
    };
    export const v1beta1 = {
      ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._152,
      ..._164,
      ..._177,
      ..._191,
      ..._204
    };
  }
  export namespace group {
    export const v1 = {
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._153,
      ..._165,
      ..._178,
      ..._192,
      ..._205
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._154,
      ..._166,
      ..._179,
      ..._193,
      ..._206
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._75,
      ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._155,
      ..._167,
      ..._180,
      ..._194,
      ..._207
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._80
      };
    }
    export const v1beta1 = {
      ..._81,
      ..._82,
      ..._181,
      ..._195
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._83,
      ..._84,
      ..._85,
      ..._156,
      ..._168,
      ..._182,
      ..._196,
      ..._208
    };
  }
  export const ClientFactory = {
    ..._232,
    ..._233,
    ..._234
  };
}