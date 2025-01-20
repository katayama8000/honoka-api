import type { UserId } from "../../../value_object/user_id";

export class User {


    constructor(private readonly _id: UserId) {
    }

    // Getters
    get id(): UserId {
        return this._id;
    }
}
