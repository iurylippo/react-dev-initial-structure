type ActionTypeMap<T extends string> = { [key in T]: string };

export const createActionTypesMap = <T extends string>(prefix: string, types: T[]): ActionTypeMap<T> =>
    types.reduce(
        (obj, key) => ({
            ...obj,
            [key]: `${prefix}${key}`,
        }),
        {} as ActionTypeMap<T>,
    );

export const otherHelpers = () => 'test';

// // import React, { useState } from 'react';

// // First we need to add a type to let us extend the incoming component.
// type ExtraInfoType = {
//     extraInfo: string;
// };
// // Mark the function as a generic using P (or whatever variable you want)
// export function withExtraInfo<P>(
//     // Then we need to type the incoming component.
//     // This creates a union type of whatever the component
//     // already accepts AND our extraInfo prop
//     WrappedComponent: React.ComponentType<P & ExtraInfoType>,
// ) {
//     const [extraInfo, setExtraInfo] = useState('');
//     setExtraInfo('important data.');

//     const ComponentWithExtraInfo = (props: P) => {
//         // At this point, the props being passed in are the original props the component expects.
//         return <WrappedComponent {...props} extraInfo={extraInfo} />;
//     };
//     return ComponentWithExtraInfo;
// }
