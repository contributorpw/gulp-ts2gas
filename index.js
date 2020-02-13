module.exports = function(through, ts2gas) {
  return through.obj(function(vinylFile, encoding, callback) {
    if (vinylFile.extname === ".ts") {
      // (See https://github.com/wearefractal/vinyl for vinyl attributes and functions)
      const transformedFile = vinylFile.clone();
      // 2. set new contents
      // * contents can only be a Buffer, Stream, or null
      // * This allows us to modify the vinyl file in memory and prevents the need to write back to the file system.
      transformedFile.contents = Buffer.from(
        ts2gas(vinylFile.contents.toString(encoding)),
        encoding
      );
      transformedFile.extname = ".js";
      // 3. pass along transformed file for use in next `pipe()`
      callback(null, transformedFile);
    } else {
      callback(null, vinylFile);
    }
  });
};
