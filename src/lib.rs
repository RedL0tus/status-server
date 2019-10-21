//! Authenticate request with RustCrypto's HMAC implementation.

// WASM
extern crate cfg_if;
extern crate wasm_bindgen;

// RustCrypto
extern crate hmac;
extern crate sha2;

mod utils;

use cfg_if::cfg_if;
use wasm_bindgen::prelude::*;

use hex::FromHex;
use hmac::{Hmac, Mac};
use sha2::Sha512;

type HmacSha512 = Hmac<Sha512>;

cfg_if! {
    // When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
    // allocator.
    if #[cfg(feature = "wee_alloc")] {
        extern crate wee_alloc;
        #[global_allocator]
        static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;
    }
}

/// Unwrap `Option<T>` or return false
#[macro_export]
macro_rules! unwrap_or_false {
    ($e:expr) => {
        match $e {
            Some(content) => content,
            _ => return false,
        }
    };
}

#[wasm_bindgen]
pub fn greet() -> String {
    "Hello, wasm-worker!".to_string()
}

#[wasm_bindgen]
pub fn authenticate(
    secret: Option<String>,
    message: Option<String>,
    signature: Option<String>,
) -> bool {
    let secret_unwrapped = unwrap_or_false!(secret);
    let message_unwrapped = unwrap_or_false!(message);
    let signature_unwrapped = unwrap_or_false!(signature);
    let signature_hex = signature_unwrapped.as_bytes();
    if let Ok(signature_bytes) = Vec::from_hex(signature_hex) {
        let secret_bytes = secret_unwrapped.as_bytes();
        let message_bytes = message_unwrapped.as_bytes();
        let mut mac = unwrap_or_false!(HmacSha512::new_varkey(secret_bytes).ok());
        mac.input(message_bytes);
        return mac.verify(&signature_bytes).is_ok();
    }
    false
}
