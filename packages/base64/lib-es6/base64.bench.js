// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
import { encode, decode } from "./base64";
import { benchmark, report, byteSeq } from "@stablelib/benchmark";
var buf = byteSeq(1024);
var encBuf = encode(buf);
report("Base64 encode", benchmark(function () { return encode(buf); }, buf.length));
// Decode benchmark reports MiB/s for decoded MiB, not input.
report("Base64 decode", benchmark(function () { return decode(encBuf); }, buf.length));
if (typeof Buffer !== "undefined") {
    // For comparison with Node.js buffer speed.
    var nodeBuf_1 = Buffer.from(buf);
    var nodeEncBuf_1 = nodeBuf_1.toString("base64");
    report("Buffer - Base64 encode", benchmark(function () {
        return nodeBuf_1.toString("base64");
    }, nodeBuf_1.length));
    report("Buffer - Base64 decode", benchmark(function () {
        return Buffer.from(nodeEncBuf_1, "base64");
    }, nodeBuf_1.length));
}
//# sourceMappingURL=base64.bench.js.map