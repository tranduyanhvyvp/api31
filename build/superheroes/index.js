"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createActor = exports.canisterId = void 0;
var agent_1 = require("@dfinity/agent");
var superheroes_did_js_1 = require("./superheroes.did.js");
exports.canisterId = "rrkah-fqaaa-aaaaa-aaaaq-cai";
/**
 * @param {{agent: import("@dfinity/agent").HttpAgent}} [options]
 * @return {import("@dfinity/agent").ActorSubclass<import("./Cronics.did.js")._SERVICE>}
 */
var createActor = function (agent) {
    // Fetch root key for certificate validation during development
    if (process.env.NEXT_PUBLIC_DFX_NETWORK === "local") {
        agent.fetchRootKey();
    }
    // Creates an actor with using the candid interface and the HttpAgent
    return agent_1.Actor.createActor(superheroes_did_js_1.idlFactory, {
        agent: agent,
        canisterId: exports.canisterId,
    });
};
exports.createActor = createActor;
