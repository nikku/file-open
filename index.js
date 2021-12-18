export function fileOpen(opts = {}) {

  let resolve, reject;

  const promise = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });

  const input = document.createElement('input');

  if (opts.multiple) {
    input.setAttribute('multiple', '');
  }

  if (opts.accept) {
    input.setAttribute('accept', opts.accept);
  }

  input.setAttribute('type', 'file');
  input.style.display = 'none';

  input.addEventListener('change', function() {
    asyncMap(input.files, readFile, function(err, files) {

      console.log(files);

      if (err) {
        reject(err);
      } else {
        resolve(files);
      }

      input.remove();
    });

  });

  document.body.appendChild(input);

  const event = document.createEvent('MouseEvent');
  event.initMouseEvent('click', false, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  input.dispatchEvent(event);

  return promise;
}


// helpers ///////////////

function readFile(file, done) {

  if (!window.FileReader) {
    return done();
  }

  var reader = new FileReader();

  // closure to capture the file information.
  reader.onload = function(e) {

    done(null, {
      name: file.name,
      path: file.path,
      contents: e.target.result
    });
  };

  reader.onerror = function(event) {
    done(event.target.error);
  };

  // read in the image file as a data URL.
  reader.readAsText(file);
}


function asyncMap(elements, iterator, done) {

  var idx = 0,
      results = [];

  function next() {

    if (idx === elements.length) {
      done(null, results);
    } else {

      iterator(elements[idx], function(err, result) {

        if (err) {
          return done(err);
        } else {
          results[idx] = result;
          idx++;

          next();
        }
      });
    }
  }

  next();
}