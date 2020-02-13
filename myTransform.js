const through = require("through2");

module.exports = function(ts2gas) {
  // return a `through2` stream for `pipe()` compatibility at the node level
  return through.obj(function(vinylFile, encoding, callback) {
    // 1. clone new vinyl file for manipulation
    // (See https://github.com/wearefractal/vinyl for vinyl attributes and functions)
    const transformedFile = vinylFile.clone();

    // 2. set new contents
    // * contents can only be a Buffer, Stream, or null
    // * This allows us to modify the vinyl file in memory and prevents the need to write back to the file system.
    transformedFile.contents = Buffer.from(
      ts2gas(vinylFile.contents.toString(encoding)),
      encoding
    );

    // 3. pass along transformed file for use in next `pipe()`
    callback(null, transformedFile);
  });
}; //myTransform()
