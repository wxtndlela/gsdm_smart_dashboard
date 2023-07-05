import { Injectable, NgZone } from "@angular/core";
import * as bcrypt from 'bcryptjs';


@Injectable()
export class PasswordService {
    hash_password(password) {
        const salt = bcrypt.genSaltSync(10);
        var pass = bcrypt.hashSync(password, salt);
        return {
            salt: salt,
            pass: pass
        }
    }

    async validate_password(password, encrpted_password) {
        return bcrypt.compareSync(password, encrpted_password)
    }

}