// Helper function that takes the character code of argument 'a' and subtracts 65 from it.
const cipher = a => a.charCodeAt(0) - 65;

const vigenere = (text, key, decode) => {
  let i = 0; // let i = 0
  let b; // let b exist
  key = key.toUpperCase().replace(/[^A-Z]/g, ''); // Takes inputted key and transforms to uppercase and replaces all non A-Z character to nothing.
  // Returns text, transform to uppercase, removes all none A-Z, replace all A-Z with the callback function which runs through the algorithm
  return text
    .toUpperCase()
    .replace(/[^A-Z]/g, '')
    .replace(/[A-Z]/g, a => {
      b = key[i++ % key.length];
      return String.fromCharCode(
        // Single letter encryption/decryption.
        // Runs cipher(a) + 26 - cipher(b) IF decode === true, else cipher(b) mod 26, then adds 65.
        ((cipher(a) + (decode ? 26 - cipher(b) : cipher(b))) % 26) + 65,
      );
    });
};

// exports as default.
export default vigenere;
