#!/usr/bin/env bash
# Sync the vendored proto snapshot under packages/fundjs/protos/mainchain/
# from the canonical upstream repos.
#
# Expected sibling-repo layout:
#   ../mainchain   -> github.com/unification-com/mainchain  (beacon, wrkchain, enterprise)
#   ../x-stream    -> github.com/unification-com/x-stream   (stream)
#
# Run from packages/fundjs/. After sync, run `yarn codegen && yarn build`.

set -euo pipefail

ROOT=$(cd "$(dirname "$0")/.." && pwd)
PROTOS=$ROOT/protos/mainchain
MAINCHAIN=$ROOT/../../../mainchain/proto/mainchain
XSTREAM=$ROOT/../../../x-stream/proto/mainchain

for src_root in "$MAINCHAIN" "$XSTREAM"; do
  if [ ! -d "$src_root" ]; then
    echo "missing upstream proto dir: $src_root" >&2
    exit 1
  fi
done

for mod in beacon wrkchain enterprise; do
  src=$MAINCHAIN/$mod/v1
  dst=$PROTOS/$mod/v1
  [ -d "$src" ] || { echo "missing $src" >&2; exit 1; }
  mkdir -p "$dst"
  cp "$src"/*.proto "$dst/"
  echo "synced $mod from mainchain"
done

src=$XSTREAM/stream/v1
dst=$PROTOS/stream/v1
[ -d "$src" ] || { echo "missing $src" >&2; exit 1; }
mkdir -p "$dst"
cp "$src"/*.proto "$dst/"
echo "synced stream from x-stream"
