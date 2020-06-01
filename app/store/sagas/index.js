import watchSearchUser from "./watchSearchUser";
import watchTyping from "./watchTyping";
import watchDetailUser from "./watchDetailUser";

const sagas = [
    watchSearchUser,
    watchTyping,
    watchDetailUser,
];

export const initSagas = (sagaMiddleware) =>
    sagas.forEach(sagaMiddleware.run.bind(sagaMiddleware))
