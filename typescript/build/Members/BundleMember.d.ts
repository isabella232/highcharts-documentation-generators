/*!*
 *
 *  Copyright (C) Highsoft AS
 *
 * */
import * as M from './';
import TS from 'typescript';
export declare class BundleMember extends M.Member<TS.Bundle> {
    toJSON(): BundleMemberJSON;
}
export interface BundleMemberJSON extends M.MemberJSON {
    children: Array<M.MemberJSON>;
    kind: 'bundle';
}
export default BundleMember;
