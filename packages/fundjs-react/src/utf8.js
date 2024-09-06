//@ts-nocheck
/**
* This file and any referenced files were automatically generated by @cosmology/telescope@1.8.3
* DO NOT MODIFY BY HAND. Instead, download the latest proto files for your chain
* and run the transpile command or npm scripts command that is used to regenerate this bundle.
*/
// Copyright (c) 2016, Daniel Wirtz  All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
// * Redistributions of source code must retain the above copyright
//   notice, this list of conditions and the following disclaimer.
// * Redistributions in binary form must reproduce the above copyright
//   notice, this list of conditions and the following disclaimer in the
//   documentation and/or other materials provided with the distribution.
// * Neither the name of its author, nor the names of its contributors
//   may be used to endorse or promote products derived from this software
//   without specific prior written permission.
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utf8Length = utf8Length;
exports.utf8Read = utf8Read;
exports.utf8Write = utf8Write;
/**
 * Calculates the UTF8 byte length of a string.
 * @param {string} string String
 * @returns {number} Byte length
 */
function utf8Length(str) {
    let len = 0, c = 0;
    for (let i = 0; i < str.length; ++i) {
        c = str.charCodeAt(i);
        if (c < 128)
            len += 1;
        else if (c < 2048)
            len += 2;
        else if ((c & 0xfc00) === 0xd800 &&
            (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            ++i;
            len += 4;
        }
        else
            len += 3;
    }
    return len;
}
/**
 * Reads UTF8 bytes as a string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} String read
 */
function utf8Read(buffer, start, end) {
    const len = end - start;
    if (len < 1)
        return "";
    const chunk = [];
    let parts = [], i = 0, // char offset
    t; // temporary
    while (start < end) {
        t = buffer[start++];
        if (t < 128)
            chunk[i++] = t;
        else if (t > 191 && t < 224)
            chunk[i++] = ((t & 31) << 6) | (buffer[start++] & 63);
        else if (t > 239 && t < 365) {
            t =
                (((t & 7) << 18) |
                    ((buffer[start++] & 63) << 12) |
                    ((buffer[start++] & 63) << 6) |
                    (buffer[start++] & 63)) -
                    0x10000;
            chunk[i++] = 0xd800 + (t >> 10);
            chunk[i++] = 0xdc00 + (t & 1023);
        }
        else
            chunk[i++] =
                ((t & 15) << 12) |
                    ((buffer[start++] & 63) << 6) |
                    (buffer[start++] & 63);
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode(...chunk));
            i = 0;
        }
    }
    if (parts) {
        if (i)
            parts.push(String.fromCharCode(...chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode(...chunk.slice(0, i));
}
/**
 * Writes a string as UTF8 bytes.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Bytes written
 */
function utf8Write(str, buffer, offset) {
    const start = offset;
    let c1, // character 1
    c2; // character 2
    for (let i = 0; i < str.length; ++i) {
        c1 = str.charCodeAt(i);
        if (c1 < 128) {
            buffer[offset++] = c1;
        }
        else if (c1 < 2048) {
            buffer[offset++] = (c1 >> 6) | 192;
            buffer[offset++] = (c1 & 63) | 128;
        }
        else if ((c1 & 0xfc00) === 0xd800 &&
            ((c2 = str.charCodeAt(i + 1)) & 0xfc00) === 0xdc00) {
            c1 = 0x10000 + ((c1 & 0x03ff) << 10) + (c2 & 0x03ff);
            ++i;
            buffer[offset++] = (c1 >> 18) | 240;
            buffer[offset++] = ((c1 >> 12) & 63) | 128;
            buffer[offset++] = ((c1 >> 6) & 63) | 128;
            buffer[offset++] = (c1 & 63) | 128;
        }
        else {
            buffer[offset++] = (c1 >> 12) | 224;
            buffer[offset++] = ((c1 >> 6) & 63) | 128;
            buffer[offset++] = (c1 & 63) | 128;
        }
    }
    return offset - start;
}
