const crypto = require("crypto");

const algorithm = "aes-256-cbc";
const password = "p-a-s-s-w-o-r-d";
const passwordSalt = "p-a-s-s-w-o-r-d-s-a-l-t";

const key = crypto.scryptSync(password, passwordSalt, 32);
const iv = new Uint8Array(16);

function encryptUrl(url) {
  const cipher = crypto.createCipheriv(algorithm, key, iv);

  let encrypted = cipher.update(url, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

function decryptUrl(url) {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);

  let decrypted = decipher.update(url, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

function makeLink(encryptedUrl) {
  return `http://127.0.0.1:3090/url/${encryptedUrl}`;
}

module.exports = {
  encryptUrl,
  decryptUrl,
  makeLink
};
