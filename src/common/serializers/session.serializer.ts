import { PassportSerializer } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";

@Injectable()
export class SessionSerializer extends PassportSerializer {
  //serialize user
  serializeUser (user: any, done: (err:Error, user: any) => void): any {
    done(null, user);
  }
  //deserialize user
  deserializeUser(payload: any, done: (err: Error, payload: string) => void): any {
    done(null, payload);
  }
}