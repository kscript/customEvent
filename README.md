### customEvent

### 使用方法
``` js
import Quill from 'quill'
import CustomEvent from './CustomEvent.js';
Quill.register('modules/customEvent', CustomEvent);
```

``` vue
export default {
  data () {
    return {
      options: {
        modules: {
          customEvent: {
            events: [{
              name: 'click',
              handler: event => {
                // ...
              }
            }]
          }
        }
      }
    }
  }
}
```
