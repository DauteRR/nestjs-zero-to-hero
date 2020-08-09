import { Strategy } from 'passport-jwt';
import { JwtPayload } from './jwt-payload.interface';
import { UserRepository } from './user.repository';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userRepository;
    constructor(userRepository: UserRepository);
    validate(payload: JwtPayload): Promise<import("./user.entity").User>;
}
export {};
