import { all, fork } from "redux-saga/effects";
import user from "./user";
import manager from "./manager";

export default function* root() {
    const sagas = [
        user,
        manager
    ];
    yield all(sagas.map(fork));
}
