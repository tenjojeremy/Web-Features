## Usage

#### Array with single values

```js
import { array } from '@tenjo/web-toolkit'

const arrayOfStrings = ['1', '2', '3']
const result = array('filter', {
  array: arrayOfSingleValues,
  condition: '===',
  value: '3',
})

// ['3']
```

#### Array with objects

```js
import { array } from '@tenjo/web-toolkit'

const arrayOfObjects = [
  { id: 1, name: 'jeremy' },
  { id: 2, name: 'hayle' },
  { id: 3, name: 'jen' },
]
const result = array('filter', {
  array: arrayOfObjects,
  post: 'id',
  condition: '===',
  value: 2,
})

// [{ id: 2, name: 'hayle' }]
```