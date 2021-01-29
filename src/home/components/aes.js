const aes = {
  cipher: 'aes-256-cbc',
  keyLen: 32,
  masterKey: 'D*#$n%$y0%@0!',
  salt: '07234367892723436789072343678927',
  iv: '99560438109956043810995604381010',
  keyIterations: 100,
  base64: true,
  macLen: 32,
  macKeyLen: 32,
  saltLen: 16,
  ivLen: 16,
  AES: {
    Encrypt: 1,
    Decrypt: 2,
  },
};


const crypto = require('crypto');

const { AES } = aes;

class AESEncryption {
constructor() {
this.keyLen = aes.keyLen;
this.algorithm = aes.cipher;
this.masterKey = aes.masterKey;
this.salt = aes.salt;
this.iv = aes.iv;
this.keyIterations = aes.keyIterations;
this.base64 = aes.base64;
this.macLen = aes.macLen;
this.macKeyLen = aes.macKeyLen;
this.saltLen = aes.saltLen;
this.ivLen = aes.ivLen;
}

hexStringToByteArray(hexString) {
if (typeof hexString !== 'string') throw new Error(' expects a string.');

const result = [];
for (let i = 0, charsLength = hexString.length; i < charsLength; i += 2)
  result.push(parseInt(hexString.substring(i, i + 2), 16));

return Buffer.from(Uint8Array.from(result));
}

cipher(key, iv, operation) {
if (operation === AES.Encrypt) {
  return crypto.createCipheriv(this.algorithm, key, iv);
}
if (operation === AES.Decrypt) {
  return crypto.createDecipheriv(this.algorithm, key, iv);
}
throw Error('Invalid operation!');
}

hkdfSha256(key, keySize, salt, info) {
let dkey = Buffer.alloc(0);
let hmac = crypto.createHmac('sha256', salt || '');
const prk = hmac.update(key).digest();
const hashLen = 32;

for (let i = 0; i < Math.ceil((1.0 * keySize) / hashLen); i++) {
  hmac = crypto.createHmac('sha256', prk);
  hmac.update(Buffer.concat([dkey.slice(dkey.length - hashLen), Buffer.from(info || ''), Buffer.alloc(1, i + 1)]));
  dkey = Buffer.concat([dkey, hmac.digest()]);
}
return dkey.slice(0, keySize);
}

keys(salt, password) {
let dkey;
if (password !== undefined && password !== null) {
  dkey = crypto.pbkdf2Sync(password, salt, this.keyIterations, this.keyLen + this.macKeyLen, 'sha512');
} else if (this.masterKey !== null) {
  dkey = this.hkdfSha256(this.masterKey, this.keyLen + this.macKeyLen, salt);
} else {
  throw Error('No password or key specified!');
}
return [dkey.slice(0, this.keyLen), dkey.slice(this.keyLen, dkey.length)];
}

sign(ciphertext, key) {
const hmac = crypto.createHmac('sha256', key);
hmac.update(ciphertext);
return hmac.digest();
}

verify(ciphertext, mac, key) {
const ciphertextMac = this.sign(ciphertext, key);
if (!this.constantTimeComparison(mac, ciphertextMac)) {
  throw Error('Mac check failed!');
}
}

constantTimeComparison(macA, macB) {
let result = macA.length ^ macB.length;
for (let i = 0; i < macA.length && i < macB.length; i++) {
  result |= macA[i] ^ macB[i];
}
return result === 0;
}

encrypt(data, privateKey) {
const saltInBuffer = this.hexStringToByteArray(this.salt);
const ivInBuffer = this.hexStringToByteArray(this.iv);

try {
  const _keys = this.keys.call(this, saltInBuffer, privateKey);

  const aesKey = _keys[0];
  const macKey = _keys[1];

  const aes = this.cipher.call(this, aesKey, ivInBuffer, AES.Encrypt);

  const cipherText = Buffer.concat([ivInBuffer, aes.update(data), aes.final()]);
  const mac = this.sign(cipherText, macKey);
  let encrypted = Buffer.concat([saltInBuffer, cipherText, mac]);
  if (this.base64) {
    encrypted = encrypted.toString('base64');
  }
  return encrypted;
} catch (error) {
  throw new Error(error.message);
}
}

decrypt(data, privateKey) {
try {
  if (this.base64) {
    data = Buffer.from(data, 'base64');
  }
  const salt = data.slice(0, this.saltLen);
  const iv = data.slice(this.saltLen, this.saltLen + this.ivLen);
  const ciphertext = data.slice(this.saltLen + this.ivLen, -this.macLen);
  const mac = data.slice(-this.macLen, data.length);

  const _keys = this.keys.call(this, salt, privateKey);
  const aesKey = _keys[0];
  const macKey = _keys[1];

  this.verify(Buffer.concat([iv, ciphertext]), mac, macKey);
  const aes = this.cipher.call(this, aesKey, iv, AES.Decrypt);
  const plaintext = Buffer.concat([aes.update(ciphertext), aes.final()]);
  return plaintext.toString();
} catch (error) {
  throw new Error(error.message);
}
}
}

export default new AESEncryption();
 