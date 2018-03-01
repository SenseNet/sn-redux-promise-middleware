# sn-redux-promise-middleware
sensenet's redux promise middleware enables handling of async actions in Redux based on [Redux Promise Middleware](https://github.com/pburtchaell/redux-promise-middleware). This middleware is a custom implementation of the mentioned one so install, include and use it the same way except that: 
- it needs a ```repository``` as an input param, so that sensenet repository and the related API can be used inside Actions,
- it does not have a customizable config
    - Action suffixes are hardcoded (LOADING, SUCCESS, FAILURE)
    - Action delimiter is hardcoded '_'

## Install

``` npm i redux-promise-middleware -s ```

## Setup

``` Typescript
import { Repository } from '@sensenet/client-core'
import promiseMiddleware from '@sensenet/redux-promise-middleware'

const repository = new Repository({ repositoryUrl: 'https://mySensenetSite.com' }, async () => ({ ok: true } as any))

...

const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware([promiseMiddleware(repository)]),
)
```

## Use

About how to use it with Actions check [sn-redux](https://github.com/SenseNet/sn-redux) docs.