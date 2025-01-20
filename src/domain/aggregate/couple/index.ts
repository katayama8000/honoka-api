import type { UserId } from "../../value_object/user_id";

class Couple {

    constructor(private readonly _user_id1: UserId, private readonly _user_id2: UserId) { }

    // Getters
    get user_id1(): UserId {
        return this._user_id1;
    }

    get user_id2(): UserId {
        return this._user_id2;
    }
}
