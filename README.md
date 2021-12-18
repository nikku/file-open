# file-open

Opens a file from the browser.


## Usage

```js
import fileOpen from 'file-open';

const button = document.querySelector('#chooser-button');

button.addEventListener('click', async function() {
  const files = await fileOpen();

  console.log(files);
});
```

## API

### `fileOpen(opts) => Promise<File[]>`

- `opts.multiple` Allows selection of multiple files
- `opts.accept` Specifies allowed file extensions or MIME types. [more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Limiting_accepted_file_types)


## See also

* [file-drops](https://github.com/nikku/file-drops) - simple browser file drop utility


## License

MIT