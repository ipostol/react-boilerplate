# bidstack-react-agency

FRONTEND_FLOW

У нас есть сейчас 4 репозитория

1) bidstack-react (core)
2) bidstack-react-agency (core)
3) bidsatck-uikit (ui components)
4) bidsatck-theme (css)

Идем от самого легкого, поступает задача сделать кнопки и инпуты какие-то например, исходя из нее ты понимаешь что это ui компоненты и они буду переиспользоватся. (Этот компонента должен быть без внешних margin и т.д., что-бы его могли все переиспользовать в 90% компонент будет выглядеть так (вкинуть можно любые пропсы через spread и className сверху добавить что-бы например сделать `& + & { margin-top: 4px }`)
```
const button = ({ a, b, className, ...rest }) => (
  <button {...rest} a={a} b={b} className={cn(styles.general, className)} />
);
```

По ходу действия будут добавлятся цвета, медиа правила, их нужно ложить в bidstack-theme (он будет использоватся в core репозиториях и uikit соотвественно)

### Пример доки:
```
import React from 'react';
import Component from './Component';

export default () => (
  <div style={{ height: '100%' }}>
    <Component />
  </div>
);

```

В bidstack-theme можно лить всякте правила прямо в мастер аккуратно (там практически нету зависимостей).

В bidstack-material-uikit для каждого набора фич желательно делать ветку и pr в мастер.

Если ставится задача сделать целую страницу, то вначале нужно определится что попадет в uikit и туда это занести, а потом сделать остальной скелет в core репе.

В bidsatck-react-agency будет чуть другая структура чем у bidstack-react (bidstack-react, когда большинство кода перенесем в uikit, тоже будет так выглядеть)
```
/components
   /SomeComponent
   /SomeComponent2
/pages
/frames
```

Везде можно поднять react-markup и посмотреть что надо

||) Как обновлять пакеты: допустим добавили что-то в bidstack-theme - запушил, теперь хочешь что-бы у тебя это обновилось где-либо, делаешь `npm update` в корне репозитория - все ок.
Также можно вручную в package.json прописать вместо `git+https://3ef556bab913dec272d6361d7adf263dd0cda90f:x-oauth-basic@github.com/bidstackcom/bidstack-material-uikit` => `git+https://3ef556bab913dec272d6361d7adf263dd0cda90f:x-oauth-basic@github.com/bidstackcom/bidstack-material-uikit#devel-branch-1` и в модули попадет код именно с этой ветки (допустим что-бы временно протестировать что-то, не выливая это в мастер).

