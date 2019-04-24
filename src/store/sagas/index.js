import { all, fork } from "redux-saga/effects";
import user from "./user";
import saveUsers from "./saveUsers";

export default function* root() {
    const sagas = [
        user,
        saveUsers
    ];
    yield all(sagas.map(fork));
}
