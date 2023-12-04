use close on click outside
=============
### The perfect external click handler

The useCloseOnClickOutside hook leverages the power of React's useEffect and useState hooks to provide a seamless integration into your project. 
Simply pass a ref object representing the target element to monitor, and the hook will manage the active state for you. 
When a click occurs outside the element, the modalActive state is automatically set to false, enabling you to respond and update your UI accordingly.


Installation
------------

``` bash
$ npm install use-close-on-click-outside
```


## Configuration

const [ modalActive, setModalActive ] = useCloseOnClickOutside(modalRef, '#root')

The second prop passed is an optional prop that should be the selector of the target element

| Option              | Default            | Description                                                         |
| ------------------- | ------------------ | ------------------------------------------------------------------- |
| `Target`        | `document`             | The target element e.g `#root`, `.app-root`, `document`. It switches to document if target element is invalid or null|



Typescript Example
-------

``` typescript
import { useRef } from 'react'
import useCloseOnClickOutside from "use-close-on-click-outside";

const App = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [ modalActive, setModalActive ] = useCloseOnClickOutside(modalRef)

  return (
    <div>
      <button onClick={() => setModalActive(true)}>toggle modal active</button>
        {
          modalActive
            &&
            <>
              <div ref={modalRef} className="modal">
                <h2>This is a modal</h2>
                <h4>Click outside this modal to close</h4>
              </div>
            </>
        }
    </div>
  )
}

```
Javascript Example
-------

``` javascript
import { useRef } from 'react'
import useCloseOnClickOutside from "use-close-on-click-outside";

const App = () => {
  const modalRef = useRef(null);
  const [ modalActive, setModalActive ] = useCloseOnClickOutside(modalRef)

  return (
    <div>
      <button onClick={() => setModalActive(true)}>toggle modal active</button>
        {
          modalActive
            &&
            <>
              <div ref={moalRef} className="modal">
                <h2>This is a modal</h2>
                <h4>Click outside this modal to close</h4>
              </div>
            </>
        }
    </div>
  )
}

export default App




