Status page (server)
====================

Status page for SaltedFish Network, intended to be deployed to CloudFlare Workers.

Functionality
-------------
Generate page with records stored in CloudFlare Workers KV storage.  
Authenticate records using HMAC-SHA512 algorithm with RustCrypto libraries compiled to WASM (since I failed to figure out how to use WebCrypto).

Written by TabNine (XD).