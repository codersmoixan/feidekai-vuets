import isEmpty from "lodash/isEmpty";
import type { ObjectType } from "@/utils/theme/utils/types";

function combinePropsClassNames(
  makeClassNames: ObjectType<string>,
  propsClassNames: ObjectType<string>
): ObjectType<string> {
  if (isEmpty(propsClassNames)) {
    return makeClassNames;
  }

  const combineClassNames: ObjectType<string> = Object.assign(
    {},
    makeClassNames
  );

  for (const key in propsClassNames) {
    if (combineClassNames[key]) {
      combineClassNames[key] = combineClassNames[
        key
      ] += ` ${propsClassNames[key]}`;
    }
  }

  return combineClassNames;
}

export default combinePropsClassNames;
