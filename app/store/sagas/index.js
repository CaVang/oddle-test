import watchSearchUser from "./watchSearchUser";
import watchTyping from "./watchTyping";

const sagas = [
    watchSearchUser,
    watchTyping,
];

export const initSagas = (sagaMiddleware) =>
    sagas.forEach(sagaMiddleware.run.bind(sagaMiddleware))
